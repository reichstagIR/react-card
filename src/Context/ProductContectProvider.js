import React, {useEffect , useState , createContext} from 'react';

//API
import {getProducts} from "../Services/api";

export const ProductsContext = createContext([]);

const ProductContentProvider = (props) => {

    const [products , setProducts] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setProducts(await getProducts());
        };
        fetchAPI();
    } , []);


    return (
        <ProductsContext.Provider value={products}>
            {props.children}
        </ProductsContext.Provider>
    );
};

export default ProductContentProvider;
