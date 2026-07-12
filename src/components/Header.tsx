import { useCartStore } from "../store/cartStore";
import { cartSelectors } from "../store/cartSelectors";

export function Header() {

  const totalItems = useCartStore(
    (state) =>
      cartSelectors.totalQuantity(state.items)
  );

  return (
    <nav className="navbar navbar-expand-lg bg-light shadow-sm rounded mb-4">

      <div className="container-fluid">

        <div className="d-flex align-items-center">

          <i className="bi bi-cart-fill fs-2 text-primary me-3"></i>

          <div>
            <h1 className="h3 mb-0 fw-bold">
              Shopping Cart Demo
            </h1>

            <small className="text-muted">
              Zustand powered basket
            </small>
          </div>

        </div>


        <div className="d-flex align-items-center">

          <div className="position-relative">

            <i className="bi bi-basket fs-2"></i>

            {totalItems > 0 && (
              <span
                className="
                  position-absolute
                  top-0
                  start-100
                  translate-middle
                  badge
                  rounded-pill
                  bg-success
                "
              >
                {totalItems}
              </span>
            )}

          </div>

        </div>

      </div>

    </nav>
  );
}