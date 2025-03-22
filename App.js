import React, { useEffect, useState } from "react";
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
import UserContext from "./src/utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./src/utils/appStore";
import Cart from "./src/Body/Cart";

const App = () => {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    setUserName("Masudha");
  }, []);

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName }}>
        <div>
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
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
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={routeConfig} />);
