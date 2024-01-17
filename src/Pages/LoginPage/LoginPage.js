import React, {useState, useEffect} from 'react'
import {Link, useNavigate, useSearchParams} from 'react-router-dom'
import {Card} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import { toast, ToastContainer } from "react-toastify"
import Loader from "react-loader-spinner";
import {login} from '../../actions/userActions'


import styles from './index.module.css'
import Input from '../../components/ui/Input'

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

        dispatch(login(email, password))

        if(error)
        toast('Invalid email or password')

    }

    return (
        <>
        <form onSubmit={submitHandler}>
            <div className={styles.loginForm_container}>
           
                <div className={styles.LoginForm}>
                    <h1 className={styles.form_header_text}>Login</h1>
                
                        <Input
                            label='Email Address'
                            value={email} 
                            placeholder='Enter your email address'
                            onChange={(event) => setEmail(event.target.value)}
                        />

                        <Input
                            label='Password'
                            type='password' 
                            placeholder='Enter your email password'
                            onChange={(event) => setPassword(event.target.value)}
                        />

                        <button className={styles.submit_button} type='submit'> {loading ? <Loader type="TailSpin" height={20} color='white'/> : LOGIN_BUTTON_TEXT } </button>

                    
                       
                    <div className='create-acc-container'> <Link to='/signup'>Create New Account</Link></div>
                </div>
                
                <ToastContainer/>
                
               
            </div>
         </form>
        </>
    )
}

export default LoginScreen
