import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { RiArrowDownWideLine } from "react-icons/ri";

const ShowVehicles = ({
  vehiclePanel,
  setVehiclePanel,
  setConfirmedRidePanel,
}) => {
  const vehiclepanelRef = useRef(null);

  useGSAP(() => {
    if (vehiclePanel) {
      gsap.to(vehiclepanelRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(vehiclepanelRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [vehiclePanel]);
  return (
    <>
      <div
        ref={vehiclepanelRef}
        className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-6 pt-12"
      >
        <div className="mb-2">
          <h5
            onClick={() => {
              setVehiclePanel(false);
            }}
            className=" text-2xl absolute top-0 p-1 left-[50%] -translate-x-[50%]"
          >
            <RiArrowDownWideLine />
          </h5>
        </div>
        <h3 className="text-2xl font-semibold mb-5">Choose a vehicle</h3>
        <div
          onClick={() => {
            setConfirmedRidePanel(true);
            setVehiclePanel(false);
          }}
          className="flex border-2 mb-2 border-gray-200 active:border-black rounded-xl w-full p-3 items-center justify-between"
        >
          <img
            className="h-10"
            src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png"
            alt=""
          />
          <div className="ml-2 w-1/2">
            <h4 className="font-medium text-base">
              UberGo<span>1</span>
            </h4>
            <h5 className="font-medium text-sm">3 mins away</h5>
            <p className="font-normal text-xs text-gray-600">
              Affordable, compact rides
            </p>
          </div>
          <h2 className="text-lg font-semibold">₹188.96</h2>
        </div>
        <div
          onClick={() => {
            setConfirmedRidePanel(true);
            setVehiclePanel(false);
          }}
          className="flex border-2 mb-2 border-gray-200 active:border-black rounded-xl w-full p-3 items-center justify-between"
        >
          <img
            className="h-10"
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png"
            alt=""
          />
          <div className="-ml-2 w-1/2">
            <h4 className="font-medium text-base">
              Moto <span>1</span>
            </h4>
            <h5 className="font-medium text-sm">3 mins away</h5>
            <p className="font-normal text-xs text-gray-600">
              Affordable, mototrcycle rides
            </p>
          </div>
          <h2 className="text-lg font-semibold">₹65</h2>
        </div>
        <div
          onClick={() => {
            setConfirmedRidePanel(true);
            setVehiclePanel(false);
          }}
          className="flex border-2 mb-2 border-gray-200 active:border-black rounded-xl w-full p-3 items-center justify-between"
        >
          <img
            className="h-10"
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png"
            alt=""
          />
          <div className="ml-2 w-1/2">
            <h4 className="font-medium text-base">
              UberAuto <span>4</span>
            </h4>
            <h5 className="font-medium text-sm">3 mins away</h5>
            <p className="font-normal text-xs text-gray-600">
              Affordable Auto rides
            </p>
          </div>
          <h2 className="text-lg font-semibold">₹118.50</h2>
        </div>
      </div>
    </>
  );
};

export default ShowVehicles;
