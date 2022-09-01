import React , {useContext} from 'react';
//Library
import {Container , Row , Col , Button} from "react-bootstrap";
import {Link, useParams} from "react-router-dom";
//Context
import {ProductsContext} from "../Context/ProductContectProvider";

const ProductDetail = () => {

    const params = useParams();
    const products = useContext(ProductsContext);
    const product = products[params.id - 1];

    return (
        <div className="h-100">
            <Container>
                <div className="rounded border p-3 shadow">
                    <Row className="d-flex align-items-center justify-content-center">
                        <Col md={6} className="py-3 ps-4"><img src={product.image} alt="product-img" style={{width : "400px" , height : "400px"}}/></Col>
                        <Col md={6}>
                            <div className="border rounded p-4 my-3">
                                <h5>{product.title}</h5>
                                <p>{product.description}</p>
                                <span className="h5 text-warning">Category : </span>
                                <span className="h6">{product.category}</span>
                                <div className="d-flex align-items-center justify-content-between mt-3">
                                    <Button variant="success">{product.price}$</Button>
                                    <Button variant="primary"><Link to="/products" className="text-decoration-none text-white">Back to shop</Link></Button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default ProductDetail;
