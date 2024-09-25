import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import OrderPlacement from "./pages/OrderPlacement";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    {/* Incomplete ==> Lazy Loading will be applied at end */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/men/kameez-shalwar" element={<ProductList />} />
        <Route path="/men/kurta" element={<ProductList />} />
        <Route path="/men/waist-coat" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/orderplacement" element={<OrderPlacement />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
