
import './App.css'
import { Header } from "./components/Header";
import { ProductList } from "./components/ProductList";
import { ShoppingCart } from "./components/ShoppingCart";
import { CartToast } from "./components/CartToast";

function App() {
  return (
    <div className="container mt-4">

      <CartToast />

      <Header />

      <div className="row">

        <div className="col-lg-8">
          <ProductList />
        </div>

        <div className="col-lg-4">
          <ShoppingCart />
        </div>

      </div>

    </div>
  );
}

export default App;

