import React from "react";
import { data } from "../restApi.json";
const Menu = () => {
  return (
    <>
      <section
        className="menu bg-gradient-to-r from-orange-300 to-green-200"
        id="menu"
      >
        <div className="container">
          <div className="heading_section">
            <h1 className=" py-8 text-5xl lg:text-7xl  lg:font-extrabold font-bold ">
              POPULAR DISHES
            </h1>
          </div>
          <div className="dishes_container">
            {data[0].dishes.map((element) => (
              <div className="card" key={element.id}>
                <img src={element.image} alt={element.title} />
                <h3>{element.title}</h3>
                <button>{element.category}</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Menu;
