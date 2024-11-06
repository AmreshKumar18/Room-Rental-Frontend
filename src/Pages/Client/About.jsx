import React from "react";
import about from "../../Assets/about.jpg";
import about1 from "../../Assets/about1.png";

const About = () => {
  return (
    <>
      <section>
        <div className="about_img">
          <img src={about} alt="" />
        </div>
        <div className="aboutsec section">
          <div className="aboutsec_intro">
            <p className="design_txt">About Us</p>
            <h2 className="abt-heading font-semibold mb-3">
              We are the leaders in sell and rent Houses
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At
              eveniet, repudiandae deserunt explicabo fuga dolor porro, tempora
              deleniti veritatis ipsam perferendis consequatur adipisci nostrum
              ipsa blanditiis architecto cum vitae facilis esse harum? Aliquam
              mollitia veritatis, facilis accusantium reprehenderit dignissimos
              quaerat omnis a eius harum dolore libero deserunt! Magni
              voluptatibus eligendi consequatur fugit quo nam. Perspiciatis
              maxime tempore nobis magnam. Maiores ipsum veritatis aliquam
              accusamus vero eligendi perspiciatis. Nisi consectetur ratione
              harum maxime iusto, sapiente, quaerat tempore excepturi quis
              veritatis temporibus cum architecto laborum molestiae vero
              blanditiis dolorum fuga impedit. Molestias laborum nam error nobis
              deleniti ad iure placeat animi ea!
            </p>
          </div>
          <div className="abt-img m-auto">
            <img src={about1} alt="" />
          </div>
        </div>
        {/* analytics */}
        <div className="section analytics_sec">
          <div className="analytics">
            <h2 className=" font-semibold">142 +</h2>
            <p>Total Properties</p>
          </div>
          <div className="analytics">
            <h2 className=" font-semibold">81 +</h2>
            <p>Properties Sold</p>
          </div>
          <div className="analytics">
            <h2 className=" font-semibold">142 +</h2>
            <p>Total Properties</p>
          </div>
          <div className="analytics">
            <h2 className=" font-semibold">142 +</h2>
            <p>Total Properties</p>
          </div>
        </div>

        {/* mission & vision */}
        <div className="aboutsec section">
          <div className="mission_sec">
            <h2 className="abt-heading font-semibold mb-3">Mission</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At
              eveniet, repudiandae deserunt explicabo fuga dolor porro, tempora
              deleniti veritatis ipsam perferendis consequatur adipisci nostrum
              ipsa blanditiis architecto cum vitae facilis esse harum? Aliquam
              mollitia veritatis, facilis accusantium reprehenderit dignissimos
              quaerat omnis a eius harum dolore libero deserunt! Magni
              voluptatibus eligendi consequatur fugit quo nam. Perspiciatis
              maxime tempore nobis magnam. Maiores ipsum veritatis aliquam
              accusamus vero eligendi perspiciatis. Nisi consectetur ratione
              harum maxime iusto, sapiente, quaerat tempore excepturi quis
              veritatis temporibus cum architecto laborum molestiae vero
              blanditiis dolorum fuga impedit. Molestias laborum nam error nobis
              deleniti ad iure placeat animi ea!
            </p>
          </div>
          <div className="abt-img m-auto">
            <img src={about1} alt="" />
          </div>
        </div>

        {/* vision */}
        <div className="visionsec section">
          <div className="vision_sec">
            <h2 className="abt-heading font-semibold mb-3">Vision</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At
              eveniet, repudiandae deserunt explicabo fuga dolor porro, tempora
              deleniti veritatis ipsam perferendis consequatur adipisci nostrum
              ipsa blanditiis architecto cum vitae facilis esse harum? Aliquam
              mollitia veritatis, facilis accusantium reprehenderit dignissimos
              quaerat omnis a eius harum dolore libero deserunt! Magni
              voluptatibus eligendi consequatur fugit quo nam. Perspiciatis
              maxime tempore nobis magnam. Maiores ipsum veritatis aliquam
              accusamus vero eligendi perspiciatis. Nisi consectetur ratione
              harum maxime iusto, sapiente, quaerat tempore excepturi quis
              veritatis temporibus cum architecto laborum molestiae vero
              blanditiis dolorum fuga impedit. Molestias laborum nam error nobis
              deleniti ad iure placeat animi ea!
            </p>
          </div>
          <div className="abt-img m-auto">
            <img src={about1} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
