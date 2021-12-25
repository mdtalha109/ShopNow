import react, {useEffect} from 'react'
import { Link, useParams, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {Row, Col, ListGroup, Image, Form, Button, Card} from 'react-bootstrap'
import { addToCart, removeFromCart } from '../actions/cartActions'


const CartScreen = ({match}) => {
    const productId = useParams().id;
    let qty = useLocation().search;
    console.log(qty)

    if(qty){
        qty=Number(qty.split('=')[1]);
        console.log(qty)
        
    }
    else qty=1;

    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart)
    const {cartItems} = cart

    useEffect(()=>{
        if(productId){
            dispatch(addToCart(productId, qty))
        }
    }, [dispatch, productId, qty])

    const removeCartHandler = (id) => {
        dispatch(removeFromCart(id))
    }

    return (
        <>
        <Row>
          <Col md={8}>
            <h1>Shopping Cart</h1>
            {cartItems.length === 0 ? <p>your cart is empty</p> : (
                <ListGroup variant='flush'>
                    {cartItems.map(item => (
                        <ListGroup.Item key={item.product}>
                             <Row>
                                 <Col md={2}>
                                     <Image src={item.image} alt={item.name} fluid></Image>
                                 </Col>

                                 <Col md={3}>
                                     {item.name}
                                 </Col>

                                 <Col md={2}>
                                    {item.price}
                                 </Col>

                                 <Col>
                                         <Form.Control as='select' value={item.qty} onChange={(e) => dispatch(addToCart(item.product, Number(e.target.value))) }>
                                               { [...Array(item.countInStock).keys()].map(x => (
                                                    <option key={x+1} value={x+1}>
                                                        {x+1}
                                                    </option>
                                                ))
                                               }
                                            </Form.Control>
                                 </Col>
                                 

                                 <Col md={2}>
                                        <Button type='button' onClick={()=> removeCartHandler(item.product)}>
                                            <i className='fas fa-trash'> </i>
                                        </Button>
                                 </Col>
                                 
                             </Row>
                        </ListGroup.Item>
                    ))}
                    
                </ListGroup>
            )}
          </Col>
        
            <Col md={4}>
                <ListGroup>
                    <ListGroup.Item>
                        <h2>Total ({cartItems.reduce((acc, item)=> acc+item.qty, 0)}) Items</h2>
                        ${cartItems.reduce((acc, item) => acc + item.qty *item.price, 0).toFixed(2)}
                    </ListGroup.Item>
                </ListGroup>
            </Col>

        </Row>

        </>
    )
    
}

export default CartScreen