import React from "react";
import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import { HashRouter, Routes, Route } from "react-router";

function App() {
  return (
    <HashRouter>
      {/* Routers */}
      <Routes>
        <Route index element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
