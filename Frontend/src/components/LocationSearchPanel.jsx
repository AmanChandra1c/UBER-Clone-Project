import React, { useState } from "react";
import { TiLocation } from "react-icons/ti";

const LocationSearchPanel = (props) => {
  const location = [
    "24B, Neer Kapoor's cafe, Sheryians Coding School, Bhopal",
    "24C, Neer malhotra's cafe, Sheryians Coding School, Bhopal",
    "24B, Neer singhaniya's cafe, Sheryians Coding School, Bhopal",
    "18A, bombaiya dukan madurai bhopal indore naka",
  ];
  return (
    <>
      <div className="mt-5">
        {location.map((elem, index) => (
          <div
            onClick={() => {
              props.setVehiclePanel(true);
              props.setPanelOpen(false);
            }}
            key={index}
            className="flex gap-4 border-2 p-3 border-gray-100 active:border-black rounded-xl items-center my-2 justify-start"
          >
            <h2 className="bg-zinc-200 flex items-center justify center p-3 rounded-full">
              <TiLocation />
            </h2>
            <h4 className="font-medium">{elem}</h4>
          </div>
        ))}
      </div>
    </>
  );
};

export default LocationSearchPanel;
