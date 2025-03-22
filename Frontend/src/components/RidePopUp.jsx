import React from "react";
import { RiArrowDownWideLine } from "react-icons/ri";
import { TiLocation } from "react-icons/ti";
import { BsCashCoin } from "react-icons/bs";
import { RiUserLocationFill } from "react-icons/ri";

const RidePopUp = (props) => {
  return (
    <>
      <div>
        <h5
          onClick={() => {
            props.setRidePopup(false);
          }}
          className=" text-2xl absolute top-0 p-1 left-[50%] -translate-x-[50%]"
        >
          <RiArrowDownWideLine />
        </h5>
        <h3 className="text-2xl font-semibold mb-5">New Ride Available!</h3>
        <div className="flex gap-2 items-center justify-between flex-col mt-5">
          <div className="w-full p-2  bg-yellow-300 rounded flex items-center justify-between">
            <div className="flex items-center gap-5">
              <img
                className="h-12 w-12 object-cover rounded-full"
                src="https://images.unsplash.com/photo-1669257977776-fc39c92c4147?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGN1dGUlMjBnaXJsfGVufDB8fDB8fHww"
                alt=""
              />
              <h2 className="text-lg font-semibold">Sona verma</h2>
            </div>
            <div>
              <p className="text-lg font-bold">2.2 KM</p>
            </div>
          </div>
          <div className="w-full">
            <div className="flex items-center gap-5 p-3 border-b-1">
              <RiUserLocationFill />
              <div>
                <h3 className="text-lg font-medium">562/11-A</h3>
                <p className="text-sm -mt-1 text-gray-600">
                  Kankariya Talab, Bhopal
                </p>
              </div>
            </div>
            <div className="flex items-center gap-5 p-3 border-b-1">
              <TiLocation />
              <div>
                <h3 className="text-lg font-medium">562/11-A</h3>
                <p className="text-sm -mt-1 text-gray-600">
                  Kankariya Talab, Bhopal
                </p>
              </div>
            </div>
            <div className="flex items-center gap-5 p-3">
              <BsCashCoin />
              <div>
                <h3 className="text-lg font-medium">₹193.20</h3>
                <p className="text-sm -mt-1 text-gray-600">Case Cash</p>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col items-center justify-between m-3">
            <button
              onClick={() => {
                props.setConfirmRidePopup(true);
                props.setRidePopup(false);
              }}
              className="w-full px-10 py-2 rounded bg-green-600 text-white font-semibold p-2"
            >
              Accept
            </button>
            <button
              onClick={() => {
                props.setRidePopup(false);
              }}
              className="w-full mt-2 px-10 py-2 rounded bg-gray-400 text-black font-semibold p-2"
            >
              Ignore
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default RidePopUp;
