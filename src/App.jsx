import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./Pages/home/Home";

import Menu from "./components/menu/Menu";
import AppDownload from "./components/appDownload/AppDownload";
import Contact from "./Pages/contact/Contact";

function App() {
  return (
    <div className="app">
      <NavBar />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
      <Contact />

      <AppDownload />
      <Footer />
    </div>
  );
}
export default App;
