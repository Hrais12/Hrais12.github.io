import "./App.css";
import React from "react";

// Import Route and our components
import { Route, Routes } from "react-router-dom";
import Products from "./pages/Products";
import Main from "./pages/Main";
import Categories from "./pages/Categories";
import Nav from "./components/Nav";
export default function App() {
  // We will use the Route component, path attribute, and element attribute to specify each route.
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/product/:id" element={<Products />} />
      </Routes>
    </div>
  );
}
