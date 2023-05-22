import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import { connect } from "react-redux";
import "./Cart.css";
import Eachproduct from "../../components/eachproduct/Eachproduct";
import { removeProductFromCart, addToCart } from "../../action";

function Cart({ cartData, remove, addToCart }) {
  const [totalprice, setTotalPrice] = useState(0);
  useEffect(() => {
    let price = 0;
    for (let i = 0; i < cartData.length; i++) {
      price += cartData[i].price * cartData[i].count;
    }
    setTotalPrice(price.toFixed(2));
  }, [cartData]);
  //remove product from cart onClick
  const handlecart = (id) => {
    const newCartData = cartData.filter((eachProduct) => {
      return eachProduct.id !== id;
    });
    remove(newCartData);
  };
  // decrement count
  const DecrementCount = (obj) => {
    const UpdatedCount = cartData.filter((eachProduct) => {
      if (eachProduct.id === obj.id) {
        return {
          ...eachProduct,
          count: eachProduct.count--,
        };
      } else {
        return eachProduct;
      }
    });
    addToCart(UpdatedCount);
  };

  //incrementCount
  const incrementCount = (obj) => {
    const UpdatedCount = cartData.filter((eachProduct) => {
      if (eachProduct.id === obj.id) {
        return {
          ...eachProduct,
          count: eachProduct.count++,
        };
      } else {
        return eachProduct;
      }
    });
    addToCart(UpdatedCount);
  };

  //

  return (
    <>
      <Navbar />
      <div className="cart-Conatiner">
        {cartData.length === 0 ? (
          <h2>Cart is empty</h2>
        ) : (
          cartData &&
          cartData.map((eachproduct) => {
            return (
              <Eachproduct
                key={eachproduct.id}
                eachdetail={eachproduct}
                allProducts={false}
                handleCountDecrement={DecrementCount}
                handleIncrment={incrementCount}
                handleClick={handlecart}
              />
            );
          })
        )}
      </div>
      {cartData.length === 0 ? (
        ""
      ) : (
        <h2 style={{ textAlign: "center" }}>total cart price ={totalprice}$</h2>
      )}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    cartData: state.cartProducts,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    remove: (cartData) => dispatch(removeProductFromCart(cartData)),
    addToCart: (updatedCount) => dispatch(addToCart(updatedCount)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
