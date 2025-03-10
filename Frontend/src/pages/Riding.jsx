import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { BsCashCoin } from "react-icons/bs";
import { RiUserLocationFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Riding = () => {
  return (
    <>
      <div className="h-screen">
        <Link
          to="/home"
          className="fixed right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full"
        >
          <IoHomeOutline />
        </Link>
        <div className="h-1/2 w-full">
          <img
            className="h-full w-full"
            src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
            alt=""
          />
        </div>
        <div className="h-1/2 px-2">
          <div className="flex gap-2 items-center justify-between flex-col mt-2">
            <div className="w-full px-2 flex items-center justify-between">
              <img
                className="h-16"
                src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png"
                alt=""
              />
              <div className="text-right">
                <h2 className="text-lg font-medium">Aman </h2>
                <h4 className="text-xl font-semibold -mt-1 -mb-1">
                  MP04 NX8752
                </h4>
                <p className="text-sm text-gray-600">Honda Shine</p>
              </div>
            </div>
            <div className="w-full mt-3">
              <div className="flex items-center gap-5 p-3 border-t-1 border-b-1 border-gray-600">
                <RiUserLocationFill />
                <div>
                  <h3 className="text-lg font-medium">562/11-A</h3>
                  <p className="text-sm -mt-1 text-gray-600">
                    Kankariya Talab, Bhopal
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-5 p-3 border-b-1 border-gray-600">
                <BsCashCoin />
                <div>
                  <h3 className="text-lg font-medium">₹193.20</h3>
                  <p className="text-sm -mt-1 text-gray-600">Case Cash</p>
                </div>
              </div>
            </div>
            <button className="w-full font-semibold mt-5 bg-green-600 rounded text-white rounded font-semibold p-2">
              Make a payment
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Riding;
