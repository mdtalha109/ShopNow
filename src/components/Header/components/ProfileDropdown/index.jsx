import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

import {Dropdown} from 'react-bootstrap'

import { useDispatch, useSelector } from 'react-redux';

import { logout } from '../../../../actions/userActions';


const ProfileDropdown = () => {

    const userLogin = useSelector(state => state.userLogin)

    const { userInfo } = userLogin



    const dispatch = useDispatch()

    const logoutHandler = () => {
        dispatch(logout)
    }
    return (
        <>
            {
                userInfo
                    ? <Dropdown>
                        <Dropdown.Toggle variant="" id="dropdown-basic" className='dr-btn'>
                            {userInfo.name.split(' ')[0]}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item class><Link to='/profile'> Profile  </Link></Dropdown.Item>
                            <Dropdown.Item onClick={logoutHandler}>Logout</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                    : <Link to='/login'>
                        <i className='fas fa-user-alt'></i>
                        <span>Login</span>
                    </Link>
            }
        </>
    )
}

export default ProfileDropdown