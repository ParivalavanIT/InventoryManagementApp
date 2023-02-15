import React from 'react'
import MaterialReactTable from 'material-react-table';

const supplierdata = (props) => {
    const productInfoData = []
   
  
  
    //should be memoized or stable
    const productsInfoColumns = useMemo(
      () => [
        {
          accessorKey: 'sno', //access nested data with dot notation
          header: 'S.no',
        },
        {
          accessorKey: 'productName',
          header: 'Product Name',
        },
        {
          accessorKey: 'quality',
          header: 'Quality',
        }
      ],
      [],
    );
  return (
    <>
      <div>
        <h1>{props.Supplier}</h1>
        <h1>{props.productscount} Products</h1>
      </div>
      <MaterialReactTable columns={productsInfoColumns} data={productInfoData}/>
    </>
  )
}

export default supplierdata
