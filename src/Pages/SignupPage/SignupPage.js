import React, {useState, useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { toast, ToastContainer } from "react-toastify"
import {register} from '../../actions/userActions'
import { formContainer } from '../../components/formContainer/formContainer.js'
import './SignupPage.css'
import { Card } from 'react-bootstrap'

export const SignupPage = () => {


    const [name, setName] = useState('')
    const [email, setEmail] = useState('')


    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    

    const dispatch = useDispatch()

    const userRegister = useSelector(state => state.userRegister)

    const {loading, error, userInfo} = userRegister

    const navigate = useNavigate()

    useEffect(() => {
        if(userInfo)
            navigate('/')

    },[userInfo])

    const submitHandler = () => {

        if(!email || !password){
            toast('please enter your details')
            return;
        }

        if(!email.includes('.' && '@')){
            toast('email not correct')
            return;
        }

        if(password != confirmPassword) {
            toast('password do not match')
            return;
        }

        
        // //now dispatch the register
        dispatch(register(name, email, password))
    }

    if(error) toast(error)
  

    return (
        <>
            <div className='LoginForm-container'>
            <Card>
                <div className='LoginForm'>
                    <h1>Signup Form</h1>

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
                        <button type='submit' onClick={submitHandler}>SIGN UP</button>
                    </div>
                    <div className='create-acc-container'><span>Already have an account? <Link to='/login'>Login here</Link></span></div>
                </div>
                <ToastContainer/>
                </Card>
            </div>
        
           
        </>

    )
}

export default SignupPage
