import React from 'react'
import { Link,Navigate } from 'react-router-dom'
import "./Nav.css"

  function Navie() {
      return (
        <nav>
        <a href='index.html'>
        
        </a>
        <div>
        <ul id="navbar">
        <li><a className='active'
         href='index.html'>About Us</a></li>
        <li><a href='index.html'>Policy</a></li>
        <li><a href='index.html'>Claims</a></li>
        <li><a href='index.html'>Customer Service</a></li>
        <li><Link to="/signup">Register</Link></li>
        <li><Link to="/">Login</Link></li>
        </ul>
        </div>
        </nav>
      )
    }
    
    export default Navie