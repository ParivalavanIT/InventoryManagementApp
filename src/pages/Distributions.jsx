import React,{useMemo}  from 'react'
import MaterialReactTable from 'material-react-table'
import AddCircleOutlineSharpIcon from '@mui/icons-material/AddSharp';
import { Link } from 'react-router-dom';
import './styles/topbarstyle.css'



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
   <div className='TopBar'>
      <h1>Distributions</h1>
      <div>
        <Link className='Link-2' to='/disributionform'><AddCircleOutlineSharpIcon/><p>Add new</p></Link>
      </div>
    </div>
    <hr />
    <MaterialReactTable columns={columns} data={distributionData} />
    </>
  )
}
