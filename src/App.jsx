import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import OrderPlacement from "./pages/OrderPlacement";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";

function App() {

  return (
    <div className="bg-white text-black dark:bg-black dark:text-white">
      {/* Incomplete ==> Lazy Loading will be applied at end */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:section/:subcategory" element={<ProductList />} />
        <Route path="/:section/:subcategory/:productId" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/orderplacement" element={<OrderPlacement />} />
      </Routes>
      <ScrollToTop />
      <Footer />
    </div>
  );
}

export default App;
