import { useEffect } from "react";
import { useCartStore } from "../store/cartStore";

export function CartToast() {
  const message = useCartStore(
    (state) => state.lastAddedMessage
  );

  const clearNotification = useCartStore(
    (state) => state.clearNotification
  );

  useEffect(() => {
    if (!message) return;

    const timer = setTimeout(() => {
      clearNotification();
    }, 2500);

    return () => clearTimeout(timer);

  }, [message, clearNotification]);


  if (!message) {
    return null;
  }


  return (
    <div
      className="position-fixed bottom-0 end-0 p-3"
      style={{ zIndex: 9999 }}
    >
      <div className="toast show">

        <div className="toast-header">

          <i className="bi bi-cart-check me-2"></i>

          <strong className="me-auto">
            Basket Updated
          </strong>

        </div>

        <div className="toast-body">
          {message}
        </div>

      </div>
    </div>
  );
}