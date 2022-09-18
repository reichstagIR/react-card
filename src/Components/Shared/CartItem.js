import React from 'react';
//Library
import {Button} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
//Helper
import {getQuantity, shotern} from "../../Helper/functions";
//Redux
import {useSelector , useDispatch} from "react-redux";
import {removeItem , increase , decrease} from "../../Redux/Card/CardAction";

const CartItem = ({data}) => {

    const cardState = useSelector(state => state.cardState);
    const dispatch = useDispatch();


    return (
        <div className="bg-white border rounded d-flex align-items-center justify-content-between px-4 py-3 mb-4 shadow">
            <div style={{width : "100px" , height : "100%"}}>
                <img src={data.image} alt="product-img" style={{width : "100%" , height : "100%"}}/>
            </div>
            <div>
                <span className="h4 d-block text-primary mb-2">{shotern(data.title)} . . .</span>
                <span className="text-success h5">{(data.quantity * data.price).toFixed(2)}$</span>
            </div>
            <div>
                <Button>{data.quantity}</Button>
            </div>
            <div>
                {getQuantity(cardState , data.id) >= 1 && <Button variant="primary" className="mx-1" onClick={() => dispatch(increase(data))}>+</Button>}
                {getQuantity(cardState , data.id) === 1 ? <Button variant="primary" className="mx-1" onClick={() => dispatch(removeItem(data))}><FontAwesomeIcon icon={faTrash} color="white"/></Button> : <Button variant="primary" className="mx-1" onClick={() => dispatch(decrease(data))}>-</Button>}
            </div>
        </div>
    );
};

export default CartItem;
