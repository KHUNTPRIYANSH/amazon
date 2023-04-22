import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sign_in = () => {
  const [logData, setLogData] = useState({
    email: "",
    password: "",
  });
  const addData = (e) => {
    const { name, value } = e.target;
    // console.log(name);
    setLogData(() => {
      return { ...logData, [name]: value };
    });
  };
  console.log(logData);
  return (
    <section>
      <div className="sign_container">
        <div className="sign_header">
          <img src="./blacklogoamazon.png" alt="signupimg" />
        </div>
        <div className="sign_form">
          <form method="POST">
            <h1>Sign-In</h1>

            <div className="form_data">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={logData.email}
                onChange={addData}
              />
            </div>
            <div className="form_data">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                onChange={addData}
                id="password"
                value={logData.password}
                placeholder="At least 6 characters"
              />
            </div>
            <button type="submit" className="signin_btn">
              Continue
            </button>
          </form>
        </div>
        <div className="create_accountinfo">
          <p>New to Amazon?</p>
          <button>
            <Link to="/register">Create your Amazon Account</Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Sign_in;
