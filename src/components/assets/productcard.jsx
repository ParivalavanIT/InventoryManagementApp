import React from 'react'
import MaterialReactTable from 'material-react-table';

export default function productcard(props)
 {
    const productData = []
   
  
  
    //should be memoized or stable
    const productsColumns = useMemo(
      () => [
        {
          accessorKey: 'sno', //access nested data with dot notation
          header: 'S.no',
        },
        {
          accessorKey: 'date',
          header: 'Date',
        },
        {
          accessorKey: 'invoice', //normal accessorKey
          header: 'Invoice',
        },
        {
          accessorKey: 'openstack',
          header: 'Open Stock',
        },
        {
          accessorKey: 'issued',
          header: 'Issued',
        },
        {
          accessorKey: 'closedstock',
          header: 'Closed Stock',
        }
      ],
      [],
    );
  return (
    <>
        <div>
            <h3>Stock Details</h3>
            <h1>{props.productname}</h1>
            <p>{props.stationaryproducts}</p>
        </div>
        <MaterialReactTable columns={productsColumns} data={productData}/>

    </>
  )
}


