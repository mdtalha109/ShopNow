import React, {useState, useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {Form, Button, Row, Col} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import {login} from '../../actions/userActions'
import { formContainer } from '../../components/formContainer/formContainer.js'
import './LoginScreen.css'

export const LoginScreen = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)

    const {loading, error, userInfo} = userLogin

    const navigate = useNavigate()

    useEffect(() => {
        if(userInfo)
            navigate('/')

    },[userInfo])

    const submitHandler = () => {
        //now dispatch the login
        dispatch(login(email, password))
    }
  

    return (
        <>
            <div className='LoginForm-container'>
                <div className='LoginForm'>
                    <h1>Login Form</h1>
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
                        <button type='submit' onClick={submitHandler}>SIGN IN</button>
                    </div>
                    <div className='create-acc-container'>Create New Account</div>
                </div>
               
            </div>
        
        </>
        
        
        
    )
}

export default LoginScreen
