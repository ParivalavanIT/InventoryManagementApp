import React from "react";
import ReactDOM from "react-dom/client";

// pages
import Supplier from "./pages/Supplier";
import StockDetails from "./pages/StockDetails";
import Distributions from "./pages/Distributions";
import Home from "./pages/Home";
import App from "./App";
import SupplierForm from "./pages/forms/supplierform";
import ProductForm from "./pages/forms/productform";
import DistributionForm from "./pages/forms/distributionform";
import Login from "./pages/forms/login";
import TransactionForm from "./pages/forms/newtransaction";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/supplier",
        element: <Supplier />,
      },
      {
        path: "/stockdetails",
        element: <StockDetails />,
      },
      {
        path: "/distributions",
        element: <Distributions />,
      },
      {
        path: "/supplierform",
        element: <SupplierForm />,
      },
      {
        path: "/productform",
        element: <ProductForm />,
      },
      {
        path: "/disributionform",
        element: <DistributionForm />,
      },
      {
        path: "/transaction",
        element: <TransactionForm />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
