import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { SearchProvider } from "./context/SearchContext";
import Navbar from "./components/Navbar";
import Loading from "./components/Loading";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
const Home = lazy(() => import("./pages/Home"));
const SearchResults = lazy(() => import("./pages/SearchResults"));
const ProductList = lazy(() => import("./pages/ProductList"));
const ProductDetail = lazy(() => import("./pages/ProductDetail"));
const Cart = lazy(() => import("./pages/Cart"));
const Checkout = lazy(() => import("./pages/Checkout"));
const OrderPlacement = lazy(() => import("./pages/OrderPlacement"));

function App() {
  return (
    <div className="bg-white text-black dark:bg-black dark:text-white">
      <SearchProvider>
        <Navbar />
        <Suspense fallback={<Loading/>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/searchResults" element={<SearchResults />} />
            <Route path="/:section/:subcategory" element={<ProductList />} />
            <Route
              path="/:section/:subcategory/:productId"
              element={<ProductDetail />}
            />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/orderplacement" element={<OrderPlacement />} />
          </Routes>
        </Suspense>
        <ScrollToTop />
        <Footer />
      </SearchProvider>
    </div>
  );
}

export default App;
