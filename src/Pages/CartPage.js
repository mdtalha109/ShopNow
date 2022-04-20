import react, {useEffect, useState} from 'react'
import { Link, useParams, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {Container, Row, Col, ListGroup, Image, Form, Button, ListGroupItem} from 'react-bootstrap'
import { addToCart, removeFromCart } from '../actions/cartActions'
import { toast, ToastContainer } from "react-toastify";
import Card from '../components/Card/Card'


import './CartPage.css'


const CartScreen = ({match}) => {
    const productId = useParams().id;
    let [qty, setQty] = useState(1);
     qty = useLocation().search;
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
   
    const increment = () => {
        setQty(qty+1)
    }
    const decrement = (e) => {
        
        
    }

    return (
        <Container fluid> 
        <Row>
            
               
          {/* <Col md={8} sm={12} > */}
            {cartItems.length === 0 ? 
            <div style={{display: 'flex', flexDirection:'column',justifyContent:"center",alignItems:"center", height:"80vh"}}>
                    <img 
                    src="https://rukminim2.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90"
                    style={{
                        width:'35%'
                    }}
                    />
                     <h4>Opps! Your cart is empty</h4>
            
            </div> : (
                <Col md={8} sm={12}>
                <Card>
                <ListGroup variant='flush' >
                    <ListGroup.Item>
                       Cart ({cartItems.length})
                    </ListGroup.Item>
                    <div className='cart-list'>
                        {cartItems.map(item => (
                            <ListGroup.Item key={item.product} className='cart-item'>
                                <Row className='abc'>
                                    <Col md={4}>
                                        <Image src={item.image} alt={item.name} fluid className='cart-item-img' style={{maxHeight:"120px", aspectRatio: "1:2"}}></Image>
                                    </Col>
                                    <Col>
                                        <div className='cart-item-des'>
                                            <Row><p className='product-info' style={{ textAlign:"left", width: '80%'}}><Link to={`/product/${item.product}`}><p>{item.name}</p></Link></p></Row>
                                            <Row><p className='product-info ' style={{ textAlign:"left"}}>{item.price}</p></Row>
                                            <div className='qty-rmv'>
                                                
                                                    <div className='qty-counter-container-1'>
                                                        <span className='qty-counter-1'> <button onClick={function (){ if(item.qty <= 4){dispatch(addToCart(item.product, Number(item.qty+1)))} else toast.error('Only 5 units allowed!', {position: 'bottom-center'}) }}  >+</button></span>
                                                        <span className='qty-counter-1'>{item.qty}</span>
                                                        <span className='qty-counter-1' ><button onClick={ function (){ if(item.qty>1) dispatch(addToCart(item.product, Number(item.qty-1)))} } >-</button></span>
                                                    </div>
                                                        
                                                    <div>
                                                        <Button type='button' className='remove-btn' onClick={()=> removeCartHandler(item.product)} >
                                                        Remove
                                                        </Button>
                                                    </div>
                                            
                                            </div>
                                        
                                        </div>
                                    
                                    </Col>
                                    
                                </Row>
                            </ListGroup.Item>
                        ))}
                    </div>
                    
                </ListGroup>
                </Card>
                </Col>
            )}
          
            {
                cartItems.length? 
                <Col md={4} >
                <Card>
                <ListGroup className="total-price-detail-container">
                    <ListGroup.Item>
                    
                        Price Details
                      
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <div className='cart-summary-item'>
                            <div>
                                Total prce:
                            </div>
                            <div>
                            ${cartItems.reduce((acc, item) => acc + item.qty *item.price, 0).toFixed(2)}
                            </div>
                        </div>


                        <div className='cart-summary-item'>
                            <div>
                                Dilevery Charge
                            </div>
                            <div>
                                100Rs
                            </div>
                        </div>
                        

                    </ListGroup.Item>
                    <button style={{backgroundColor:"#0070f3", color: "white", padding: "5px 10px", border:"none"}}><Link to= '/shipping'>PLACE ORDER</Link></button>
                </ListGroup>
                </Card>
            </Col>: ''
            }
           

        </Row>
        <ToastContainer/>

        </Container>
    )
    
}

export default CartScreen