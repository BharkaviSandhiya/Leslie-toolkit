import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/common/layout/Layout";
import Login from "./components/login/Login";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<Layout />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;




















