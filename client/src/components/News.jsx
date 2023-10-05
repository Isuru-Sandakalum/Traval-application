import React from "react";

function News() {
  return (
    <div className="w-full py-16 text-white p-4">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className=" lg:col-span-2 my-4">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2 ">
            Whant to know best to travel today
          </h1>
          <p>Sign up to our newsletter and stay up to date</p>
        </div>
        <div className="my-4 ">
          <div className=" flex flex-col sm:flex-row items-center justify-center gap-2 w-full">
            <input
              className="p-3 flex w-full rounded-md text-black"
              type="email"
              placeholder="Enter your email"
            />
            <button className="bg-primary w-[200px] rounded-lg mx-auto px-6 py-3  my-6 text-black font-semibold">
              Notify me
            </button>
          </div>
          <div className="sm:text-left text-center">
          <p className="text-white">We care about the protection of your data.</p>
          <p>Read our <span className="text-primary">privacy policy</span>.</p>
          </div>
          

        </div>
      </div>
    </div>
  );
}

export default News;
