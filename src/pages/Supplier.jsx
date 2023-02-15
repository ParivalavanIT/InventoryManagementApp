import React,{useMemo}  from 'react'
import MaterialReactTable from 'material-react-table'
import AddCircleOutlineSharpIcon from '@mui/icons-material/AddSharp';
import { Link } from 'react-router-dom';
import './styles/topbarstyle.css'

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
    <div className='TopBar'>
      <h1>
        Supplier Details
      </h1>
      <div>
      <Link className='Link-2' to='/supplierform'> <AddCircleOutlineSharpIcon/><p> Add New</p></Link>
      </div>
    </div>
    <hr/>
    <div>
     <MaterialReactTable columns={columns} data={supplierData} />
     </div>
    </>
  )
}

 