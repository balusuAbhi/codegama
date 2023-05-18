//types
// export const LOAD_ALL_PRODUCTS = "LOAD_ALL_PRODUCTS";
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_PRODUCT_FROM_CART = "REMOVE_PRODUCT_FROM_CART";
export const FILTER_PRODUCTS = "FILTER_PRODUCTS";

//actions
// export const loadData = (data) => {
//   return {
//     type: LOAD_ALL_PRODUCTS,
//     payload: data,
//   };
// };

//adding product to cart action
export const addToCart = (cartData) => {
  return {
    type: ADD_TO_CART,
    payload: cartData,
  };
};

//removing product from cart
export const removeProductFromCart = (cartData) => {
  return {
    type: REMOVE_PRODUCT_FROM_CART,
    payload: cartData,
  };
};
//filtering
export const filterProducts = (filter_catogary) => {
  return {
    type: FILTER_PRODUCTS,
    payload: filter_catogary,
  };
};

// fetching data from api
// export const fetchData = () => {
//   return (dispatch) => {
//     fetch("https://fakestoreapi.com/products")
//       .then((res) => {
//         return res.json();
//       })
//       .then((data) => {
//         dispatch(loadData(data));
//       })
//       .catch((err) => {
//         console.log(err, "error");
//       });
//   };
// };

//fliterData
export const filterdData = (userSelected) => {
  return (dispatch) => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
          if(userSelected.length === 0){
            dispatch(filterProducts(data))
          }else{
            const filterData = data.filter((obj) => userSelected.includes(obj.category));
          dispatch(filterProducts(filterData));
          }
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
