import { useState } from "react";

import { createOrder } from "../api/orderApi";
import { useCartStore } from "../store/cartStore";

import type {
  CreateOrderRequest,
  OrderResponse,
} from "../models/Order";

interface CheckoutButtonProps {
   customerId: number | null;
  onOrderCreated: (order: OrderResponse) => void;
}

export function CheckoutButton({
  customerId,
  onOrderCreated,
}: CheckoutButtonProps) {
  const items = useCartStore((state) => state.items);

  const clearCart = useCartStore(
    (state) => state.clearCart
  );

  const [isSubmitting, setIsSubmitting] =
    useState(false);

  const [error, setError] = useState("");



const checkout = async () => {

     if (
      items.length === 0 ||
      customerId === null ||
      Number.isNaN(customerId)
    ) {
      return;
    }


    setError("");
    setIsSubmitting(true);

    console.log("customerId =", customerId);

     const request: CreateOrderRequest = {

      customerId,

      orderDate:
        new Date().toISOString(),

      items: items.map((item) => ({

        productId:
          item.product.productId,

        quantity:
          item.quantity,

      })),

    };

    console.log("Order Request:", request);

    try {
      const response = await createOrder(request);
console.log("Order response:", response);
      clearCart();

      onOrderCreated(response);
    } catch (err) {
      console.error(err);

      setError(
        "Unable to create the order. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <button
        className="btn btn-success w-100"
        onClick={checkout}
        disabled={
          isSubmitting ||
          items.length === 0 ||
          customerId === null ||
          Number.isNaN(customerId)
        }
      >
        {isSubmitting ? (
          <>
            <span
              className="spinner-border spinner-border-sm me-2"
              role="status"
              aria-hidden="true"
            ></span>

            Creating Order...
          </>
        ) : (
          <>
            <i className="bi bi-credit-card me-2"></i>

            Checkout
          </>
        )}
      </button>

        {customerId === null && items.length > 0 && (

        <div className="alert alert-warning mt-3 mb-0">

          <i className="bi bi-person-fill me-2"></i>

          Please select a customer before checkout.

        </div>

      )}

      {error && (
        <div className="alert alert-danger mt-3 mb-0">
          <i className="bi bi-exclamation-triangle me-2"></i>

          {error}
        </div>
      )}
    </>
  );
}