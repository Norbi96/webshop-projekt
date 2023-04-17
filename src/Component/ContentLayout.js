import React, { useContext } from 'react'
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import '../css/style.css'
import '../css/header.css'
import '../css/footer.css'
import '../css/content.css'
import Cart from "./Cart/Cart";
import { cartOpen } from "./Cart/CartOpen";

export default function ContentLayout() {

  const { isOpenCart, setIsOpenCart } = useContext(cartOpen)

  return (
    <div className="wrapper">
      {isOpenCart && <Cart />}
      <Header />
      <div className="content">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}
