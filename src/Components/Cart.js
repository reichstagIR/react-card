import React , {useContext} from 'react';
//Library
import {Container , Row , Col , Button} from "react-bootstrap";
//Components
import CartItem from "./Shared/CartItem";
//Redux
import {useSelector , useDispatch} from "react-redux";
import {clear , checkout} from "../Redux/Card/CardAction";

const Cart = () => {


    const cardState = useSelector(state => state.cardState);
    const dispatch = useDispatch();

    return (
        <div>
            <Container>
                <Row>

                    <Col md={9}>
                        {cardState.selectedItems.map(item => <CartItem key={item.id} data={item}/>)}
                    </Col>
                    <Col md={3}>
                        <div className="border rounded bg-white shadow p-3">
                            <span className="text-primary fw-bold d-block">Total Count: <span className="text-success">{cardState.itemCounter}</span></span>
                            <span className="text-primary fw-bold mt-2 d-block">Total Payments: <span className="text-success">{cardState.total}$</span></span>
                            <div className="mt-5 d-flex align-items-center justify-content-between">
                                <Button variant="link" className="text-decoration-none text-success fw-bold" onClick={() => dispatch(clear())}>Clear</Button>
                                {cardState.checkOut ? <span className="fw-bold text-success">Checkout successfully</span> : <Button variant="success" onClick={() => dispatch(checkout())} disabled={!cardState.selectedItems.length && true}>Checkout</Button>}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Cart;
