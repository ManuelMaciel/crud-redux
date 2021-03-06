import {
  ADD_PRODUCT,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_ERROR,
  DOWNLOAD_PRODUCTS,
  DOWNLOAD_PRODUCTS_SUCCESS,
  DOWNLOAD_PRODUCTS_ERROR,
} from "../types";
// each reducer has its own state
const initialState = {
  products: [],
  error: null,
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case DOWNLOAD_PRODUCTS:
    case ADD_PRODUCT:
      return {
        ...state,
        loading: action.payload
      }
    
    case ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        products: [ ...state.products, action.payload ],
      }
    
    case DOWNLOAD_PRODUCTS_ERROR:
    case ADD_PRODUCT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      }

    case DOWNLOAD_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        products: action.payload
      }

    default:
      return state;
  }
}
