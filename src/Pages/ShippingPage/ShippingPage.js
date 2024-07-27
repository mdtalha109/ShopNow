
import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { toast, ToastContainer } from "react-toastify"
import { saveShippingAddress } from '../../actions/cartActions'
import { createOrder } from '../../actions/orderActions.js'


import Modal from '../../components/Modal/Modal.js'
import Input from '../../components/ui/Input'

import styles from './index.module.css'
//import './ShippingPage.css'

const ShippingScreen = ({ history }) => {

    const cart = useSelector(state => state.cart)
    const { shippingAddress } = cart
    const [address, setAddress] = useState(shippingAddress.address)
    const [city, setCity] = useState(shippingAddress.city)
    const [postalCode, setPostalCode] = useState(shippingAddress.postalCode)
    const [country, setCountry] = useState(shippingAddress.country)
    const [orderDispatched, setOrderDistpatched] = useState(false)
    const dispatch = useDispatch()


    const [isOpen, setisOpen] = useState(false)

    const navigate = useNavigate()

    cart.itemsPrice = cart.cartItems.reduce(
        (acc, item) => acc + item.price * item.qty, 0
    )

    cart.shippingPrice = cart.itemsPrice > 600 ? 0 : 100

    cart.taxPrice = Number((0.15 * cart.itemsPrice).toFixed(2))

    cart.totalPrice = (Number(cart.itemsPrice) + Number(cart.shippingPrice) + Number(cart.taxPrice)).toFixed(2)



    const closeModal = () => {
        setisOpen(false)
    }

    const orderCreate = useSelector((state) => state.orderCreate);

    let intervalId = null

    const placeOrderHandler = async () => {
        let order = await dispatch(createOrder({
            orderItems: cart.cartItems,
            shippingAddress: { address, city, postalCode, country },
            itemsPrice: cart.itemsPrice,
            shippingPrice: cart.shippingPrice,
            taxPrice: cart.taxPrice,
            totalPrice: cart.cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2),
        }))

        console.log("order: ", order)

        if(order){
            setOrderDistpatched(true)
            navigate(`/order/${order._id}`)
        }
    }

    const submitHandler = () => {
        dispatch(saveShippingAddress({ address, city, postalCode, country }))
        placeOrderHandler()
    }

    const userLogin = useSelector(state => state.userLogin)

    const { loading, error, userInfo } = userLogin

    useEffect(() => {
        if (!userInfo)
            navigate('/login?redirect=/shipping', {replace: true})
    }, [orderCreate])

    return (
        <>
            <div className={styles.shippingForm_container}>

                <div className={styles.shippingForm}>
                    <h1 className={styles.form_header_text}>Shipping Address</h1>

                    <Input
                        label='Address'
                        placeholder='Enter your Address'
                        value={address}
                        onChange={(event) => setAddress(event.target.value)}
                    />

                    <Input
                        label='City'
                        placeholder='Enter your City'
                        value={city}
                        onChange={(event) => setCity(event.target.value)}
                    />

                    <Input
                        label='Postal Code'
                        value={postalCode}
                        placeholder='Enter your postal code'
                        onChange={(event) => setPostalCode(event.target.value)}
                    />

                    <Input
                        label='Country'
                        value={country}
                        placeholder='Enter your country'
                        onChange={(event) => setCountry(event.target.value)}
                    />

                    <button className={styles.submit_button} type='submit' onClick={submitHandler}> Continue </button>


                </div>


            </div>
        </>
    )
}

export default ShippingScreen
