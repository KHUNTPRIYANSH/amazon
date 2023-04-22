import { Divider } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./buynow.css";
import Empty from "./Empty";
import Option from "./Option";
import Right from "./Right";
import Subtotal from "./Subtotal";

const Buynow = () => {
  return (
    <>
      <div className="buynow_section">
        <div className="buynow_container">
          <div className="left_buy">
            <h1>Shopping Cart</h1>
            <p>Select all items</p>
            <span className="leftbuyprice">Price</span>
            <Divider />
            <>
              <div className="item_containert">
                <img
                  src="https://www.junglescout.com/wp-content/uploads/2021/01/product-photo-water-bottle-hero.png"
                  alt="imgitem"
                />
                <div className="item_details">
                  <h3>bomttle</h3>
                  <h3>Bhu ni bomtle</h3>
                  <h3 className="diffrentprice">₹69.00</h3>
                  <p className="unusuall">Usually dispatched in 8 days.</p>
                  <p>Eligible for FREE Shipping</p>
                  <img
                    src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px-2x._CB485942108_.png"
                    alt="logo"
                  />
                  <Option deletedata="" get="" />
                </div>
                <h3 className="item_price">₹69.00</h3>
              </div>
              <Divider />
            </>

            <Subtotal />
          </div>
          <Right />
        </div>
      </div>
      <Empty />
    </>
  );
};

export default Buynow;

// thodu changes krya 6 carts ni andr cart htu bt tene remove karine
// je pramane aapdo normal data save 6 te rite bnavyu
// jo carts ni andr cart use kro to tmare map call kravya pachi pn e.cart.discount
