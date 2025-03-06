import React from "react";
import { Routes, Route } from "react-router-dom";
import Start from "../pages/Start";
import UserLogin from "../pages/UserLogin";
import UserSignUp from "../pages/UserSignUp";
import CaptainLogin from "../pages/CaptainLogin";
import CaptainSignUp from "../pages/CaptainSignUp";

const PageRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/signup" element={<UserSignUp />} />
        <Route path="/captain-login" element={<CaptainLogin />} />
        <Route path="/captain-signup" element={<CaptainSignUp />} />
      </Routes>
    </>
  );
};

export default PageRoutes;
