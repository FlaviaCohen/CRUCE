import { GET_PRODUCTS, GET_PRODUCT } from "../constants";

const initialState = {
  products: [],
  product: {
    id: 0,
    image: "",
    name: "",
    price: "",
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return { ...state, products: action.products };
    case GET_PRODUCT:
      return { ...state, product: action.product };
    default:
      return state;
  }
};
