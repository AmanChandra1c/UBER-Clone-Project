import React, { createContext, useState } from "react";

export const CaptainDataContext = createContext();
const CaptainContext = ({ children }) => {
  const [captain, setCaptain] = useState({
    fullname: {
      firstName: "",
      lastName: "",
    },
    email: "",
    vehicle: {
      color: "",
      plate: "",
      capacity: 0,
      vehicleType: "",
    },
  });
  return (
    <>
      <CaptainDataContext.Provider value={{ captain, setCaptain }}>
        {children}
      </CaptainDataContext.Provider>
    </>
  );
};

export default CaptainContext;
