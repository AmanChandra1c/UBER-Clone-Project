import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { RiArrowDownWideLine } from "react-icons/ri";
import { TiLocation } from "react-icons/ti";
import { BsCashCoin } from "react-icons/bs";
import { RiUserLocationFill } from "react-icons/ri";



const WaitingForDriver = (props) => {
  const driverFoundPanelRef = useRef(null);
 
  useGSAP(() => {
    if (props.driverPanel) {
      gsap.to(driverFoundPanelRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(driverFoundPanelRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [props.driverPanel ]);

  return (
    <>
      <div
        ref={driverFoundPanelRef}
        className="fixed w-full z-10  bottom-0 translate-y-full bg-white px-3 py-6 pt-12"
      >
        <h5
          onClick={() => {
            props.setDriverPanel(false);
          }}
          className=" text-2xl absolute top-0 p-1 left-[50%] -translate-x-[50%]"
        >
          <RiArrowDownWideLine />
        </h5>
        <h3 className="text-2xl font-semibold mb-5">Lookinkg for driver....</h3>
        <div className="flex gap-2 items-center justify-between flex-col mt-5">
          <div className="w-full px-2 flex items-center justify-between">
            <img
              className="h-16"
              src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png"
              alt=""
            />
            <div className="text-right">
              <h2 className="text-lg font-medium">Aman </h2>
              <h4 className="text-xl font-semibold -mt-1 -mb-1">MP04 NX8752</h4>
              <p className="text-sm text-gray-600">Honda Shine</p>
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
            <div className="flex items-center gap-5 p-3 border-b-1">
              <BsCashCoin />
              <div>
                <h3 className="text-lg font-medium">₹193.20</h3>
                <p className="text-sm -mt-1 text-gray-600">Case Cash</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WaitingForDriver;
