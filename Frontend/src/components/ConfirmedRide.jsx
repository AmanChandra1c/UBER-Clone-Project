import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { RiArrowDownWideLine } from "react-icons/ri";
import { TiLocation } from "react-icons/ti";
import { BsCashCoin } from "react-icons/bs";
import { RiUserLocationFill } from "react-icons/ri";
import LookingForDriver from "../components/LookingForDriver";

const confirmedRide = ({ confirmedRidePanel, setConfirmedRidePanel }) => {
  const [vehicleFoundPanel, setVehicleFoundPanel] = useState(false);
  const confirmedRidePanelRef = useRef(null);
  useGSAP(() => {
    if (confirmedRidePanel) {
      gsap.to(confirmedRidePanelRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(confirmedRidePanelRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [confirmedRidePanel]);
  return (
    <>
      <div
        ref={confirmedRidePanelRef}
        className="fixed w-full z-10  bottom-0 translate-y-full bg-white px-3 py-6 pt-12"
      >
        <h5
          onClick={() => {
            setConfirmedRidePanel(false);
          }}
          className=" text-2xl absolute top-0 p-1 left-[50%] -translate-x-[50%]"
        >
          <RiArrowDownWideLine />
        </h5>
        <h3 className="text-2xl font-semibold mb-5">Confirmed your Ride</h3>
        <div className="flex gap-2 items-center justify-between flex-col mt-5">
          <img
            className="h-24"
            src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png"
            alt=""
          />
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
            <div className="flex items-center gap-5 p-3 border-b-1">
              <BsCashCoin />
              <div>
                <h3 className="text-lg font-medium">₹193.20</h3>
                <p className="text-sm -mt-1 text-gray-600">Case Cash</p>
              </div>
            </div>
          </div>
          <button
            onClick={() => {
              setVehicleFoundPanel(true);
              setConfirmedRidePanel(false);
            }}
            className="w-full mt-5 bg-green-600 text-white font-semibold p-2"
          >
            Confirmed Ride
          </button>
        </div>
      </div>
      <LookingForDriver
        vehicleFoundPanel={vehicleFoundPanel}
        setVehicleFoundPanel={setVehicleFoundPanel}
        setConfirmedRidePanel={setConfirmedRidePanel}
      />
    </>
  );
};

export default confirmedRide;
