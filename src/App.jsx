import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/home.jsx";
import { Route, Router, Routes } from "react-router-dom";
import Beauty from "./pages/beauty.jsx";
import Landing from "./pages/Landing.jsx";
import Store from "./pages/store.jsx";
import { Cart } from "./pages/Cart.jsx";
import Checkout from "./pages/Checkout.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Routes>
        <Route path={"/"} element={<Landing />} />
        <Route path="/beauty" element={<Beauty />} />
        <Route path="/home" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout/>}/>
      </Routes>

      <Footer />
    </>
  );
}

export default App;
