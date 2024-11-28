import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <div className="main-container">
        <Sidebar />
        <Dashboard />
      </div>
    </div>
  );
};

export default App;
