import { ADD_PRODUCT, ADD_PRODUCT_SUCCESS, ADD_PRODUCT_ERROR } from "../types";
import axiosClient from "../config/axios";
import Swal from "sweetalert2";

export function createNewProductAction(product) {
  return async (dispatch) => {
    // send the data
    // update the state
    dispatch(addProduct());
    try {
      await axiosClient.post("/product", product);
      dispatch(addProductSucess(product));
      Swal.fire("Success", "Your product was successfully added", "success");
    } catch (error) {
      console.log(error);
      // if exist the error update the state
      dispatch(addProductError(true));
      Swal.fire({
        icon: "error",
        title: "There was an error.",
        text: "There was an error, try again.",
      });
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
