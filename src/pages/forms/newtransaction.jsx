import React from 'react';
import "../styles/transaction.css"

const newtransaction = (props) => {
  return (
    <div>
      <form>
        <h1>New Transaction</h1>
        <label htmlFor="productName">Product Name</label>
        <select name="Product Name" id="product-name" required>
          <option value={props.product_name}>{props.product_name}</option>
        </select>
        <label htmlFor="supplierName">Supplier Name</label>
        <select name="Supplier Name" id="supplier-name" required>
          <option value={props.supplier_name}>{props.supplier_name}</option>
        </select>
        <label htmlFor="quantity" required>Quantity</label>
        <input type="text" />
        <input type="button" value="Update" />
      </form>
    </div>
  )
}

export default newtransaction
