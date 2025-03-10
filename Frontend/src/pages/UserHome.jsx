import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { RiArrowDownWideLine } from "react-icons/ri";
import { RiArrowUpWideLine } from "react-icons/ri";
import LocationSearchPanel from "../components/LocationSearchPanel";
import ShowVehicles from "../components/ShowVehicles";
import ConfirmedRide from "../components/ConfirmedRide";

const UserHome = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const [vehiclePanel, setVehiclePanel] = useState(false);
  const [confirmedRidePanel, setConfirmedRidePanel] = useState(false);
  const panelRef = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  useGSAP(() => {
    if (panelOpen) {
      gsap.to(panelRef.current, {
        height: "75%",
        padding: 24,
      });
    } else {
      gsap.to(panelRef.current, {
        height: "0%",
        padding: 24,
      });
    }
  }, [panelOpen]);

  return (
    <>
      <div className="h-screen relative overflow-hidden">
        <img
          className="w-16 absolute top-5 left-5"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt=""
        />
        <div>
          {/* img for temporary use */}
          <img
            className="w-full h-screen object-cover "
            src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
            alt=""
          />
        </div>
        <div className="flex flex-col justify-end absolute top-0 h-screen w-full ">
          <div className="h-[25%] p-6 bg-white relative">
            {panelOpen ? (
              <h5
                onClick={() => {
                  setPanelOpen(false);
                }}
                className="absolute right-6 top-6 text-2xl"
              >
                <RiArrowDownWideLine />
              </h5>
            ) : (
              <h5
                onClick={() => {
                  setPanelOpen(true);
                }}
                className="absolute right-6 top-6 text-2xl"
              >
                <RiArrowUpWideLine />
              </h5>
            )}
            <h4 className="text-2xl font-semibold ">Find a trip</h4>
            <form
              onSubmit={(e) => {
                submitHandler(e);
              }}
            >
              <div className="absolute top-[42%] left-10 rounded w-1 h-20 bg-gray-700"></div>
              <input
                onClick={() => {
                  setPanelOpen(true);
                }}
                value={pickup}
                onChange={(e) => {
                  setPickup(e.target.value);
                }}
                className="bg-[#eee] px-12 py-2 text-lg rounded w-full mt-5"
                type="text"
                placeholder="Add a pick-up location"
              />
              <input
                onClick={() => {
                  setPanelOpen(true);
                }}
                value={destination}
                onChange={(e) => {
                  setDestination(e.target.value);
                }}
                className="bg-[#eee] px-12 py-2 text-lg rounded w-full mt-3"
                type="text"
                placeholder="Enter your destination"
              />
            </form>
          </div>
          <div ref={panelRef} className="bg-white h-0">
            <LocationSearchPanel
              setPanelOpen={setPanelOpen}
              setVehiclePanel={setVehiclePanel}
            />
          </div>
        </div>
        <ShowVehicles
          vehiclePanel={vehiclePanel}
          setVehiclePanel={setVehiclePanel}
          setConfirmedRidePanel={setConfirmedRidePanel}
        />
      </div>
      <div>
        <ConfirmedRide
          confirmedRidePanel={confirmedRidePanel}
          setConfirmedRidePanel={setConfirmedRidePanel}
        />
      </div>
    </>
  );
};

export default UserHome;
