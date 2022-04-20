import React from 'react'
import {Nav, linkContainer, NavLink} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './checkoutSteps.css'
const checkoutSteps = ({step1, step2, step3, step4}) => {
    return ( 
        <Nav className='steps-container'>
                <div className='stepItem'>
                {step1 ? (
                    <Link to='/login'> SignIn</Link>
                ): <Nav.Link disabled>
                    Sign In
                    </Nav.Link>}
                </div>
                
            

           <div className='stepItem'>
           {step2 ? (
                    <Link to='/shipping'>
                        
                            Shipping
                        
                    </Link>
                ): <Nav.Link disabled>
                    Shipping
                    </Nav.Link>}
            
           </div>
               

            <div className='stepItem'>
            {step3 ? (
                    <Link to='/payment'>
                      
                            Payment
                       
                    </Link>
                ): <Link to='/payment' className='disabled-link'>
                    Payment
                    </Link>}
            </div>

            <div className='stepItem'>
            {step4 ? (
                    <Link to='/placeorder'>
                       
                            Place Order
                      
                    </Link>
                ): <Link to='/placeorder' className='disabled-link'>
                    PlaceOrder
                    </Link>}
            </div>
        </Nav>
    )
}

export default checkoutSteps
