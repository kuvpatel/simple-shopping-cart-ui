import type { OrderResponse } from "../models/Order";

interface Props {
  order: OrderResponse | null;
  onClose: () => void;
}

export function OrderConfirmationModal({
  order,
  onClose,
}: Props) {

  if (!order) {
    return null;
  }


  return (

    <div
      className="modal fade show"
      style={{
        display: "block",
        backgroundColor: "rgba(0,0,0,0.5)",
      }}
      tabIndex={-1}
    >

      <div className="modal-dialog modal-lg modal-dialog-centered">


        <div className="modal-content shadow">


          {/* Header */}

          <div className="modal-header bg-success text-white">

            <div>

              <h5 className="modal-title mb-1">

                <i className="bi bi-check-circle-fill me-2"></i>

                Order Confirmed

              </h5>


              <small>
                Thank you for your purchase
              </small>

            </div>


            <button

              type="button"

              className="btn-close btn-close-white"

              onClick={onClose}

            />

          </div>



          {/* Body */}

          <div className="modal-body p-4">


            <div className="row mb-4">


              <div className="col-md-6">

                <div className="text-muted small">

                  Order Number

                </div>


                <span className="badge bg-primary fs-6">

                  #{order.orderId}

                </span>


              </div>



              <div className="col-md-6 text-md-end">


                <div className="text-muted small">

                  Order Date

                </div>


                <strong>

                  {new Date(order.orderDate)
                    .toLocaleString()}

                </strong>


              </div>


            </div>



            {/* Customer */}

            <div className="card bg-light mb-4">

              <div className="card-body py-3">


                <h6 className="mb-2">

                  <i className="bi bi-person-fill me-2"></i>

                  Customer

                </h6>


                <div>

                  {order.customerName || 
                    `Customer #${order.customerId}`}

                </div>


              </div>

            </div>



            {/* Items */}

            <h6 className="mb-3">

              <i className="bi bi-bag-check me-2"></i>

              Order Items

            </h6>


            <div className="table-responsive">


              <table className="table table-hover">


                <thead className="table-light">

                  <tr>

                    <th>
                      Product
                    </th>


                    <th className="text-center">
                      Qty
                    </th>


                    <th className="text-end">
                      Price
                    </th>


                    <th className="text-end">
                      Total
                    </th>

                  </tr>

                </thead>


                <tbody>


                  {order.items.map(item => (

                    <tr key={item.orderItemId}>


                      <td className="fw-semibold">

                        {item.productName}

                      </td>


                      <td className="text-center">

                        {item.quantity}

                      </td>


                      <td className="text-end">

                        £{item.unitPrice.toFixed(2)}

                      </td>


                      <td className="text-end">

                        £{item.lineTotal.toFixed(2)}

                      </td>


                    </tr>

                  ))}


                </tbody>


              </table>


            </div>



            {/* Total */}

            <div className="border-top pt-3 text-end">


              <span className="fs-5 me-3">

                Order Total

              </span>


              <strong className="fs-3 text-success">

                £{order.totalAmount.toFixed(2)}

              </strong>


            </div>


          </div>



          {/* Footer */}

          <div className="modal-footer">


            <button

              className="btn btn-primary px-4"

              onClick={onClose}

            >

              <i className="bi bi-cart me-2"></i>

              Continue Shopping

            </button>


          </div>


        </div>

      </div>

    </div>

  );
}