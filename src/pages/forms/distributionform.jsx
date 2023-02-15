import React from 'react'
import "../styles/distributionform.css"
import distImage from "../assets/newdusribution.png"

const distributionform = () => {
  return (
    <div>
    <div className="container">
        <div className="topic">
            <h1>New Distribution</h1>
        </div>
        <form>
        <div className='form_container'>
                <div className='form_items'>
                    <label htmlFor="productname">Product Name</label>
                    <input type="text" required />
                </div>
                <div className='form_items'>
                    <label htmlFor="buyer">Buyer</label>
                    <input type="text" required />
                </div>
                <div className='form_items'>
                    <label htmlFor="purpose">Purpose</label>
                    <input type="text" required />
                </div>
                <div className='form_items'>
                    <label htmlFor="date">Date</label>
                    <input type="date" required />
                </div>
            </div>
            <div className='form_container'>
                <div className='form_items'>
                    <label htmlFor="college">College Name</label>
                    <select name="CollegeName" id="college-select">
                        <option value="PEC">PEC</option>
                        <option value="PCE">PCE</option>
                        <option value="PCT">PCT</option>
                    </select>
                </div>
               <div className='form_items'>
                    <label htmlFor="dept">Department</label>
                    <select name="CollegeName" id="college-select">
                        <option value="IT">IT</option>
                        <option value="CSE">CSE</option>
                        <option value="ECE">ECE</option>
                    </select>
               </div>
               <div className='form_items'>
               <label htmlFor="quantity">Quantity</label>
                <input type="text" required />
               </div>
               <button>Add</button>
            </div>
            
        </form>
    </div>
    <img src={distImage} alt="image" />
    </div>
  )
}

export default distributionform
