import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading font-extrabold">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
              Nestled in the heart of Koklata, YumExpress offers an
              authentic taste of Foods. For over 20 years, our family has
              served delicious dishes using fresh, local ingredients. Step
              inside our warm, inviting space and be transported by the aromas
              of over the wrold. Our talented chefs infuse traditional
              recipes with modern twists for a unique dining experience. From
              our signature "Signature Dish" to mouthwatering "[Another Popular
              Dish]", every plate is a labor of love. With friendly service and a
              cozy ambiance, we ensure guests feel right at home. Join us for a
              romantic evening, family gathering, or night out with friends.
              Embark on a culinary adventure that will tantalize your taste
              buds. YumExpress promises to create lasting memories with
              each and every visit. Reserve your table today and discover the
              essence of [cuisine] cuisine.
            </p>
            <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
