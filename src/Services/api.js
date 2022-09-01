import axios from "axios";

axios.defaults.baseURL = "https://fakestoreapi.com";

const getProducts = async () => {
    const response = await axios.get("/products");
    return response.data;
};

export {getProducts};
