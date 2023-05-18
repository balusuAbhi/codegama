import {
  ADD_TO_CART,
  REMOVE_PRODUCT_FROM_CART,
  FILTER_PRODUCTS,
} from "./action";

const intial_state = {
  allProducts: [],
  cartProducts: [],
};

const reducer = (state = intial_state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cartProducts: action.payload,
      };
    case REMOVE_PRODUCT_FROM_CART:
      return {
        ...state,
        cartProducts: action.payload,
      };
      case FILTER_PRODUCTS:
        return{
          ...state,
          allProducts: action.payload
        }
    default:
      return state;
  }
};

export default reducer;
