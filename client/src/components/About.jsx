import React from "react";
import Beach from "../assets/beach.jpg";

function About() {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-2-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={Beach}></img>
        <div className="flex flex-col justify-center">
          <p className="text-primary font-bold uppercase">About us</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Explore All Corners of The World With Us</h1>
          <p className="">
            We are passionate about helping you discover the world in a way
            that's uniquely yours. Our mission is to provide you with the tools
            and inspiration to plan unforgettable journeys, whether it's a
            weekend getaway or a grand adventure.
          </p>
          <button className="bg-black w-[200px] items-start justify-start rounded-lg mx-auto md:mx-0 px-6 py-3 my-6 text-primary font-semibold">Read More</button>
        </div>
      </div>
    </div>
  );
}

export default About;
