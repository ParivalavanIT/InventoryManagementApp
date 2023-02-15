import React,{useMemo} from 'react'
import MaterialReactTable from 'material-react-table';
import AddCircleOutlineSharpIcon from '@mui/icons-material/AddSharp';
import { Link } from 'react-router-dom';
import './styles/topbarstyle.css'

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
    <div className='TopBar'>
      <h1>Stock Details</h1>
      <div>
        <Link className='Link-2' to='/productform'><AddCircleOutlineSharpIcon/><p>Add new</p></Link>
      </div>
    </div>
    <hr />
     <MaterialReactTable columns={columns} data={stockData} />
    </>
  )
}

