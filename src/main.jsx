import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./Home/Home.jsx";
import Flavors from "./Flavors/Flavors.jsx";
import Sale from "./Sale/Sale.jsx";
import About from "./About/About.jsx";
import PurchaseForm from "./PurchaseForm/PurchaseForm.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="" element={<Home />} />
          <Route path="Flavors" element={<Flavors />} />
          <Route path="Sale" element={<Sale />} />
          <Route path="About" element={<About />} />
          <Route path="Purchase" element={<PurchaseForm />} />
        </Route>
      </Routes>
    </StrictMode>
  </BrowserRouter>,
);
