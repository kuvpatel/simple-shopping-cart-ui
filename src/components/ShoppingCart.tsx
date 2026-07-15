import { CartItem } from "./CartItem";
import { CartSummary } from "./CartSummary";
import { cartSelectors } from "../store/cartSelectors";
import { CheckoutButton } from "./CheckoutButton";
import type { OrderResponse } from "../models/Order";

import { useCartStore } from "../store/cartStore";

interface ShoppingCartProps {
  customerId: number | null;
  onOrderCreated: (order: OrderResponse) => void;
}

export function ShoppingCart({
  customerId,
  onOrderCreated,
}: ShoppingCartProps) {


  const items = useCartStore(
    (state) => state.items
  );


  const clearCart = useCartStore(
    (state) => state.clearCart
  );


  const totalItems = useCartStore(
    (state) =>
      cartSelectors.totalQuantity(state.items)
  );


  const totalCost = useCartStore(
    (state) =>
      cartSelectors.totalCost(state.items)
  );


  return (
    <div className="card shadow-sm border-0 rounded bg-body-tertiary">

      <div className="card-header bg-primary text-white">

        <h4 className="mb-0 fw-bold">
          <i className="bi bi-cart3 me-2"></i>
          Shopping Basket
        </h4>

      </div>

      <div className="card-body p-4">

        <CartSummary />

        {items.length === 0 ? (

          <div className="text-center text-muted py-5">

            <i className="bi bi-cart-x fs-1"></i>

            <p className="mt-3 mb-0">
              Your basket is empty
            </p>

          </div>

        ) : (

          <>

            <hr />

            <h6 className="fw-bold mb-3">

              Basket Items

            </h6>

            {items.map((item) => (

              <CartItem
                key={item.product.productId}
                item={item}
              />

            ))}

            <hr />

            <div className="bg-white rounded shadow-sm p-3 mb-3">

              <div className="d-flex justify-content-between mb-2">

                <span>Total Items</span>

                <strong>{totalItems}</strong>

              </div>

              <div className="d-flex justify-content-between">

                <span>Total Cost</span>

                <strong>
                  £{totalCost.toFixed(2)}
                </strong>

              </div>

            </div>

            {customerId === null && (

              <div className="alert alert-warning">

                <i className="bi bi-exclamation-triangle me-2"></i>

                Please select a customer before checking out.

              </div>

            )}

            <button
              className="btn btn-outline-danger w-100 mb-3"
              onClick={clearCart}
            >
              <i className="bi bi-trash me-2"></i>
              Clear Basket
            </button>

            {customerId !== null && (
            <CheckoutButton
              customerId={customerId}
              onOrderCreated={onOrderCreated}
            />
          )}

         

          </>

        )}

      </div>

    </div>
  );
}