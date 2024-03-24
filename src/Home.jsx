import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "./Nav";

const Home = () => {
  return (
    <div className="mx-10">
      <h1>Main React Router Page.</h1>
      <Nav></Nav>
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
