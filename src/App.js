import React from "react";
import NavBar from "./Navbar";
import Login from "./pages/forms/login";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

export default App;
