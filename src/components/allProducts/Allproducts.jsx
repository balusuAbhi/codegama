import React,{useState,useEffect} from 'react';
import Eachproduct from "../eachproduct/Eachproduct";
import "./AllProducts.css"
import {connect} from "react-redux";
import {addToCart } from '../../action';


function Allproducts({allProducts,cartData,addProduct}) {

 const handleCartData = (id)=>{ 
    const doesNotContain = cartData.some((each)=>{
      return each.id === id
    });

    if(doesNotContain){
      alert('the product is already in cart')
    }else{
      const selectedProduct = allProducts.filter((Eachproduct)=>{
        return Eachproduct.id === id
      })
      const newCartData = [...cartData,...selectedProduct];
      addProduct(newCartData); 
    }
  }


  return (
    <div className="AllProducts-conatiner">
      {allProducts && allProducts.map((eachproduct)=>{
        return <Eachproduct key={eachproduct.id} eachdetail={eachproduct} handleClick={handleCartData} allProducts = {true}/>
      })}
    </div>
  )
}

const mapStateToProps = (state)=>{
  return {
    allProducts : state.allProducts,
    cartData : state.cartProducts,
  }
}
const mapDispatchToProps = (dispatch) =>{
  return{
    addProduct : (data)=>dispatch(addToCart(data)),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Allproducts)