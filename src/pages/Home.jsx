import React from 'react'
import '../pages/Home.css'
import { Link } from "react-router-dom"
import MaterialTable from 'material-table'
const Home = () => {
  

  const columns=[
    {title: 'S.no',field: 's.no'},
    {title: 'Product',field: 'product'},
      {title: 'Buyer',field: 'buyer'},
      {title: 'Purpose',field: 'purpose'},
      {title: 'Data',field: 'data'},
      {title: 'College',field: 'college'},
      {title: 'Dept',field: 'dept'},
      {title: 'Quantity',field: 'quality'}
  ]
  return (
    <>
      <div className='btn_holder'>
        <button>
          <Link to='//'>Logout</Link>
        </button>
        <div className='table'>
        {/* <MaterialTable  columns={columns} title='Recently Distributed'/> */}
        </div>
      </div>
    </>
  
  )
}

export default Home
