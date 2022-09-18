import React from 'react';
//Library
import {Card, Button} from "react-bootstrap";
import {Link} from "react-router-dom";
//Helpers
import {shotern , isInCard , getQuantity} from "../../Helper/functions";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
//Redux
import {useSelector , useDispatch} from "react-redux";
import {addItem , removeItem , increase , decrease} from "../../Redux/Card/CardAction";

const Product = ({data}) => {

    const cardState = useSelector(state => state.cardState);
    const dispatch = useDispatch();


    return (
        <Card className="shadow">
            <Card.Img variant="top" src={data.image} style={{width : "100%" , height : "250px"}}/>
            <Card.Body>
                <Card.Title>{shotern(data.title)}</Card.Title>
                <Card.Text>{data.price}$</Card.Text>
                <div className="d-flex justify-content-between">
                    <Link to={`/products/${data.id}`}>Details</Link>
                    <div>
                        {isInCard(cardState , data.id) ? <Button variant="primary" className="mx-1" onClick={() => dispatch(increase(data))}>+</Button> : <Button variant="primary" className="mx-1" onClick={() => dispatch(addItem(data))}>Add to Cart</Button>}
                        {getQuantity(cardState , data.id) >= 1 && <Button variant="primary" className="mx-1">{getQuantity(cardState , data.id)}</Button>}
                        {getQuantity(cardState , data.id) === 1 && <Button variant="primary" className="mx-1" onClick={() => dispatch(removeItem(data))}><FontAwesomeIcon icon={faTrash} color="white"/></Button>}
                        {getQuantity(cardState , data.id) > 1 && <Button variant="primary" className="mx-1" onClick={() => dispatch(decrease(data))}>-</Button>}
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
};

export default Product;
