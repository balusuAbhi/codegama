import React from 'react'
import logo from "../../assets/navBar/flipkart-plus_8d85f4.png"
import './Navbar.css'
import {MdFilterAlt} from 'react-icons/md'
import { Link } from "react-router-dom";


function Navbar() {
  return (
   <div className='navbar-container'>
    <div className='navbar-wrapper'>
        <div className='navbar-left'>
        <img src={logo} alt='image' style={{width : "150px"}}/>
        </div>
        <div className='navbar-right'> 
         <Link to='/'>Home</Link>
         {/* <Link to='javascript:void(0)'><MdFilterAlt style={{color : "white", height:"100%"}}/></a> */}
         <Link to='#'>Wishlist</Link>
         <Link to='/cart'>Cart</Link>
        </div>
    </div>
   </div>
  )
}

export default Navbar