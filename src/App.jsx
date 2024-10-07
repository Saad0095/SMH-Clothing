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
import { SearchProvider } from "./context/SearchContext";
import SearchResults from "./pages/SearchResults";
import { useState } from "react";

function App() {
  // const [order,setOrder] = useState(null)

  return (
    <div className="bg-white text-black dark:bg-black dark:text-white">
      <SearchProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/searchResults" element={<SearchResults />} />
          <Route path="/:section/:subcategory" element={<ProductList />} />
          <Route
            path="/:section/:subcategory/:productId"
            element={<ProductDetail />}
          />
          <Route path="/cart" element={<Cart />} />
          {/* <Route path="/checkout" element={<Checkout setOrder={setOrder} />} /> */}
          <Route path="/checkout" element={<Checkout />} />
          {/* <Route path="/orderplacement" element={<OrderPlacement order={order} />} /> */}
          <Route path="/orderplacement" element={<OrderPlacement/>} />
        </Routes>
        <ScrollToTop />
        <Footer />
      </SearchProvider>
    </div>
  );
}

export default App;
