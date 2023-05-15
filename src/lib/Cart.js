import Dinero from 'dinero.js';

const Money = Dinero;
Money.defaultCurrency = 'BRL';
Money.defaultPrecision = 2;

export class Cart {
  items = [];

  add(item) {
    const productIndex = this.items.findIndex(
      ({ product }) => product === item.product
    );
    if (productIndex != -1) this.items.splice(productIndex, 1);
    this.items.push(item);
  }

  getTotal() {
    const total = this.items.reduce((acc, item) => {
      return acc.add(Money({ amount: item.quantity * item.product.price }));
    }, Money({ amount: 0 }));
    return total;
  }

  remove(product) {
    const productIndex = this.items.findIndex(item => item.product === product);
    this.items.splice(productIndex, 1);
  }

  summary() {
    const total = this.getTotal().getAmount();
    const items = this.items;
    return {
      total,
      items,
    };
  }

  checkout() {
    const { total, items } = this.summary();
    this.items = [];
    return {
      total,
      items,
    };
  }
}
