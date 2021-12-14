import React from 'react';
import { Link } from 'react-router-dom';
// import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';
import '../index.css';

const Header = () => {
    return (
        <nav>
            <div className='logo'>
                <a href='/'>ShopNow</a>
            </div>

            <form action="#">
                <input type="text" id="input-search" name="search" placeholder="Search..."/>
            </form>

            <div className='navlink'>
                <a href='/'> <i className='fas fa-shopping-cart'></i> Cart</a>
                <a href='/'><i className='fas fa-user-alt'></i> Login</a>
            </div>
            
        </nav>
    );
}

export default Header;
