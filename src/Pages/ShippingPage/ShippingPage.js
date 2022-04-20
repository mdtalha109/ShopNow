
import React, {useState, useEffect} from 'react'
import {Link, useLocation, useNavigate} from 'react-router-dom'
import {Form, Button, Row, Col} from 'react-bootstrap'
import CheckoutSteps from '../../components/checkoutSteps/checkoutSteps.js'
import {useDispatch, useSelector} from 'react-redux'
import { toast, ToastContainer } from "react-toastify"
import { saveShippingAddress } from '../../actions/cartActions'
import { createOrder } from '../../actions/orderActions.js'


import './ShippingPage.css'
import Card from '../../components/Card/Card.js'
import Modal from '../../components/Modal/Modal.js'

const ShippingScreen = ({history}) => {

    const cart = useSelector(state => state.cart)
    const {shippingAddress} = cart
    const [address, setAddress] = useState(shippingAddress.address)
    const [city, setCity] = useState(shippingAddress.city)
    const [postalCode, setPostalCode] = useState(shippingAddress.postalCode)
    const [country, setCountry] = useState(shippingAddress.country)
    const dispatch = useDispatch()


    const [isOpen, setisOpen] = useState(false)

    const navigate = useNavigate()
    const location = useLocation()

    //calculating data

    cart.itemsPrice = cart.cartItems.reduce(
        (acc, item) => acc + item.price * item.qty, 0
    )

    cart.shippingPrice = cart.itemsPrice > 600 ? 0 : 100

    cart.taxPrice = Number((0.15 * cart.itemsPrice).toFixed(2))

    cart.totalPrice = (Number(cart.itemsPrice) + Number(cart.shippingPrice)+ Number(cart.taxPrice)).toFixed(2)
     

    
    const closeModal = () => {
        setisOpen(false)
      }
    

    const submitHandler = () => {
        dispatch(saveShippingAddress({address, city, postalCode, country}))
    
        setisOpen(true)
    }

    const userLogin = useSelector(state => state.userLogin)

    const {loading, error, userInfo} = userLogin

    useEffect(()=> {
        if(!userInfo)
            navigate('/login?redirect=/shipping')
    })

    const placeOrderHandler = () => {
        dispatch(createOrder({
            orderItems: cart.cartItems,
            shippingAddress: cart.shippingAddress,
            itemsPrice: cart.itemsPrice,
            shippingPrice: cart.shippingPrice,
            taxPrice: cart.taxPrice,
            totalPrice: cart.cartItems.reduce((acc, item) => acc + item.qty *item.price, 0).toFixed(2),

        }))
        console.log(cart.cartItems)
        console.log(cart.shippingAddress)
        console.log(cart.itemsPrice)
        console.log(cart.shippingPrice)
        console.log(cart.taxPrice)
        console.log(cart.totalPrice)



    }

    return (
       <>
           
            
          
            <div className='LoginForm-container'>
            <Card>
                <div className='LoginForm'>
                    <h1>Shipping</h1>

                    <div className='input-container'>
                        <label>Address</label><br/>
                        <input value={address} 
                            placeholder='Enter your Address'
                            onChange={(event) => setAddress(event.target.value)}
                            required
                        />
                    </div> 


                    <div className='input-container'>
                        <label>City</label><br/>
                        <input value={city} 
                            placeholder='Enter your City'
                            onChange={(event) => setCity(event.target.value)}
                            required
                        />
                    </div>

                    <div className='input-container'>
                        <label>Postal Code</label><br/>
                        <input value={postalCode} 
                            placeholder='Enter your postal code'
                            onChange={(event) => setPostalCode(event.target.value)}
                            required
                        />
                    </div>

                    <div className='input-container'>
                        <label> Country </label><br/>
                        <input value={country} 
                            placeholder='Enter your country'
                            onChange={(event) => setCountry(event.target.value)}
                            required
                        />
                    </div>
 

                    <div className='input-container'>
                        <button type='submit' onClick={submitHandler}> Continue </button>
                    </div>
                    {/* <div className='create-acc-container'><span>Already have an account? <Link to='/login'>Login here</Link></span></div> */}
                </div>
                <ToastContainer/>
               </Card>
            </div>


            <Modal open={isOpen} close={closeModal}>
            <div className='LoginForm-container'>
                <div className='LoginForm'>
                    <h1>Payment Method</h1>

                    <div className='input-container'>
                       
                    </div> 
                    <div className='input-container'>
                        <button type='submit' onClick={placeOrderHandler}> Continue </button>
                    </div>
                </div>
                <ToastContainer/>
               
            </div>
            </Modal>
            
        
       </>
    )
}

export default ShippingScreen
