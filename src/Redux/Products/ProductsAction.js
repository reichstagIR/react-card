import axios from "axios";


const fetchProductsRequest = () => {
  return {
      type : "FETCH_PRODUCTS_REQUEST",
  }
}

const fetchProductsSuccess = (products) => {
    return {
        type : "FETCH_PRODUCTS_SUCCESS",
        payload : products,
    }
}

const fetchProductsFailure = (error) => {
    return {
        type : "FETCH_PRODUCTS_FAILURE",
        error,
    }
}

const fetchProducts = () => {
    return (dispatch) => {
        dispatch(fetchProductsRequest());
        axios.get("https://fakestoreapi.com/Products")
            .then(response => dispatch(fetchProductsSuccess(response.data)))
            .catch(error => dispatch(fetchProductsFailure(error.errorMessage)));
    }
}

export default fetchProducts;


