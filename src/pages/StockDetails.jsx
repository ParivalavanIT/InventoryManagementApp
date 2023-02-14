import React,{useMemo} from 'react'
import MaterialReactTable from 'material-react-table';

export default function StockDetails() {
  const stockData = []
  
    //should be memoized or stable
    const columns = useMemo(
      () => [
        {
          accessorKey: 'sno', //access nested data with dot notation
          header: 'S.no',
        },
        {
          accessorKey: 'product',
          header: 'Product',
        },
        {
          accessorKey: 'availablity', //normal accessorKey
          header: 'Availablity',
        },
        {
          accessorKey: 'view',
          header: 'View Details',
        },
       
      ],
      [],
    );
  return (
    <>
     <MaterialReactTable columns={columns} data={stockData} />
    </>
  )
}

