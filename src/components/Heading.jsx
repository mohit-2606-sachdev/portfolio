import React from "react";
import myPhoto from "../assets/myPhoto.jpg";

const Heading = () => {
  return (
    <section className="border-b-2 bg-blue-100">
      <div className="flex justify-between flex-row-reverse p-4">
        <div className="w-5/12 p-10 flex justify-center items-center ">
          <img src={myPhoto} alt="myPhoto" className="h-[500px]" />
        </div>
        <div className="p-10 w-5/12 mt-10">
          <div className="text-xl">Hey, I'm Mohit</div>
          <div>
            <span className="text-6xl text-purple-500">React JS </span>
            <span className="text-6xl">Developer</span>
          </div>
          <p className="mt-2 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            accusantium hic aperiam assumenda asperiores dolore facilis
            perspiciatis qui nulla ipsum.
          </p>
          <button className="mt-5 border py-1 px-2 bg-purple-500 text-white hover:bg-white hover:text-purple-500 text-lg rounded-md">
            Get in touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default Heading;
