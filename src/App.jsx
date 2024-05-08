import React from "react";
import NavBar from "./components/NavBar";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Cart from "./Pages/Cart/Cart";
<<<<<<< HEAD
import About from "./components/About/About";
import Menu from "./components/Menu/Menu";
=======
import About from "./components/About/About"
import AppDownload from "./components/AppDownload/AppDownload"
>>>>>>> 9c60339ab1345c7578efbac286ac26b912e24865


function App() {
  return (
    <div className="app">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
       <Header />
       <About/>
<<<<<<< HEAD
       <Menu/>
=======
       <AppDownload/>
>>>>>>> 9c60339ab1345c7578efbac286ac26b912e24865
      <Footer />
    </div>
  );
}

export default App;