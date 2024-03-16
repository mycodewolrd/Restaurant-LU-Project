import React from "react";
import Navbar from "./Navbar";

const HeroSection = () => {
  return (
    <section className="heroSection" id="heroSection">
      <Navbar />
      <div className="hero bg-transparent">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="/about.png"
            className="max-w-sm rounded-lg w-auto px-8"
          />
          <div>
          <h2 className="md:text-6xl text-4xl font-extrabold px-4  text-slate-900 ">Order In, Eat Well: Explore Our <span className="text-orange-400">Mouthwatering</span> Menu!</h2>
            <p className="py-6 px-4">
            Indulge in hassle-free dining with our speedy food delivery service. Enjoy delicious meals delivered straight to your doorstep, perfect for satisfying cravings and busy schedules .
            </p>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
