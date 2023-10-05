import React from "react";
import {
  FaDribbble,
  FaFacebookSquare,
  FaGit,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

import { AiFillInstagram, AiOutlineGithub } from "react-icons/ai";

function Footerelement() {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div>
        <h1 className=" w-full text-3xl font-bold text-primary">Passanger.</h1>
        <p className="py-4">
          {" "}
          We are passionate about helping you discover the world in a way that's
          uniquely yours. Our mission is to provide you with the tools and
          inspiration to plan unforgettable journeys, whether it's a weekend
          getaway or a grand adventure.
        </p>

        <div className=" flex justify-between md:w-[75%] my-6">
          <FaFacebookSquare size={30} />
          <FaInstagram size={30} />
          <FaTwitter size={30} />
          <AiFillInstagram size={30} />
          <AiOutlineGithub size={30} />
          <FaDribbble size={30} />
        </div>
      </div>

      <div className=" lg:col-span-2 flex justify-between mt-6">
        <div>
          <h6 className=" font-medium text-gray-400">Further details</h6>
          <ul>
            <li className=" py-2 text-sm">Cooparating organizations</li>
            <li className=" py-2 text-sm">E-Commerce</li>
            <li className=" py-2 text-sm">Offshore mechanism</li>
            <li className=" py-2 text-sm">Insights</li>
          </ul>
        </div>

        <div>
          <h6 className=" font-medium text-gray-400">Support</h6>
          <ul>
            <li className=" py-2 text-sm">Pricing</li>
            <li className=" py-2 text-sm">Documentations</li>
            <li className=" py-2 text-sm">Guids</li>
            <li className=" py-2 text-sm">Marketings</li>
          </ul>
        </div>

        <div>
          <h6 className=" font-medium text-gray-400">Company</h6>
          <ul>
            <li className=" py-2 text-sm">About</li>
            <li className=" py-2 text-sm">Blog</li>
            <li className=" py-2 text-sm">Awards</li>
            <li className=" py-2 text-sm">Contact</li>
          </ul>
        </div>

       <div>
          <h6 className=" font-medium text-gray-400">Legal</h6>
          <ul>
            <li className=" py-2 text-sm">Privacy policy</li>
            <li className=" py-2 text-sm">Terms</li>
            <li className=" py-2 text-sm">Claims</li>
            <li className=" py-2 text-sm">Conditions</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footerelement;
