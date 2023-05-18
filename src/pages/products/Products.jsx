import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import Eachproduct from "../../components/eachproduct/Eachproduct";
import { addToCart } from "../../action";
import Navbar from "../../components/navbar/Navbar";

function Products({ allProducts,addProduct,cartData}) {
  const [viewProduct, setViewProduct] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    const product = allProducts.filter((each) => {
      return each.id == id;
    });

    setViewProduct(...product);
  }, []);


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
    <>
      <Navbar/>
      <h2 style={{ textAlign: "center", margin: "30px 0" }}>product view</h2>
      <div className="view-container">
        {viewProduct && (
          <Eachproduct eachdetail={viewProduct} allProducts={true}  viewProduct = {true} handleClick ={handleCartData}/>
        )}
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    allProducts: state.allProducts,
    cartData : state.cartProducts,
  };
};

const mapDispatchToProps = (dispatch) =>{
    return{
      addProduct : (data)=>dispatch(addToCart(data)),
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(Products);
