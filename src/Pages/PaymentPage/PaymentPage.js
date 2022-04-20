
import React, {useState} from 'react'
import {Link, useLocation, useNavigate} from 'react-router-dom'
import {Form, Button, Row, Col} from 'react-bootstrap'
import CheckoutSteps from '../../components/checkoutSteps/checkoutSteps.js'
import {useDispatch, useSelector} from 'react-redux'
import { toast, ToastContainer } from "react-toastify"
import { savePaymentMethods } from '../../actions/cartActions'
import Modal from '../../components/Modal/Modal.js'


import './PaymentPage.css'

const PaymentPage = ({history}) => {

    const navigate = useNavigate()

    const cart = useSelector(state => state.cart)
    const {shippingAddress} = cart



    if(!shippingAddress)
        navigate('/shipping')


    const [paymentMethod, setPaymentMethod] = useState('paypal')

    const dispatch = useDispatch()

    
    const location = useLocation()

    const submitHandler = () => {
        // dispatch(savePaymentMethod(paymentMethod))
        // navigate('/payment')
    }

    return (
       <>
            
            {/* <Modal>
            <div className='LoginForm-container'>
                <div className='LoginForm'>
                    <h1>Payment Method</h1>

                    <div className='input-container'>
                       
                    </div> 



                    <div className='input-container'>
                        <button type='submit' onClick={submitHandler}> Continue </button>
                    </div>
                </div>
                <ToastContainer/>
               
            </div>
            </Modal> */}
        
       </>
    )
}

export default PaymentPage
