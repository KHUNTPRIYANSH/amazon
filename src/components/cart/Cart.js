import React, { useContext, useEffect, useState } from "react";
import "./cart.css";
import { products } from "../home/productdata";
import { Divider } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

const Cart = () => {
  return (
    <div className="cart_section">
      <div className="cart_container">
        <div className="left_cart">
          <img
            src="https://www.junglescout.com/wp-content/uploads/2021/01/product-photo-water-bottle-hero.png"
            alt="cart"
          />
          <div className="cart_btn">
            <button className="cart_btn1">Add to Cart</button>
            <button className="cart_btn2">Buy Now</button>
          </div>
        </div>
        <div className="right_cart">
          <h3>
            {/* {inddata.title.shortTitle} */}
            short title
          </h3>
          <h4>
            longtitle
            {/* {inddata.title.longTitle} */}
          </h4>
          <Divider />
          <p className="mrp">
            M.R.P. :
            <del>
              ₹ 69
              {/* {inddata.price.mrp} */}
            </del>
          </p>
          <p>
            Deal of the Day :
            <span style={{ color: "#B12704" }}>
              ₹{/* {inddata.price.cost} */}
              69.00
            </span>
          </p>
          <p>
            You save :
            <span style={{ color: "#B12704" }}>
              ₹55{/* ₹{inddata.price.mrp - inddata.price.cost} ( */}
              {/* {inddata.price.discount}) */}
            </span>
          </p>

          <div className="discount_box">
            <h5>
              Discount :
              <span style={{ color: "#111" }}>
                ₹14 {/* {inddata.discount} */}
              </span>
            </h5>
            <h4>
              FREE Delivery :
              <span style={{ color: "#111", fontWeight: "600" }}>
                Oct 8 - 21
              </span>
              Details
            </h4>
            <p style={{ color: "#111" }}>
              Fastest delivery:
              <span style={{ color: "#111", fontWeight: "600" }}>
                Tomorrow 11AM
              </span>
            </p>
          </div>
          <p className="description">
            About the Iteam :
            <span
              style={{
                color: "#565959",
                fontSize: "14px",
                fontWeight: "500",
                letterSpacing: "0.4px",
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloribus, similique cupiditate tempora deleniti tempore saepe
              eaque accusantium non, veniam aspernatur consequuntur! Illum
              molestias obcaecati quidem ducimus, nisi quaerat accusamus
              laborum?
              {/* {inddata.description} */}
            </span>
          </p>
        </div>
      </div>

      {/* {!inddata ? (
        <div className="circle">
          <CircularProgress />
          <h2> Loading....</h2>
        </div>
      ) : (
        ""
      )} */}
    </div>
  );
};

export default Cart;
