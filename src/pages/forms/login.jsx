import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/login.css"
import LoginImage from "../assets/lgnpg.png"

const login = () => {
  return (
    <main className='main'>
      <div className='topic_holder'>
       <div className='contentpg'> <h1>PAAAVAI STORE<br/> MANAGEMENT SYSTEM</h1>
        <p >Paavai Store management system is to manage the <br /> stocks and the distribution details effectively . To see the stock details please login to continue</p></div>
        <img  className="loginimage" src={LoginImage} alt="picture" />
      </div>
      <div className='form_holder'>
        <form className='loginform'>
          <h1>Login</h1>
          <div className='form_elem'>
            <label htmlFor="username">Username</label>
            <input type="text" />
          </div>
          <div className='form_elem'>
          <label htmlFor="password">Password</label>
          <input type="password" />
          </div>
          <button><Link to="/" className='lgnbtn'>Login</Link></button>
        </form>
      </div>
    </main>
  )
}

export default login
