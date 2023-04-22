import React from "react";
import NavBar from "./components/header/NavBar";
import NewNav from "./components/newNav/NewNav";
import MainCompo from "./components/home/MainCompo";
import Footer from "./components/footer/Footer";
import Sign_in from "./components/signup_signin/Sign_in";
import Signup from "./components/signup_signin/SignUp";
import Cart from "./components/cart/Cart";
import { Routes, Route } from "react-router-dom";
import Buynow from "./components/buynow/Buynow";
const App = () => {
  return (
    <>
      <NavBar />
      <NewNav />
      <Routes>
        <Route path="/login" element={<Sign_in />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/" element={<MainCompo />} />
        <Route
          path="/cart"
          element={
            <>
              <Cart />
              <Buynow />
            </>
          }
        />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
