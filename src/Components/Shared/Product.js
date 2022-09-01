import React , {useContext} from 'react';
//Library
import {Card, Button} from "react-bootstrap";
import {Link} from "react-router-dom";
//Helpers
import {shotern , isInCard , getQuantity} from "../../Helper/functions";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
//Context
import {CardContext} from "../../Context/CardContextProvider";

const Product = ({data}) => {
    const {state , dispatch} = useContext(CardContext);
    return (
        <Card className="shadow">
            <Card.Img variant="top" src={data.image} style={{width : "100%" , height : "250px"}}/>
            <Card.Body>
                <Card.Title>{shotern(data.title)}</Card.Title>
                <Card.Text>{data.price}$</Card.Text>
                <div className="d-flex justify-content-between">
                    <Link to={`/products/${data.id}`}>Details</Link>
                    <div>
                        {isInCard(state , data.id) ? <Button variant="primary" className="mx-1" onClick={() => dispatch({type : "INCREASE" , payload : data})}>+</Button> : <Button variant="primary" className="mx-1" onClick={() => dispatch({type : "ADD_ITEM" , payload : data})}>Add to Cart</Button>}
                        {getQuantity(state , data.id) >= 1 && <Button variant="primary" className="mx-1">{getQuantity(state , data.id)}</Button>}
                        {getQuantity(state , data.id) === 1 && <Button variant="primary" className="mx-1" onClick={() => dispatch({type : "REMOVE_ITEM" , payload : data})}><FontAwesomeIcon icon={faTrash} color="white"/></Button>}
                        {getQuantity(state , data.id) > 1 && <Button variant="primary" className="mx-1" onClick={() => dispatch({type : "DECREASE" , payload : data})}>-</Button>}
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
};

export default Product;
