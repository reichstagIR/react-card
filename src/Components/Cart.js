import React , {useContext} from 'react';
//Library
import {Container , Row , Col , Button} from "react-bootstrap";
//Components
import CartItem from "./Shared/CartItem";
//Context
import {CardContext} from "../Context/CardContextProvider";

const Cart = () => {

    const {state , dispatch} = useContext(CardContext);

    return (
        <div>
            <Container>
                <Row>

                    <Col md={9}>
                        {state.selectedItems.map(item => <CartItem key={item.id} data={item}/>)}
                    </Col>
                    <Col md={3}>
                        <div className="border rounded bg-white shadow p-3">
                            <span className="text-primary fw-bold d-block">Total Count: <span className="text-success">{state.itemCounter}</span></span>
                            <span className="text-primary fw-bold mt-2 d-block">Total Payments: <span className="text-success">{state.total}$</span></span>
                            <div className="mt-5 d-flex align-items-center justify-content-between">
                                <Button variant="link" className="text-decoration-none text-success fw-bold" onClick={() => dispatch({type : "CLEAR" , payload : state})}>Clear</Button>
                                {state.checkOut ? <span className="fw-bold text-success">Checkout successfully</span> : <Button variant="success" onClick={() => dispatch({type : "CHECKOUT" , payload : state})} disabled={!state.selectedItems.length && true}>Checkout</Button>}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Cart;
