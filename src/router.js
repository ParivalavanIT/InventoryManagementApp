import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home"
import Supplier from "./pages/Supplier"
import App from "./App";
import StockDetails from "./pages/StockDetails"
import Distributions from "./pages/Distributions"
import NavBar from "./components/NavBar";

const Router = createBrowserRouter([
    {
      element: <App />,
      children: [
        {
            path: "/",
            element: <NavBar />
        },
        {
            path: "/supplier",
            element: <Supplier />
        },
        {
            path: "/stockdetails",
            element: <StockDetails />
        },
        {
            path: "/distributions",
            element: <Distributions />
        },

      ],
    },
  ]);

  export default Router;