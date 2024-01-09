import React, {useState, useEffect} from 'react'
import {Link, NavLink, useNavigate} from 'react-router-dom'
import {Form, Button, Row, Col, Container} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'

import { toast, ToastContainer } from "react-toastify"
import {getUserDetails, updateUserProfile} from '../../actions/userActions'
import Input from '../../components/ui/Input'
import styles from './index.module.css'
import { remote_config } from '../../config/remoteURL'
import axios from 'axios'

export const ProfileScreen = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [allOrder, setAllOrder] = useState('');

    const dispatch = useDispatch()

    const userDetails = useSelector(state => state.userLogin)
    const {loading, error} = userDetails
    // console.log(userDetails)

    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin


    const navigate = useNavigate()

    useEffect(() => {
        if(!userInfo)
            navigate('/login')
        else {
            if(!userInfo.name) {
                // dispatch(getUserDetails('profile'))
            }
            else {
                
             
                setName(userInfo.name)
                setEmail(userInfo.email)
            }
        }

    },[dispatch, userInfo])

    const submitHandler = () => {
         dispatch(updateUserProfile({id : userInfo._id, name, email, password}))  
    }

    useEffect(() => {
        const fetchAllOrder = async () => {
            try {
                const config = {
                    headers: {
                        Authorization: `Bearer ${userInfo.token}`,
                    },
                };
                const { data } = await axios.get(
                    `${remote_config.BACKEND_URL}/api/orders/get-all-order`,
                    config
                );

                console.log("data: ", data)

                setAllOrder(data);
            } catch (error) {
                console.log('Error fetching all orders:', error);
            }
        };

        fetchAllOrder();
    }, [userInfo]);

  

    return (
 
        <Container>
            <Row>
                <Col>
                    <div className={styles.profileFormContainer}>
                        <div className={styles.profileForm}>
                            <h2 className={styles.form_header_text}>User Profile</h2>

                            <div className='input-container'>
                                <Input
                                    label='Name'
                                    value={name} 
                                    placeholder='Enter your name'
                                    onChange={(event) => setName(event.target.value)}
                                />
                            
                            </div>

                            <div className='input-container'>  
                                <Input
                                    label='Email Address'
                                    value={email}
                                    placeholder='Enter your email address'
                                    onChange={(event) => setEmail(event.target.value)}
                                />
                            </div>

                            <div className='input-container'>
                                <Input
                                    label='Password'
                                    value={password} 
                                    type='password' 
                                    placeholder='Enter your email password'
                                    onChange={(event) => setPassword(event.target.value)}
                                />
                            </div>

                            <div className='input-container'>
                                <Input
                                    label='Confirm Password'
                                    value={confirmPassword} 
                                    type='password' 
                                    placeholder='enter password again'
                                    onChange={(event) => setConfirmPassword(event.target.value)}
                                />
                            </div>

                            <div className='input-container'>
                                <button className={styles.submit_button} type='submit' onClick={submitHandler}>UPDATE</button>
                            </div>
                        
                        </div>
                
                    </div>
                </Col>

                <Col md={6}>
                    <div className={styles.order_card_container}>
                        <div className={styles.order_list}>
                            <h2>My Order</h2>

                            {
                                allOrder && allOrder.map((order) => (
                                    <NavLink to={`/order/${order._id}`}>
                                    <Row className={styles.order_list_row}>
                                        <Col md={2}>
                                            <img src={order.orderItems[0].product.image} alt='image' className={styles.order_list_image}></img>
                                        </Col>
                                        <Col md={4}>{order.orderItems[0].name} {order.orderItems.length > 1 && <span>and {order.orderItems.length -1} more items </span>}</Col>
                                        <Col md={2}>{order.totalPrice}</Col>
                                        <Col>{order.isDelivered ? 'Delivered' : 'On the way'}</Col>
                                    </Row>
                                    </NavLink>
                                ))
                            }



                        </div>
                        </div>
                    </Col>
            </Row>

        </Container>

    )
}

export default ProfileScreen
