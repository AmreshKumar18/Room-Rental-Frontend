import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import login from "../../Assets/register.png";
import { useForm } from "react-hook-form";
import { UserData } from "../../Context/UserContext";

const Register = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { registerUser } = UserData();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const onSubmit = async (data) => {
    await registerUser(
      data.fullname,
      data.email,
      data.password,
      data.mob_no,
      data.adharno,
      data.question
    );
    navigate("/login");
  };

  return (
    <>
      <section className="section">
        <div className="login_sec mt-28">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h2 className="heading_txt text-center">Create an Account Here !!</h2>
            <div className="login_form ">
              <div className="login_input">
                <div className="input_style">
                  <label htmlFor="">Full Name:</label>
                  <input
                    type="text"
                    {...register("fullname", { required: true })}
                  />
                </div>
                <div className="input_style">
                  <label htmlFor="">Email:</label>
                  <input
                    type="text"
                    {...register("email", { required: true })}
                  />
                </div>
                <div className="input_style">
                  <label htmlFor="">Mobile Number:</label>
                  <input
                    type="text"
                    {...register("mob_no", { required: true })}
                  />
                </div>
                <div className="input_style">
                  <label htmlFor="">Adhar No:</label>
                  <input
                    type="text"
                    {...register("adharno", { required: true })}
                  />
                </div>
                <div className="input_style">
                  <label htmlFor="">Password:</label>
                  <input
                    type="text"
                    {...register("password", { required: true })}
                  />
                </div>
                <div className="input_style">
                  <label htmlFor="">What is Your Favourite Colour?:</label>
                  <input
                    type="text"
                    {...register("question", { required: true })}
                  />
                </div>

                <div className=" text-center">
                  <button className=" btn_style btn">Register</button>
                </div>
                <p>
                  Already have an account?{" "}
                  <Link to="/login" className=" text-indigo-500">
                    Login here
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

export default Register;
