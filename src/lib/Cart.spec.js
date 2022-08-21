import { Cart } from "./Cart.js";

describe("Cart", () => {
  let cart;
  let product = {
    title: "NIKE SB DUNK LOW PRO",
    price: 65388, // 353.88 | R$ 383,88
  };

  beforeEach(() => {
    cart = new Cart();
  });

  it("should return 0 when getTotal() is executed in a newly created instance", () => {
    expect(cart.getTotal()).toBe(0);
  });

  it("should multiply quantity and price and receive the total amount", () => {
    const item = {
      product,
      quantity: 2, // 130776
    };

    cart.add(item);

    expect(cart.getTotal()).toEqual(130776);
  });

  it("should ensure no more than on product exists at a time", () => {
    cart.add({
      product,
      quantity: 2,
    });

    cart.add({
      product,
      quantity: 1,
    });

    expect(cart.getTotal()).toEqual(65388);
  });
});
