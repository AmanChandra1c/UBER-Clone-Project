import React from "react";
import { IoMdSpeedometer } from "react-icons/io";
import { SlSpeedometer } from "react-icons/sl";
import { LuNotebook } from "react-icons/lu";

const CaptainDetails = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-start gap-3">
          <img
            className="h-10 w-10 rounded-full object-cover"
            src="https://images.unsplash.com/photo-1601217672201-cca23494ed2c?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <h4 className="text-lg font-medium">Ammu</h4>
        </div>
        <div>
          <h4 className="text-xl font-semibold">₹290</h4>
          <p className="text-sm text-gray-600">Earned</p>
        </div>
      </div>
      <div className="flex p-3 justify-center bg-gray-50 mt-6 gap-5 rounded-xl items-start p-4">
        <div className="text-center flex flex-col items-center ">
          <div className="text-xl">
            <IoMdSpeedometer />
          </div>
          <h5 className="text-lg font-medium">10.2</h5>
          <p className="text-sm text-gray-600">Hours Online</p>
        </div>
        <div className="text-center flex flex-col items-center">
          <div className="text-xl">
            <SlSpeedometer />
          </div>
          <h5 className="text-lg font-medium">10.2</h5>
          <p className="text-sm text-gray-600">Hours Online</p>
        </div>
        <div className="text-center flex flex-col items-center ">
          <div className="text-xl">
            <LuNotebook />
          </div>
          <h5 className="text-lg font-medium">10.2</h5>
          <p className="text-sm text-gray-600">Hours Online</p>
        </div>
      </div>
    </>
  );
};

export default CaptainDetails;
