import React from "react";
import "./Eachproduct.css";
import { Link } from "react-router-dom";

function Eachproduct({ eachdetail, handleClick, allProducts, viewProduct,handleCountDecrement,handleIncrment}) {
  return (
    <div className="product-conatiner">
      <img src={eachdetail.image} alt="image" />
      <p>{eachdetail.title}</p>
      <p>Price {eachdetail.price}</p>
      {allProducts ? (
        ""
      ) : (
        <div className="CountContainer">
          <span>Quantity</span>
          {eachdetail.count <= 1 ? (
            <button onClick={() => handleClick(eachdetail.id)}>-</button>
          ) : (
            <button onClick={()=>handleCountDecrement(eachdetail)}>-</button>
          )}
          <span style={{ margin: "0 20px", fontSize: "15px" }}>
            {eachdetail.count}
          </span>
          <button onClick={()=>handleIncrment(eachdetail)}>+</button>
        </div>
      )}

      <div className="buttons-container">
        {viewProduct ? (
          ""
        ) : (
          <Link
            to={`/product/${eachdetail.id}`}
            className="view-btn"
            style={{ backgroundColor: "#4ED476" }}
          >
            View Product
          </Link>
        )}
        {allProducts ? (
          <button className="view-btn" onClick={() => handleClick(eachdetail)}>
            Add To cart
          </button>
        ) : (
          <button
            className="view-btn"
            onClick={() => handleClick(eachdetail.id)}
          >
            remove
          </button>
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
