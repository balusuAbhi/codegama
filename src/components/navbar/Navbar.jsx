import React from 'react'
import logo from "../../assets/navBar/flipkart-plus_8d85f4.png"
import './Navbar.css'
import { connect } from 'react-redux';
import { Link } from "react-router-dom";


function Navbar({cartCount}) {
  return (
   <div className='navbar-container'>
    <div className='navbar-wrapper'>
        <div className='navbar-left'>
        <img src={logo} alt='image' style={{width : "150px"}}/>
        </div>
        <div className='navbar-right'> 
         <Link to='/'>Home</Link>
         <Link to='#'>Wishlist</Link>
         <Link to='/cart'><div className='cartParentContainer'>cart {cartCount.length !== 0 && <span className="cartValue">{cartCount.length}</span>}</div></Link>
        </div>
    </div>
   </div>
  )
}

const mapStateToProps = (state)=>{
  return{
    cartCount : state.cartProducts
  }
}

export default connect(mapStateToProps)(Navbar)