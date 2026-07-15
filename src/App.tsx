import { useState } from "react";
import { Header } from "./components/Header";
import { ProductList } from "./components/ProductList";
import { CustomerSelector } from "./components/CustomerSelector";
import { ShoppingCart } from "./components/ShoppingCart";
import { CartToast } from "./components/CartToast";
import { OrderConfirmationModal } from "./components/OrderConfirmationModal";
import type { OrderResponse } from "./models/Order";

function App() {

  const [selectedCustomerId, setSelectedCustomerId] =
    useState<number | null>(null);

  const [completedOrder, setCompletedOrder] =
    useState<OrderResponse | null>(null);

  return (

    <div className="container py-4">

      <Header />
      <CartToast />

      <div className="row g-4">
        {/* Product List */}
        <div className="col-lg-8">
          <ProductList />
        </div>

        {/* Shopping Basket */}
        <div className="col-lg-4">

          <CustomerSelector
            value={selectedCustomerId}
            onChange={(customerId) => {
              setSelectedCustomerId(customerId);
            }}
          />

          <ShoppingCart
            customerId={selectedCustomerId}
            onOrderCreated={(order) => {
              setCompletedOrder(order);
            }}
          />

        </div>

      </div>

      <OrderConfirmationModal
        order={completedOrder}
        onClose={() => {
          setCompletedOrder(null);
        }}
      />
    </div>

  );

}

export default App;