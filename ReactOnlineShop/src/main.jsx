import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Initial from "./Initial.jsx";
import Checkout from "./Checkout.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Initial /> },
      { path: "/checkout", element: <Checkout /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
