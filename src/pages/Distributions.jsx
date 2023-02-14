import React,{useMemo}  from 'react'
import MaterialReactTable from 'material-react-table'


export default function Distributions() {
  const distributionData = []
  
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
          accessorKey: 'buyer', //normal accessorKey
          header: 'Buyer',
        },
        {
          accessorKey: 'purpose',
          header: 'Purpose',
        },
        {
          accessorKey: 'date',
          header: 'Date',
        },
        {
          accessorKey: 'college',
          header: 'College',
        },
        {
          accessorKey: 'dept',
          header: 'Dept',
        },
        {
          accessorKey: 'quantity',
          header: 'Quantity',
        },
      ],
      [],
    );
  return (
    <>
   
    <MaterialReactTable columns={columns} data={distributionData} />
    </>
  )
}
