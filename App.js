import React from "react";
import ReactDOM from "react-dom";
import "./App.scss";
import Body from "./src/Body/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./src/Body/About";
import Contact from "./src/Body/Contact";
import ErrorPage from "./src/Body/ErrorPage";
import Header from "./src/Body/Header";
import RestaurantMenu from "./src/Body/Restaurant/RestaurantMenu";
import Footer from "./src/Body/Footer";
import "./src/index.css";

const App = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

const routeConfig = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant-menu/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/count",
        element: <Footer/> // displaying my knowledge of class based components
      }
    ],
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={routeConfig} />);
