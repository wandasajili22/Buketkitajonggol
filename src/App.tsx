import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import ProductDetail from "./pages/ProductDetail";
import CustomOrder from "./pages/CustomOrder";
import Gallery from "./pages/Gallery";
import SmoothScroll from "./components/SmoothScroll";

export default function App() {
  return (
    <Router>
      <SmoothScroll>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="catalog" element={<Catalog />} />
            <Route path="product/:id" element={<ProductDetail />} />
            <Route path="custom" element={<CustomOrder />} />
            <Route path="gallery" element={<Gallery />} />
          </Route>
        </Routes>
      </SmoothScroll>
    </Router>
  );
}


