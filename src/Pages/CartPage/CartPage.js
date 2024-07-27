import react, { useEffect, useState } from 'react'
import { Link, useParams, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Row, Col, ListGroup, Image, Form, Button, ListGroupItem } from 'react-bootstrap'
import { addToCart, removeFromCart } from '../../actions/cartActions'
import { toast, ToastContainer } from "react-toastify";
import Card from '../../components/Card/Card'

import styles from './index.module.css'
import EmptyCart from '../../components/EmptyCart/EmptyCart'
import CartSummary from '../../components/CartSummary'
import CartProduct from '../../components/CartProduct'


const CartScreen = ({ match }) => {
    const productId = useParams().id;
    let [qty, setQty] = useState(1);
    qty = useLocation().search;
    console.log(qty)

    if (qty) {
        qty = Number(qty.split('=')[1]);
        console.log(qty)

    }
    else qty = 1;

    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart)
    const { cartItems } = cart

    useEffect(() => {
        if (productId) {
            dispatch(addToCart(productId, qty))
        }
    }, [dispatch, productId, qty])

    const removeCartHandler = (id) => {
        dispatch(removeFromCart(id))
    }

    if (!cartItems.length) return <EmptyCart />


    return (
        <Container >

            <div className={styles.cart_page_container}>

                <Col md={8} sm={12}>
                    <Card>
                        <ListGroup variant='flush' >
                            <ListGroup.Item>
                                Cart ({cartItems.length})
                            </ListGroup.Item>
                            <div className={styles.cart_product_list}>
                                {cartItems.map(item => (
                                    <CartProduct item={item} removeCartHandler={removeCartHandler}/>
                                ))}
                            </div>

                        </ListGroup>
                    </Card>
                </Col>

                <CartSummary cartItems={cartItems}/>
             

            </div>
            <ToastContainer />

        </Container>
    )

}

export default CartScreen