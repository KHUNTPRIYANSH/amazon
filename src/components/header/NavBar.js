import React from "react";
import "./NavBar.css";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
const NavBar = () => {
  return (
    <header>
      <nav>
        <div className="left">
          <div className="navlogo">
            <Link to="/">
              <img
                src="https://raw.githubusercontent.com/harsh17112000/E-commerceapp/main/client/public/amazon_PNG25.png"
                alt=""
              />
            </Link>
          </div>
          <div className="nav_searchbaar">
            <input type="text" name="" id="" />
            <div className="search_icon">
              <SearchIcon />
            </div>
          </div>
        </div>
        <div className="right">
          <div className="nav_btn">
            <Link to="login">Sign in</Link>
          </div>
          <div className="cart_btn">
            <Link to="/cart">
              <Badge badgeContent={4} color="primary">
                <ShoppingCartIcon id="icon" />
              </Badge>
            </Link>
            <p>cart</p>
          </div>

          <Avatar className="avtar" />
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
