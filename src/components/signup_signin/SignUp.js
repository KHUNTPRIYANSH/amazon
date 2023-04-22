import { Divider } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./signup.css";

const Signup = () => {
  const [uData, setUData] = useState({
    name: "",
    mobile: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const addData = (e) => {
    const { name, value } = e.target;
    // console.log(name);
    setUData(() => {
      return { ...uData, [name]: value };
    });
  };
  console.log(uData);
  return (
    <section>
      <div className="sign_container">
        <div className="sign_header">
          <img src="./blacklogoamazon.png" alt="signupimg" />
        </div>
        <div className="sign_form">
          <form method="POST">
            <h1>Create account</h1>
            <div className="form_data">
              <label htmlFor="name">Your name</label>
              <input
                type="text"
                name="fname"
                id="name"
                onChange={addData}
                value={uData.name}
              />
            </div>
            <div className="form_data">
              <label htmlFor="email">email</label>
              <input
                type="email"
                name="email"
                id="email"
                onChange={addData}
                value={uData.email}
              />
            </div>
            <div className="form_data">
              <label htmlFor="mobile">Mobile number</label>
              <input
                type="number"
                name="mobile"
                id="mobile"
                onChange={addData}
                value={uData.mobile}
              />
            </div>
            <div className="form_data">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="At least 6 characters"
                onChange={addData}
                value={uData.password}
              />
            </div>
            <div className="form_data">
              <label htmlFor="passwordg">Password again</label>
              <input
                type="password"
                name="cpassword"
                id="passwordg"
                onChange={addData}
                value={uData.cpassword}
              />
            </div>
            <button type="submit" className="signin_btn">
              Continue
            </button>

            <Divider />

            <div className="signin_info">
              <p>Already have an account?</p>
              <Link to="/login">Sign in</Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Signup;
