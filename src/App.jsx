import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./Pages/Home/Home";

import Menu from "./components/Menu/Menu";
import AppDownload from "./components/AppDownload/AppDownload";

function App() {
  return (
    <div className="app">
      <NavBar />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>

      <AppDownload />
      <Footer />
    </div>
  );
}
export default App;

