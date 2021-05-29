import {
  ADD_PRODUCT,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_ERROR,
  DOWNLOAD_PRODUCTS,
  DOWNLOAD_PRODUCTS_SUCCESS,
  DOWNLOAD_PRODUCTS_ERROR,
} from "../types";
import axiosClient from "../config/axios";
import Swal from "sweetalert2";

export function createNewProductAction(product) {
  return async (dispatch) => {
    // send the data
    // update the state
    dispatch(addProduct());
    try {
      await axiosClient.post("/products", product);
      dispatch(addProductSucess(product));
      Swal.fire("Success", "Your product was successfully added", "success");
    } catch (error) {
      console.error(error)
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

// function to download the products from db
export function getProductAction() {
  return async (dispatch) => {
    dispatch(getProducts());
    try {
      const response = await axiosClient.get('/products');
      dispatch(getProductsSuccess(response.data));
    } catch (error) {
      console.error(error)
      dispatch(getProductsError());
    }
  };
}

const getProducts = () => ({
  type: DOWNLOAD_PRODUCTS,
  payload: true,
});

const getProductsSuccess = (products) => ({
  type: DOWNLOAD_PRODUCTS_SUCCESS,
  payload: products,
}) 

const getProductsError = () => ({
  type: DOWNLOAD_PRODUCTS_ERROR,
  payload: true
})