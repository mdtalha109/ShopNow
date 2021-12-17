import React from 'react';
import { Link } from 'react-router-dom';
// import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';
import '../index.css';

const Header = () => {
    return (
        <nav>
            <div className='logo'>
                <Link to='/'>ShopNow</Link>
            </div>

            <form action="#">
                <input type="text" id="input-search" name="search" placeholder="Search..."/>
            </form>

            <div className='navlink'>
                <Link to='/'> <i className='fas fa-shopping-cart'></i> Cart</Link>
                <Link to='/'><i className='fas fa-user-alt'></i> Login</Link>
            </div>
            
        </nav>
    );
}

export default Header;
