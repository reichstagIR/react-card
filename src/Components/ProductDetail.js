import React  from 'react';
//Library
import {Container , Row , Col , Button} from "react-bootstrap";
import {Link, useParams} from "react-router-dom";
//Context
import {useSelector} from "react-redux";

const ProductDetail = () => {

    const params = useParams();
    const products = useSelector(state => state.productsState.products);
    const {category, description, image, price, title} = products[params.id - 1];

    return (
        <div className="h-100">
            <Container>
                <div className="rounded border p-3 shadow">
                    <Row className="d-flex align-items-center justify-content-center">
                        <Col md={6} className="py-3 ps-4"><img src={image} alt="product-img" style={{width : "400px" , height : "400px"}}/></Col>
                        <Col md={6}>
                            <div className="border rounded p-4 my-3">
                                <h5>{title}</h5>
                                <p>{description}</p>
                                <span className="h5 text-warning">Category : </span>
                                <span className="h6">{category}</span>
                                <div className="d-flex align-items-center justify-content-between mt-3">
                                    <Button variant="success">{price}$</Button>
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
