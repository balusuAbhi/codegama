import React from "react";
import "./Eachproduct.css";
import { Link } from "react-router-dom";

function Eachproduct({ eachdetail, handleClick, allProducts,viewProduct }) {
  return (
    <div className="product-conatiner">
      <img src={eachdetail.image} alt="image" />
      <p>{eachdetail.title}</p>
      <p>Price {eachdetail.price}</p>
    <div className="buttons-container">
   {viewProduct ? "" : <Link to={`/product/${eachdetail.id}`}  className="view-btn" style={{backgroundColor : "#4ED476"}}>View Product</Link>}
      {allProducts ? (
        <button className='view-btn' onClick={() => handleClick(eachdetail.id)}>Add To cart</button>
      ) : (
        <button className='view-btn' onClick={() => handleClick(eachdetail.id)}>remove</button>
      )}
    </div>
      <p>
        Rating {eachdetail?.rating?.rate}
        {eachdetail?.rating?.count}
      </p>
    </div>
  );
}

export default Eachproduct;
