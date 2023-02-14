import React from "react";
import ReactDOM from "react-dom/client";
import MaterialTable from "material-table";
// pages
import Supplier from "./pages/Supplier";
import StockDetails from "./pages/StockDetails";
import Distributions from "./pages/Distributions";
import Home from "./pages/Home";
import App from "./App";

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
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
