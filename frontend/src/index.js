import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
  Footer,
  Home,
  QR1,
  QR2,
  Product1,
  Product2,
} from "./components";

ReactDOM.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/QR1" element={<QR1 />} />
      <Route path="/QR2" element={<QR2 />} />
      <Route path="/P1" element={<Product1 />} />
      <Route path="/P2" element={<Product2 />} />
    </Routes>
    <Footer />
  </Router>,

  document.getElementById("root")
);

serviceWorker.unregister();