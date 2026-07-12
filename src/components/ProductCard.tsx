import { useState } from "react";

import type { Product } from "../models/Product";
import { useCartStore } from "../store/cartStore";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {

  const addItem = useCartStore(
    (state) => state.addItem
  );

  const [quantity, setQuantity] = useState<number | "">(1);


  const isValidQuantity =
    quantity !== "" &&
    Number.isInteger(quantity) &&
    quantity > 0;


  const handleQuantityChange = (
    value: string
  ) => {

    if (value === "") {
      setQuantity("");
      return;
    }

    setQuantity(Number(value));
  };


  const handleAdd = () => {

    if (!isValidQuantity) {
      return;
    }

    addItem(product, quantity);

    setQuantity(1);
  };


  return (
    <div className="card shadow-sm mb-3 border-0">

      <div className="card-body">

        <div className="row align-items-center">

          {/* Product icon */}
          <div className="col-md-1 text-center">

            <i className="bi bi-box-seam fs-2 text-primary"></i>

          </div>


          {/* Product details */}
          <div className="col-md-5">

            <h5 className="mb-1 fw-bold">
              {product.productName}
            </h5>

            <small className="text-muted">
              Category: {product.categoryId}
            </small>

          </div>


          {/* Price */}
          <div className="col-md-2">

            <span className="fw-bold fs-5">

              £{product.price.toFixed(2)}

            </span>

          </div>


          {/* Quantity */}
          <div className="col-md-2">

            <input
              type="number"
              min="1"
              className={`form-control ${
                !isValidQuantity
                  ? "is-invalid"
                  : ""
              }`}
              value={quantity}
              onChange={(e) =>
                handleQuantityChange(
                  e.target.value
                )
              }
            />

            {!isValidQuantity && (
              <div className="invalid-feedback">
                Enter a valid quantity
              </div>
            )}

          </div>


          {/* Button */}
          <div className="col-md-2">

            <button
              className="btn btn-primary w-100"
              disabled={!isValidQuantity}
              onClick={handleAdd}
            >

              <i className="bi bi-cart-plus me-1"></i>

              Add

            </button>

          </div>

        </div>

      </div>

    </div>
  );
}