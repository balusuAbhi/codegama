import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import { connect } from 'react-redux';
import './Cart.css';
import Eachproduct from '../../components/eachproduct/Eachproduct';
import { removeProductFromCart } from '../../action';

function Cart({cartData,remove}) {



  //remove product from cart onClick
  const handlecart = (id) =>{
    const newCartData = cartData.filter((eachProduct)=>{
        return eachProduct.id !== id
    })
    remove(newCartData)
  }


  return (
    <>
    <Navbar />
    <div className='cart-Conatiner'>
        { cartData.length === 0 ? <h2>Cart is empty</h2>:cartData && cartData.map((eachproduct)=>{
          return <Eachproduct key={eachproduct.id} eachdetail={eachproduct} allProducts={false} handleClick={handlecart}/>
        })}
    </div>
    </>
  )
}

const mapStateToProps  = (state)=>{
  return {
    cartData : state.cartProducts
  }
}
const mapDispatchToProps = (dispatch) =>{
    return {
      remove : (cartData)=>dispatch(removeProductFromCart(cartData))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Cart)