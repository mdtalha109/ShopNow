import React from 'react'
import { Button, Col, Image, ListGroup, Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addToCart } from '../../actions/cartActions'
import { toast } from 'react-toastify'
import styles from './index.module.css'

const CartProduct = ({ item, removeCartHandler }) => {

    const dispatch = useDispatch()

    const handleIncrement = () => {
        if (item.qty < 5) {
            dispatch(addToCart(item.product, item.qty + 1));
        } else {
            toast.error('Only 5 units allowed!', { position: 'bottom-center' });
        }
    };

    const handleDecrement = () => {
        if (item.qty > 1) {
            dispatch(addToCart(item.product, item.qty - 1));
        }
    };

    return (
        <ListGroup.Item key={item.product} className={styles.cart_item}>
            <Row>
                <Col>
                    <Image src={item.image} alt={item.name} fluid style={{ maxHeight: "120px", aspectRatio: "1:2" }}></Image>
                </Col>
                <Col>
                    <div >
                        <Row><p  style={{ textAlign: "left", width: '80%' }}><Link to={`/product/${item.product}`}><p>{item.name}</p></Link></p></Row>
                        <Row><p  style={{ textAlign: "left" }}>{item.price}</p></Row>
                        <div className={styles.qty_rmv}>

                            <div className={styles.qty_counter_container}>
                                <span className={styles.qty_counter}> <button className={styles.qty_counter_button} onClick={handleIncrement}  >+</button></span>
                                <span className={styles.qty_counter}>{item.qty}</span>
                                <span className={styles.qty_counter} ><button className={styles.qty_counter_button} onClick={handleDecrement} >-</button></span>
                            </div>

                            <div>
                                <Button type='button' className={styles.remove_btn} onClick={() => removeCartHandler(item.product)} >
                                    Remove
                                </Button>
                            </div>

                        </div>
                    </div>
                </Col>

            </Row>
        </ListGroup.Item>
    )
}

export default CartProduct