import React from "react";
import { TypeAnimation } from "react-type-animation";

function Body() {
  return (
    <div className="text-white font-customeF">
      <div className=" max-w-[880px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-primary font-bold p-2">
          Travel to your favourite places
        </p>
        <h1 className=" md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Travel with us
        </h1>
        <div className="flex items-center justify-center gap-1">
          <p className=" md:text-5xl sm:text-4xl text-xl font-bold py-4">
            Safty, fast traveling to 
          </p>
          <TypeAnimation className="md:text-5xl sm:text-4xl text-xl font-bold"
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "Any where ...",
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              "Any place ...",
              1000,
              "Any time ...",
              1000,
              "Any one ...",
              1000,
            ]}
            wrapper="span"
            speed={50}
            
            repeat={Infinity}
          />
          
        </div>
        <p className=" mt-5 md:text-xl text-lg font-bold text-gray-500 md:pl-4 pl-2">
        Welcome to passanger. your passport to extraordinary adventures! Discover a world of breathtaking destinations.
        </p>
        <button className="bg-primary w-[200px] rounded-lg mx-auto px-6 py-3 my-6 text-black font-semibold">Get Started</button>
      </div>

    </div>
  );
}

export default Body;
