import React from "react";
import { Link } from "react-router-dom";
import login from "../../Assets/login.png";

const ForgotPassword = () => {
  return (
    <>
      <section className="section">
        <div className="login_sec mt-28">
          <h2 className="heading_txt text-center">Reset Password Here !!</h2>
          <div className="login_form ">
            <div className="login_input">
              <div className="input_style">
                <label htmlFor="">Email:</label>
                <input type="text" />
              </div>
              <div className="input_style">
                <label htmlFor="">What is Your Favourite Colour?:</label>
                <input type="text" />
              </div>
              <div className=" text-center">
                <button className=" btn_style btn">Reset Password</button>
              </div>
              <p>
                Don't have an account?{" "}
                <Link to="/register" className=" text-indigo-500">
                  Create an account
                </Link>
              </p>
            </div>
            <div className="login_img">
              <img src={login} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ForgotPassword;
