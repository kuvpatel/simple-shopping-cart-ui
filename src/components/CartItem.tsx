import type { CartItem as CartItemModel } from "../models/CartItem";
import { useCartStore } from "../store/cartStore";

interface CartItemProps {
  item: CartItemModel;
}

export function CartItem({ item }: CartItemProps) {
  const increaseQuantity = useCartStore(
    (state) => state.increaseQuantity
  );

  const decreaseQuantity = useCartStore(
    (state) => state.decreaseQuantity
  );

  const removeItem = useCartStore(
    (state) => state.removeItem
  );

  const subtotal =
    item.product.price * item.quantity;

  return (
    <div className="border-bottom pb-3 mb-3">

      <div className="d-flex justify-content-between">

        <strong>{item.product.productName}</strong>

        <button
          className="btn btn-sm btn-outline-danger"
          onClick={() =>
            removeItem(item.product.productId)
          }
        >
          <i className="bi bi-trash"></i>
        </button>

      </div>

      <div className="mt-2 d-flex align-items-center">

        <button
          className="btn btn-outline-secondary btn-sm"
          onClick={() =>
            decreaseQuantity(item.product.productId)
          }
        >
          -
        </button>

        <span className="mx-3 fw-bold">

          {item.quantity}

        </span>

        <button
          className="btn btn-outline-secondary btn-sm"
          onClick={() =>
            increaseQuantity(item.product.productId)
          }
        >
          +
        </button>

      </div>

      <div className="mt-2 text-muted">

        £{item.product.price.toFixed(2)} each

      </div>

      <div>

        <strong>

          Subtotal £{subtotal.toFixed(2)}

        </strong>

      </div>

    </div>
  );
}