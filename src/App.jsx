import React from "react";
import NavBar from "./components/NavBar";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Cart from "./Pages/Cart/Cart";


import Menu from "./components/Menu/Menu";
import AppDownload from "./components/AppDownload/AppDownload";
function App() {
  return (
    <div className="app">
      <NavBar />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

      <Menu />
      <AppDownload />
      <Footer />
    </div>
  );
}
export default App;
