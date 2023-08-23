import React from "react";

import "./App.css";
import Login from "./components/loginform/Login";
import Rlogin from "./components/rloginform/Rlogin";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/homepage/Home";
import Addpet from "./components/addpet/Addpet";
import ProfilePage from "./components/myprofile/ProfilePage";
import { useStore } from "./store";

const App = () => {

  const { authenticated } = useStore(state => state);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path="/signup" element={<Login />} />
          <Route path="/login" element={<Rlogin />} />
          {
            authenticated ? (
              <>
                <Route path="/home" element={<Home />} />
                <Route path="/addpet" element={<Addpet />} />
                <Route path="/profile" element={<ProfilePage />} />
              </>
            ) : (
              <Route path="*" element={<Login />} />
            )
          }
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
