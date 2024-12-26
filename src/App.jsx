import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Interface from "./Pages/Interface";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<Interface />} />
      </Routes>
    </>
  );
}

export default App;
