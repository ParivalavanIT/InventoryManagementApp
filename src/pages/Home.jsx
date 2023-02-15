import React, { useMemo, useState } from "react";
import Card from "../components/Card";
import MaterialReactTable from "material-react-table";
import "./styles/homestyles.css";
import { Link } from "react-router-dom";

export default function Home() {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  const data = [];

  //should be memoized or stable
  const columns = useMemo(
    () => [
      {
        accessorKey: "sno", //access nested data with dot notation
        header: "S.no",
      },
      {
        accessorKey: "product",
        header: "Product",
      },
      {
        accessorKey: "buyer", //normal accessorKey
        header: "Buyer",
      },
      {
        accessorKey: "purpose",
        header: "Purpose",
      },
      {
        accessorKey: "date",
        header: "Date",
      },
      {
        accessorKey: "college",
        header: "College",
      },
      {
        accessorKey: "dept",
        header: "Dept",
      },
      {
        accessorKey: "quantity",
        header: "Quantity",
      },
    ],
    []
  );
  const purchaseData = [];
  const purchasedColumns = useMemo(
    () => [
      {
        accessorKey: "sno", //access nested data with dot notation
        header: "S.no",
      },
      {
        accessorKey: "product",
        header: "Product",
      },
      {
        accessorKey: "supplier", //normal accessorKey
        header: "Supplier",
      },
      {
        accessorKey: "date",
        header: "Date",
      },
      {
        accessorKey: "quantity",
        header: "Quantity",
      },
    ],
    []
  );
  return (
    <>
      <div className="logout">
        <Link to="/login" className="lgtbtn">
          <button>
            Logout
          </button>
        </Link>
      </div>
      <div className="cardHolder">
        <Card name="delivered" year="2022-2023" />
        <Card name="purchased" year="2022-2023" />
      </div>
      <div className="bloc-tabs">
        <h5
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Recently purchased
        </h5>
        <h5
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Recently Distributed
        </h5>
      </div>
      <hr />
      <div className="content-tabs">
        <div
          className={toggleState === 2 ? "content active-content" : "content"}
        >
          <MaterialReactTable columns={columns} data={data} />
        </div>
        <div
          className={toggleState === 1 ? "content active-content" : "content"}
        >
          <MaterialReactTable columns={purchasedColumns} data={purchaseData} />
        </div>
      </div>
    </>
  );
}
