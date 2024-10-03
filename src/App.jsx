import React from "react";
import LoginPage from "./assets/Companents/pages/LoginPage";
import LoginInpust from "./assets/Companents/OtherItems/LoginInpust";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUpPage from "./assets/Companents/pages/SignUpPage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage/>}></Route>
          <Route path="/SignUpPage" element={<SignUpPage/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
