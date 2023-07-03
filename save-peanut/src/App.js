import React from "react";
import "./App.css";
import Login from "./components/loginform/Login";
import Rlogin from "./components/rloginform/Rlogin";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path="/signup" element={<Login />} />
          <Route path="/login" element={<Rlogin />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
