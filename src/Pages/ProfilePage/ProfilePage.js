import React, {useState, useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {Form, Button, Row, Col} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'

import { toast, ToastContainer } from "react-toastify"
import {getUserDetails, updateUserProfile} from '../../actions/userActions'
// import '..SignupScreen/SignupScreen.css'

export const ProfileScreen = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

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

        //dispatch updateprofile 
         dispatch(updateUserProfile({id : userInfo._id, name, email, password}))
      
       
    }

  

    return (
        <>
            <Row>
                <Col>
                <div className='LoginForm-container'>
                <div className='LoginForm'>
                    <h2>User Profile</h2>

                    <div className='input-container'>
                        <label>Name</label><br/>
                        <input value={name} 
                            placeholder='Enter your name'
                            onChange={(event) => setName(event.target.value)}
                        />
                    </div>

                    <div className='input-container'>
                        <label>Email Address</label><br/>
                        <input value={email} 
                            placeholder='Enter your email address'
                            onChange={(event) => setEmail(event.target.value)}
                        />
                    </div>

                    <div className='input-container'>
                        <label>Password</label><br/>
                        <input value={password} 
                            type='password' 
                            placeholder='Enter your email password'
                            onChange={(event) => setPassword(event.target.value)}
                        />
                    </div>

                    <div className='input-container'>
                        <label>ConfirmPassword</label><br/>
                        <input value={confirmPassword} 
                            type='password' 
                            placeholder='enter password again'
                            onChange={(event) => setConfirmPassword(event.target.value)}
                        />
                    </div>

                    <div className='input-container'>
                        <button type='submit' onClick={submitHandler}>UPDATE</button>
                    </div>
                   
                </div>
                <ToastContainer/>
               
            </div>
                </Col>

                <Col md = {6}>
                    <h1>My Order</h1>
                </Col>
            </Row>
           
        
        </>

    )
}

export default ProfileScreen
