


import React from "react";
import NavBar from "./components/NavBar";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Cart from "./Pages/Cart/Cart";

import About from "./components/About/About";
import Menu from "./components/Menu/Menu";




function App() => {
  return (
    <div className="app">
      <NavBar />
      <Routes>

        < Routes path= '/' element= {<Home/>} />
      </Routes path= '/cart' element={<cart/>}/>
      < Routes path ='/order' elements={<PlaceOrder/>}>

      </Routes>

        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
       <Header />
       <About/>

       <Menu/>

       <AppDownload/>

      <Footer />
    </div>
  );
}

export default App;