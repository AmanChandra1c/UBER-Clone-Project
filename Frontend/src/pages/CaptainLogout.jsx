import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const CaptainLogout = () => {
  const token = localStorage.getItem("captainToken");
  const navigate = useNavigate();

  axios
    .get(`${import.meta.env.VITE_BASE_URL}/captains/logout`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      if (response.status === 200) {
        localStorage.removeItem("captainToken");
        navigate("/captain-login");
      }
    })
    .catch((error) => {
      console.log(error);
    });
  return <></>;
};

export default CaptainLogout;
