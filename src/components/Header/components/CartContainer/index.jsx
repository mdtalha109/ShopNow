import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const CartContainer = () => {

    const cart = useSelector(state => state.cart)
    const { cartItems } = cart

    return (
        <Link to='/cart'> <i className='fas fa-shopping-cart'></i> <span>Cart {cartItems.length}</span></Link>
    )
}

export default CartContainer