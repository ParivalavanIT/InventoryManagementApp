import React from 'react'
import '../styles/formstyle.css'
import ProductImage from "../assets/newproduct.png"

const productform = () => {
  return (
    <div className='container1'>
      <div className='container'>
      <form  className='supplierForm'>
        <h1>Add a new product</h1>
        <div className='formitems'><label htmlFor="productname">Product Name</label>
        <input type="text" required/></div>
        <div className='formitems'>  <label htmlFor="supplier">Supplier</label>
        <input type="text" required/></div>
        <div className='formitems'> <label htmlFor="Date">Date</label>
        <input type="date" required/></div>
        <div className='formitems'><label htmlFor="NumberofProducts">No of Products</label>
        <input type="number" required/></div>
       <button>Add</button>
      </form>
    </div>
    <img src={ProductImage} alt="image"/>
    </div>
  )
}

export default productform
