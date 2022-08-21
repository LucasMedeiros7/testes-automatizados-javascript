export class Cart {
  items = [];

  add(item) {
    const productIndex = this.items.findIndex(
      ({ product }) => product === item.product
    );

    if (productIndex >= 0) {
      this.items.splice(productIndex, 1);
    }

    this.items.push(item);
  }

  getTotal() {
    return this.items.reduce((acc, item) => {
      return (acc += item.quantity * item.product.price);
    }, 0);
  }
}
