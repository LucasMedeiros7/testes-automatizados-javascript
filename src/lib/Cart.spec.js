import { Cart } from './Cart.js';

describe('Cart', () => {
  let cart;
  const product = {
    title: 'NIKE SB DUNK LOW PRO',
    price: 65388, // 653.88 | R$ 683,88
  };
  const product2 = {
    title: 'JORDAN 1 LOW',
    price: 135388, // 1353.88 | R$ 1.353,88
  };

  beforeEach(() => {
    cart = new Cart();
  });

  describe('getTotal()', () => {
    it('should return 0 when getTotal() is executed in a newly created instance', () => {
      expect(cart.getTotal().getAmount()).toBe(0);
    });

    it('should multiply quantity and price and receive the total amount', () => {
      const item = {
        product,
        quantity: 2, // 130776 | R$ 1.307,76
      };

      cart.add(item);
      expect(cart.getTotal().getAmount()).toEqual(130776);
    });

    it('should ensure no more than on product exists at a time', () => {
      cart.add({
        product,
        quantity: 4,
      });

      cart.add({
        product,
        quantity: 1,
      });

      expect(cart.getTotal().getAmount()).toEqual(65388);
    });

    it('should update total when a product gets included and then removed', () => {
      cart.add({
        product,
        quantity: 2,
      });

      cart.add({
        product: product2,
        quantity: 1,
      });

      cart.remove(product);

      expect(cart.getTotal().getAmount()).toEqual(135388);
    });
  });

  describe('checkout()', () => {
    it('should return an object with the total and the list of items', () => {
      cart.add({
        product,
        quantity: 5,
      });

      cart.add({
        product: product2,
        quantity: 3,
      });

      expect(cart.checkout()).toMatchSnapshot();
    });

    it('should return an object with the total and the list of items when summary() is called', () => {
      cart.add({
        product,
        quantity: 5,
      });

      cart.add({
        product: product2,
        quantity: 3,
      });

      expect(cart.summary()).toMatchSnapshot();
      expect(cart.getTotal().getAmount()).toBeGreaterThan(0);
    });

    it('should reset the cart when checkout() is called', () => {
      cart.add({
        product,
        quantity: 5,
      });
      cart.checkout();
      expect(cart.getTotal().getAmount()).toEqual(0);
    });
  });
});
