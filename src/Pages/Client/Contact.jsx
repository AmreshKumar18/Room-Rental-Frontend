import React, { useEffect } from "react";
import contact from "../../Assets/contact.png";
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { useForm } from "react-hook-form";
import { UserData } from "../../Context/UserContext";
import axios from "axios";
import toast from "react-hot-toast";

const Contact = () => {
  // http://localhost:4000/api/contact-details
  const { user } = UserData();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const contactDetails = {
      fullname: data.fullname,
      email: data.email,
      description: data.description,
    };
    await axios
      .post("https://room-rental-backend-ece1.onrender.com/api/contact-details", contactDetails, {
        headers: { token: user.token },
      })
      .then((res) => {
        if (res.data) {
          toast.success(res.data.message);
        }
      })
      .catch((error) => {
        toast.error(error.response?.data?.message);
      });
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="section">
        <div className="contact_sec mt-24">
          <div className="contact-right">
            <div className=" mb-10">
              <h1 className=" text-4xl font-semibold">Get In Touch With Us</h1>
              <p>
                If you can't find an answer to your questions, please don't
                hesitate to contact us
              </p>
              <h1 className=" text-2xl font-semibold mt-5">Phone</h1>
              <p className=" flex items-center gap-1">
                <FiPhoneCall size={18} /> +91 9873459232
              </p>
              <p className=" flex items-center gap-1">
                <FiPhoneCall size={18} /> +91 9873459232
              </p>
              <h1 className=" text-2xl font-semibold mt-5">Emergency</h1>
              <p className=" flex items-center gap-1">
                <FiPhoneCall size={18} /> +91 9873459232
              </p>
              <p className=" flex items-center gap-1">
                <FiPhoneCall size={18} /> +91 9873459232
              </p>
              <h1 className=" text-2xl font-semibold mt-5">Email</h1>
              <p className=" flex items-center gap-1">
                <HiOutlineMail size={18} /> careplus@gmail.com
              </p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="input_style">
                <label>Full Name:</label>
                <input
                  type="text"
                  {...register("fullname", { required: true })}
                />
              </div>
              <div className="input_style">
                <label>Email:</label>
                <input type="text" {...register("email", { required: true })} />
              </div>
              <div className="input_style">
                <label>What can we help you with?</label>
                <textarea
                  type="text"
                  {...register("description", { required: true })}
                />
              </div>
              <div className=" text-center">
                <button className="btn btn_style">Submit</button>
              </div>
            </form>
          </div>
          <div className="contact-left">
            <img src={contact} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
