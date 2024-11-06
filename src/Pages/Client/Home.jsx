import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import hero from "../../Assets/hero.png";
import Card from "../../Components/Card";
import address from "../../Assets/address.png";
import material from "../../Assets/material.png";
import trust from "../../Assets/trust.png";
import ontime from "../../Assets/ontime.png";
import aboutmain from "../../Assets/aboutmain.png";
import Frame from "../../Assets/Frame.png";
import { TbHomeCheck } from "react-icons/tb";
import { LiaKeySolid } from "react-icons/lia";
import { IoDocumentsOutline } from "react-icons/io5";
import { GrUserManager } from "react-icons/gr";
import toast from "react-hot-toast";
import axios from "axios";

const Home = () => {
  const [popularCard, setPopularCard] = useState({});

  const popularRent = async (req, res) => {
    try {
      const { data } = await axios.get(
        "https://room-rental-backend-ece1.onrender.com/api/popular-items"
      );
      const pop_items = data.popularItems.filter(
        (item) => item.popular === true
      );
      setPopularCard(data.popularItems);
    } catch (error) {
      toast.error(error.response?.data?.message);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    popularRent();
  }, []);
  return (
    <>
      <div className="section hero_section">
        <div className="hero_intro">
          <p className="design_txt">Find your Perfect Home with us</p>
          <h1>Discover Your Dream Home with Us </h1>
          <p>Find a variety of properties that suit you very easily</p>
          <p>Forget all difficulties in finding a residence for you</p>
          <div className=" mt-4">
            <p>Trusted by 1M+ customers</p>
            <p>⭐⭐⭐⭐⭐</p>
          </div>

          <div className="btn btn_style mt-5">
            <Link>Discover More</Link>
          </div>
        </div>
        <div className="hero_img">
          <img src={hero} alt="" />
        </div>
      </div>

      {/*  */}
      <div className="section features">
        <h2 className=" text-center font-bold">What Make Us Different?</h2>
        <p className=" mb-10 text-center">
          Check out our best service you can possibly orders in building your
          company.
        </p>
        <div className="feature_sec">
          <div className="feature_card">
            <img src={address} alt="" />
            <h4>Wide Range of Properties</h4>
            <p>We offer expert legal help for all related property items.</p>
          </div>

          <div className="feature_card">
            <img src={material} alt="" />
            <h4>Best Materials</h4>
            <p>
              The material determines the building itself so we recommend that
              you use the best & quality materials in its class.
            </p>
          </div>

          <div className="feature_card">
            <img src={trust} alt="" />
            <h4>Trusted by Thousands</h4>
            <p>
              We offer you free consultancy to get a loan for your new home.
            </p>
          </div>

          <div className="feature_card">
            <img src={ontime} alt="" />
            <h4>On Time</h4>
            <p>We prioritize the quality of our work and finish it on time.</p>
          </div>
        </div>
      </div>

      {/*  */}
      <div className="section popular_residence_sec">
        <h5>Best Choices</h5>
        <h2>Popular Residencies</h2>
        <div className="popular_residence">
          {popularCard && popularCard.length > 0 ? (
            popularCard.map((item, id) => <Card item={item} key={id} />)
          ) : (
            <p>no card</p>
          )}
        </div>
      </div>

      {/*  */}
      <section className="section">
        <h1 className=" text-center font-semibold">About Us</h1>
        <div className="aboutmain_sec">
          <div className="aboutmain_img">
            <img src={aboutmain} alt="" />
            <div className="aboutbottom_img">
              <img src={Frame} alt="" />
            </div>
          </div>
          <div>
            <p>About Us</p>
          </div>
        </div>
      </section>

      {/* how it works */}
      <section className="section">
        <div className="working_sec">
          <h2 className=" font-semibold text-center">How it works?</h2>
          <p className=" text-center mb-3">
            It’s easy to start with us with these simple steps
          </p>
        </div>
        <div className="process_sec">
          <div className="process">
            <TbHomeCheck size={32} />
            <h6 className=" font-semibold">Find real estate</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              fuga asperiores, est quia quibusdam recusandae quisquam nobis
              autem unde ipsum?
            </p>
          </div>
          <div className="process">
            <GrUserManager size={32} />
            <h6 className=" font-semibold">Meet relator</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              fuga asperiores, est quia quibusdam recusandae quisquam nobis
              autem unde ipsum?
            </p>
          </div>
          <div className="process">
            <IoDocumentsOutline size={32} />
            <h6 className=" font-semibold">Submit Documents</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              fuga asperiores, est quia quibusdam recusandae quisquam nobis
              autem unde ipsum?
            </p>
          </div>
          <div className="process">
            <LiaKeySolid size={32} />
            <h6 className=" font-semibold">Take the Keys</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              fuga asperiores, est quia quibusdam recusandae quisquam nobis
              autem unde ipsum?
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
