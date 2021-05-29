import { ADD_PRODUCT, ADD_PRODUCT_SUCCESS, ADD_PRODUCT_ERROR } from "../types";
import axiosClient from "../config/axios";

export function createNewProductAction(product) {
  return async (dispatch) => {
    // send the data
    // update the state
    dispatch(addProduct());
    try {
      await axiosClient.post("/products", product);
      dispatch(addProductSucess(product));
    } catch (error) {
      console.log(error)
      // if exist the error update the state
      dispatch(addProductError(true));
    }
  };
}

const addProduct = () => ({
  type: ADD_PRODUCT,
  payload: true,
});

const addProductSucess = (product) => ({
  type: ADD_PRODUCT_SUCCESS,
  payload: product,
});

const addProductError = (state) => ({
  type: ADD_PRODUCT_ERROR,
  payload: state,
});
