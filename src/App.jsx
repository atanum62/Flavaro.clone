import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Success from "./pages/Success";
import Error from "./pages/Error";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },

    { path: "/scuess", element: <Success /> },
    { path: "/*", element: <Error /> },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
