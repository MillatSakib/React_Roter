import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Home from "./Home.jsx";
import Nav from "./Nav.jsx";
import Contact from "./Contact.jsx";
import Users from "./Users.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/about",
        element: (
          <div className=" my-4">
            Hello! I'm Md. Sohan Millat Sakib, a passionate Full stack web
            Developer. I have a passion for learning and sharing my knowledge
            with others as publicly as possible. My core skill is based on
            JavaScript and I love to do most of the things using JavaScript. I
            love to make the web more open to the world.I am strategic,
            goal-oriented, and always work with an end goal in mind. I am
            currently doing my graduation in Computer Science and Engineering at
            Green University of Bangladesh, located in Narayanganj, Bangladesh.
          </div>
        ),
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/users",
        element: <Users></Users>,
      },
      {
        path: "/",
        element: <div>This is Home page</div>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
