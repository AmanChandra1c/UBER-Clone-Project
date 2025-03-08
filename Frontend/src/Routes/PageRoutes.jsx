import React from "react";
import { Routes, Route } from "react-router-dom";
import Start from "../pages/Start";
import UserLogin from "../pages/UserLogin";
import UserSignUp from "../pages/UserSignUp";
import CaptainLogin from "../pages/CaptainLogin";
import CaptainSignUp from "../pages/CaptainSignUp";
import Home from "../pages/Home";
import CaptainHome from "../pages/CaptainHome";
import UserLogout from "../pages/UserLogout";
import UserProtectWrapper from "../pages/UserProtectWrapper";
import CaptainProtectWrapper from "../pages/CaptainProtectWrapper";
import CaptainLogout from "../pages/CaptainLogout";

const PageRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/signup" element={<UserSignUp />} />
        <Route path="/captain-login" element={<CaptainLogin />} />
        <Route path="/captain-signup" element={<CaptainSignUp />} />
        <Route
          path="/home"
          element={
            <UserProtectWrapper>
              <Home />
            </UserProtectWrapper>
          }
        />
        <Route
          path="/user/logout"
          element={
            <UserProtectWrapper>
              <UserLogout />
            </UserProtectWrapper>
          }
        />
        <Route
          path="/captain-home"
          element={
            <CaptainProtectWrapper>
              <CaptainHome />
            </CaptainProtectWrapper>
          }
        />
        <Route
          path="/captain/logout"
          element={
            <CaptainProtectWrapper>
              <CaptainLogout />
            </CaptainProtectWrapper>
          }
        />
      </Routes>
    </>
  );
};

export default PageRoutes;
