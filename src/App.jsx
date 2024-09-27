import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import OrderPlacement from "./pages/OrderPlacement";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    {/* Incomplete ==> Lazy Loading will be applied at end */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* @Hussain set routes by yourself  */}
        <Route
          path="/products/:category"
          element={<ProductList/>}
        />
        <Route path="/products/:category" element={<ProductList/>} />
        <Route
          path="/products/:category"
          element={<ProductList />}
        />
        <Route
          path="/women/unstitched"
          element={<ProductList category="unstitched" />}
        />
        <Route
          path="/women/stitched"
          element={<ProductList category="stitched" />}
        />
        <Route path="/women/kurti" element={<ProductList category="kurti" />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/orderplacement" element={<OrderPlacement />} />
      </Routes>
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
