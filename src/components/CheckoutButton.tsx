import { useState } from "react";

import { createOrder } from "../api/orderApi";
import { useCartStore } from "../store/cartStore";

export function CheckoutButton() {

  const items = useCartStore(
    state => state.items
  );

  const clearCart = useCartStore(
    state => state.clearCart
  );


  const [message, setMessage] = useState("");

  const checkout = async () => {

    const request = {
      customerId: 1,

      orderDate:
        new Date().toISOString(),

      items: items.map(item => ({
        productId: item.product.productId,
        quantity: item.quantity
      }))
    };


    try {

      const response =
        await createOrder(request);


      setMessage(
        `Order ${response.orderId} created successfully`
      );


      clearCart();

    }
    catch(error) {

      console.error(error);

      setMessage(
        "Unable to create order"
      );

    }

  };


  return (
    <>
   
      <button
        className="btn btn-success w-100"
        disabled={items.length === 0}
        onClick={checkout}
      >

        <i className="bi bi-credit-card me-2"></i>

        Checkout

      </button>
   

      {message && (
        <div className="alert alert-info mt-3">
          {message}
        </div>
      )}

    </>
  );
}