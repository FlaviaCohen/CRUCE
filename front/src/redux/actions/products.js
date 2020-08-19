import { GET_PRODUCTS, GET_PRODUCT } from "../constants";
import axios from "axios";

export const getProducts = () => (dispatch) => {
  axios
    .get("/api/products")
    .then((products) =>
      dispatch({ type: GET_PRODUCTS, products: products.data })
    );
};

export const getProduct = (id) => (dispatch) => {
  return axios
    .get(`/api/products/${id}`)
    .then((product) => dispatch({ type: GET_PRODUCT, product: product.data }));
};

export const cleanProduct = () => (dispatch) => {
  return dispatch({
    type: GET_PRODUCT,
    product: { id: 0, image: "", name: "", price: "" },
  });
};

export const addProduct = (product) => () => {
  axios.post("/api/products", product);
};

export const editProduct = (id, product) => (dispatch) => {
  return axios.patch(`/api/products/${id}`, product);
};

export const deleteProduct = (id) => (dispatch) => {
  return axios
    .delete(`/api/products/${id}`)
    .then(() => dispatch(getProducts()));
};
