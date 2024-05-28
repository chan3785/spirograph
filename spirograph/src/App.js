import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SaleListPage from "./pages/SaleList/index";
import BrandingPage from "./pages/brandingPage/index";
import TestPage from "./pages/testPage/index";
import BusinessPage from "./pages/businessPage/index";

function App() {
  //아 찌바 왜 또 안돼
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/salelist" element={<SaleListPage />} />
          <Route path="/" element={<BrandingPage />} />
          <Route path="/test" element={<TestPage />} />
          <Route path="/business" element={<BusinessPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
