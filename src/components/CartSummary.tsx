import { useCartStore } from "../store/cartStore";
import { cartSelectors } from "../store/cartSelectors";

export function CartSummary() {

  const distinctProducts = useCartStore(
    (state) =>
      cartSelectors.distinctProducts(state.items)
  );

  const totalQuantity = useCartStore(
    (state) =>
      cartSelectors.totalQuantity(state.items)
  );

  const totalCost = useCartStore(
    (state) =>
      cartSelectors.totalCost(state.items)
  );


  return (
    <div className="card shadow-sm mb-3">

      <div className="card-header">
        <h5>
          <i className="bi bi-receipt me-2"></i>
          Cart Summary
        </h5>
      </div>

      <div className="card-body">

        <div className="d-flex justify-content-between">
          <span>
            Distinct Products
          </span>

          <strong>
            {distinctProducts}
          </strong>
        </div>


        <div className="d-flex justify-content-between">
          <span>
            Total Quantity
          </span>

          <strong>
            {totalQuantity}
          </strong>
        </div>


        <div className="d-flex justify-content-between">
          <span>
            Total Cost
          </span>

          <strong>
            £{totalCost.toFixed(2)}
          </strong>
        </div>

      </div>

    </div>
  );
}