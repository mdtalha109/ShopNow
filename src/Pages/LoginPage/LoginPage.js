import React, {useState, useEffect} from 'react'
import {Link, useNavigate, useSearchParams} from 'react-router-dom'
import {Form, Button, Row, Col, Container} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import { toast, ToastContainer } from "react-toastify"
import Loader from "react-loader-spinner";
import {login} from '../../actions/userActions'
import { formContainer } from '../../components/formContainer/formContainer.js'
import Card from '../../components/Card/Card.js'
import './LoginPage.js'

export const LoginScreen = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)

    const {loading, error, userInfo} = userLogin

    const LOGIN_BUTTON_TEXT = 'LogIn'
    
    const navigate = useNavigate()

    const [searchParams] = useSearchParams();
    const redirectTo = searchParams.get('redirect')

    useEffect(() => {
        if(userInfo){
            toast('You are logged In')
            if(redirectTo){
                navigate(redirectTo)
            }
            else navigate('/')
        }

    },[userInfo, error])

    const submitHandler = (e) => {
        e.preventDefault()
        if(!email || !password){
            toast.error('please enter email and password')
            return;
        }
        //now dispatch the login
        dispatch(login(email, password))

        if(error)
        toast('Invalid email or password')

    }

    return (
        <>
        <Container className='mt-2'>
        
        <form onSubmit={submitHandler}>
        
            <div className='LoginForm-container'>
            <Card>
                <div className='LoginForm'>
                    <h1>Login</h1>
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
                        <p>By continuing, you agree to Dazzle Cerashop'sTerms of use andPrivacy Policy.</p>
                    <div className='input-container'>
                        <button type='submit'> {loading ? <Loader type="TailSpin" height={20} color='white'/> : LOGIN_BUTTON_TEXT } </button>
                    </div>
                    <div className='create-acc-container'> <Link to='/signup'>Create New Account</Link></div>
                </div>
                
                <ToastContainer/>
                </Card>
               
            </div>
           
         </form>
         
         </Container>
        </>

    )
}

export default LoginScreen
