import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./Pages/Home/Home";
import Cart from "./Pages/Cart/Cart";
import About from "./components/About/About";
import Menu from "./components/Menu/Menu";
import PlaceOrder from "./components/PlaceOrder/PlaceOrder"; // Assuming you have a component for PlaceOrder

function App() {
  return (
    <Router>
      <div className="app">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
        </Routes>
        <Header />
        <About />
        <Menu />
        { <AppDownload />}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
