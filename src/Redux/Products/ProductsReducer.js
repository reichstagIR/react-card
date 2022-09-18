const initialState = {
    isLoading : false,
    products : [],
    error : "",
}

const ProductsReducer = (state = initialState , action) => {
    switch (action.type) {
        case "FETCH_PRODUCTS_REQUEST":
            return {
                ...state,
                isLoading: true,
            };
        case "FETCH_PRODUCTS_SUCCESS":
            return {
                isLoading: false,
                products: action.payload,
                error: "",
            };
        case "FETCH_PRODUCTS_FAILURE":
            return {
                isLoading: false,
                products: [],
                error: action.error,
            };
        default:
            return state;
    }
}

export default ProductsReducer;