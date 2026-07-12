import type { CartItem } from "../models/CartItem";

export const cartSelectors = {
  totalQuantity: (items: CartItem[]) =>
    items.reduce(
      (sum, item) => sum + item.quantity,
      0
    ),

  distinctProducts: (items: CartItem[]) =>
    items.length,

  totalCost: (items: CartItem[]) =>
    items.reduce(
      (sum, item) =>
        sum + item.product.price * item.quantity,
      0
    ),
};