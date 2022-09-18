import React , {useEffect} from 'react';
//Components
import Product from "./Shared/Product";
//Library
import {Container, Row , Col , Spinner} from "react-bootstrap";
//Redux
import {useSelector , useDispatch} from "react-redux";
import fetchProducts from "../Redux/Products/ProductsAction";

const Products = () => {

    const dispatch = useDispatch();
    const productState = useSelector(state => state.productsState);

    useEffect(() => {
        !productState.products.length && dispatch(fetchProducts());
    }, []);


    return (
        <Container className="pb-5">
            <Row>
                {productState.isLoading ?
                    <div style={{height : "calc(100vh - 180px)" , display : "flex" , alignItems : "center" , justifyContent : "center"}}><Spinner animation="border"/></div>
                    :
                    productState.products.map(item =>
                        <Col lg={3} md={6} sm={12} className="mt-3" key={item.id}>
                            <Product data={item}/>
                        </Col>
                    )}
                {productState.error}
            </Row>
        </Container>
    );
};

export default Products;
