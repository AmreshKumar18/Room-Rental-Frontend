import React, { useEffect } from "react";
import login from "../../Assets/login.png";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { UserData } from "../../Context/UserContext";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { loginUser } = UserData();
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    await loginUser(data.email, data.password);
    navigate("/");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section className="section">
        <div className="login_sec mt-28">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h2 className=" text-center">Login Here !!</h2>
            <div className="login_form ">
              <div className="login_input">
                <div className="input_style">
                  <label htmlFor="">Email:</label>
                  <input
                    type="text"
                    {...register("email", { required: true })}
                  />
                </div>
                <div className="input_style">
                  <label htmlFor="">Password:</label>
                  <input
                    type="text"
                    {...register("password", { required: true })}
                  />
                </div>
                <p>
                  Forgot Password?{" "}
                  <Link to="/reset-password" className=" text-indigo-500">
                    click here
                  </Link>
                </p>
                <div className=" text-center">
                  <button className=" btn_style btn">Login Now</button>
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
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;
