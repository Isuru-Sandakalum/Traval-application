import React from "react";
import { HiUserGroup } from "react-icons/hi";
import { HiUsers } from "react-icons/hi";
import { HiUser } from "react-icons/hi";

function Card() {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <HiUser className="mx-auto mt-[-3rem]" size={70} />
          <h2 className=" text-2xl font-bold text-center py-8">
            Single Traveller
          </h2>
          <p className="text-center text-4xl font-bold">$200</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">Accomadations</p>
            <p className="py-2 border-b mx-8">Foods</p>
            <p className="py-2 border-b mx-8">Traveling guid</p>

            <button className="bg-black w-[200px] rounded-lg mx-auto px-6 py-3 mt-12 my-6 text-primary font-semibold" >Start Travel Plan</button>
          </div>
          
        </div>

        <div className="w-full shadow-xl bg-gray-100 flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300">
          <HiUsers className="mx-auto mt-[-3rem]" size={70} />
          <h2 className=" text-2xl font-bold text-center py-8">
            Couple Travellers
          </h2>
          <p className="text-center text-4xl font-bold">$350</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">Accomadations</p>
            <p className="py-2 border-b mx-8">Foods</p>
            <p className="py-2 border-b mx-8">Traveling guid</p>

            <button className="bg-black w-[200px] rounded-lg mx-auto px-6 py-3 mt-12 my-6 text-primary font-semibold" >Start Travel Plan</button>
          </div>
          
        </div>


        <div className="w-full shadow-xl flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <HiUserGroup className="mx-auto mt-[-3rem]" size={70} />
          <h2 className=" text-2xl font-bold text-center py-8">
            Family Travellers
          </h2>
          <p className="text-center text-4xl font-bold">$700</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">Accomadations</p>
            <p className="py-2 border-b mx-8">Foods</p>
            <p className="py-2 border-b mx-8">Traveling guid</p>

            <button className="bg-black w-[200px] rounded-lg mx-auto px-6 py-3 mt-12 my-6 text-primary font-semibold" >Start Travel Plan</button>
          </div>
          
        </div>

      </div>
    </div>
  );
}

export default Card;
