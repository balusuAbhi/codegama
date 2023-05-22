import React from "react";
import Eachproduct from "../eachproduct/Eachproduct";
import "./AllProducts.css";
import { connect } from "react-redux";
import { addToCart } from "../../action";

function Allproducts({ allProducts, cartData, addToCart }) {
  const handleCartData = (obj) => {
     let found = false;
     for(let i=0;i<cartData.length; i++){
      if(cartData[i].id === obj.id){
        cartData[i].count++
        found = true;
        break
      }
     }
     if(!found){
      cartData.push({...obj,count:1})
     }
     addToCart([...cartData])    
  };

  return (
    <div className="AllProducts-conatiner">
      {allProducts &&
        allProducts.map((eachproduct) => {
          return (
            <Eachproduct
              key={eachproduct.id}
              eachdetail={eachproduct}
              handleClick={handleCartData}  
              allProducts={true}
            />
          );
        })}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    allProducts: state.allProducts,
    cartData: state.cartProducts,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (data) => dispatch(addToCart(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Allproducts);
