import { create } from "zustand";
import { persist } from "zustand/middleware";

import type { CartItem } from "../models/CartItem";
import type { Product } from "../models/Product";

interface CartState {
  items: CartItem[];

  // Transient UI state (not persisted)
  lastAddedMessage: string | null;

  addItem: (product: Product, quantity: number) => void;
  removeItem: (productId: number) => void;

  increaseQuantity: (productId: number) => void;
  decreaseQuantity: (productId: number) => void;

  clearCart: () => void;

  clearNotification: () => void;
}

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      items: [],

      lastAddedMessage: null,

      addItem: (product, quantity) =>
        set((state) => {
          const existingItem = state.items.find(
            (item) => item.product.productId === product.productId
          );

          const message =
            `Added ${product.productName} ×${quantity} to basket`;

          if (existingItem) {
            return {
              items: state.items.map((item) =>
                item.product.productId === product.productId
                  ? {
                      ...item,
                      quantity: item.quantity + quantity,
                    }
                  : item
              ),

              lastAddedMessage: message,
            };
          }

          return {
            items: [
              ...state.items,
              {
                product,
                quantity,
              },
            ],

            lastAddedMessage: message,
          };
        }),


      removeItem: (productId) =>
        set((state) => ({
          items: state.items.filter(
            (item) => item.product.productId !== productId
          ),
        })),


      increaseQuantity: (productId) =>
        set((state) => ({
          items: state.items.map((item) =>
            item.product.productId === productId
              ? {
                  ...item,
                  quantity: item.quantity + 1,
                }
              : item
          ),
        })),


      decreaseQuantity: (productId) =>
        set((state) => ({
          items: state.items
            .map((item) =>
              item.product.productId === productId
                ? {
                    ...item,
                    quantity: item.quantity - 1,
                  }
                : item
            )
            .filter((item) => item.quantity > 0),
        })),


      clearCart: () =>
        set({
          items: [],
        }),


      clearNotification: () =>
        set({
          lastAddedMessage: null,
        }),
    }),

    {
      name: "shopping-cart",

      // Only save the basket
      // Do not save temporary UI notifications
      partialize: (state) => ({
        items: state.items,
      }),
    }
  )
);