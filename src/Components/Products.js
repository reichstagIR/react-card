import React , {useContext} from 'react';
//Components
import Product from "./Shared/Product";
//Library
import {Container, Row , Col} from "react-bootstrap";
//Context
import {ProductsContext} from "../Context/ProductContectProvider";

const Products = () => {

    const Products = useContext(ProductsContext);

    return (
        <Container>
            <Row>
                {Products.map(item => <Col lg={3} md={6} sm={12} className="mt-3" key={item.id}><Product data={item}/></Col>)}
            </Row>
        </Container>
    );
};

export default Products;
