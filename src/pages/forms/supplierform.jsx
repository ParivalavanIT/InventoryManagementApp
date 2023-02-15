import React from 'react'
import '../styles/formstyle.css'
import SupplyImage from '../assets/supplieradding.png'


const supplierform = () => {
   
  return (
 <div className='container1'>
    <div className='container'>
      <form  className='supplierForm'>
        <h1>Add a new supplier</h1>
        <div className='formitems'><label htmlFor="SupplierName">Supplier name</label>
        <input type="text" required/></div>
        <div className='formitems'>  <label htmlFor="Address">Address</label>
        <input type="text" required/></div>
        <div className='formitems'> <label htmlFor="Date">Date</label>
        <input type="date" required/></div>
        <div className='formitems'><label htmlFor="NumberofProducts">No of Products</label>
        <input type="number" required/></div>
       <button>Add</button>
      </form>
     
    </div>
    <img src={SupplyImage} alt="image" />
  </div>
  )
}

export default supplierform
