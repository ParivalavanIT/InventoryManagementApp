import React,{useMemo}  from 'react'
import MaterialReactTable from 'material-react-table'

export default function Supplier() {
  const supplierData = []
  
    //should be memoized or stable
    const columns = useMemo(
      () => [
        {
          accessorKey: 'sno', //access nested data with dot notation
          header: 'S.no',
        },
        {
          accessorKey: 'suppliername',
          header: 'Supplier Name',
        },
        {
          accessorKey: 'address', //normal accessorKey
          header: 'Address',
        },
        {
          accessorKey: 'noOfproducts', //normal accessorKey
          header: 'No.of.Products',
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
     <MaterialReactTable columns={columns} data={supplierData} />
    </>
  )
}

 