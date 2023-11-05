import React from "react";
import doctorsAppoinment from "../assets/projects/doctorsAppoinment.png";
import snakeLadder from "../assets/projects/snake_ladder.png";
import foodDelivery from "../assets/projects/food_delivery_app.png";

const Projects = () => {
  return (
    <section className="mx-auto w-11/12 p-4">
      <h3 className="text-4xl">Personal Projects</h3>
      <div>
        <h3 className="text-2xl mt-7">Mern Stack</h3>
        <div className="grid grid-cols-4 gap-10">
          <div
            className="flex flex-col border mt-6 p-3 rounded-lg shadow-lg hover:scale-105 cursor-pointer"
            onClick={() =>
              window.open("https://zomato-clone-2606.netlify.app/")
            }
          >
            <img src={foodDelivery} alt="foodDelivery" />
            <p className="text-lg mt-2">Food Delivery App</p>
            <p className="text-xs mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              facere temporibus repellendus dolore. Aperiam unde vel harum quae.
              Neque, omnis?
            </p>
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-2xl mt-7">React Js</h3>
        <div className="grid grid-cols-4 gap-10">
          <div
            className="flex flex-col border mt-6 p-3 rounded-lg shadow-lg hover:scale-105 cursor-pointer"
            onClick={() =>
              window.open("https://doctorsappoinment.netlify.app/")
            }
          >
            <img src={doctorsAppoinment} alt="doctorsAppoinment" />
            <p className="text-lg mt-2">Doctor's Appoinment</p>
            <p className="text-xs mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              facere temporibus repellendus dolore. Aperiam unde vel harum quae.
              Neque, omnis?
            </p>
          </div>
          <div
            className="flex flex-col border mt-6 p-3 rounded-lg shadow-lg hover:scale-105 cursor-pointer"
            onClick={() => window.open("https://snake-lader.netlify.app/")}
          >
            <img src={snakeLadder} alt="snakeLadder" />
            <p className="text-lg mt-2">Snake Ladder</p>
            <p className="text-xs mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              facere temporibus repellendus dolore. Aperiam unde vel harum quae.
              Neque, omnis?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
