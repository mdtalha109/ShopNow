import React from 'react'
import {Nav, linkContainer, NavLink} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './checkoutSteps.css'
const checkoutSteps = ({step1, step2, step3, step4}) => {
    return ( 
        <Nav className='steps-container'>
            <Nav.Item>
                {step1 ? (
                    <Link to='/login'> SignIn</Link>
                ): <Nav.Link disabled>
                    Sign In
                    </Nav.Link>}
            </Nav.Item>

            <Nav.Item>
                {step2 ? (
                    <Link to='/shipping'>
                        
                            Shipping
                        
                    </Link>
                ): <Nav.Link disabled>
                    Shipping
                    </Nav.Link>}
            </Nav.Item>

            <Nav.Item>
                {step3 ? (
                    <Link to='/payment'>
                      
                            Payment
                       
                    </Link>
                ): <Nav.Link disabled>
                    Payment
                    </Nav.Link>}
            </Nav.Item>

            <Nav.Item>
                {step4 ? (
                    <Link to='/placeorder'>
                       
                            Place Order
                      
                    </Link>
                ): <Nav.Link disabled>
                    PlaceOrder
                    </Nav.Link>}
            </Nav.Item>
        </Nav>
    )
}

export default checkoutSteps
