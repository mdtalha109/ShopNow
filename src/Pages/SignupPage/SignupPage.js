import React from 'react'
import {Link} from 'react-router-dom'
import { Card } from 'react-bootstrap'

import Input from '../../components/ui/Input'
import useSignUpHook from './hooks'

import styles from './index.module.css'


export const SignupPage = () => {

    const {
        userDetail, 
        handleInputChange,
        submitHandler,
    } = useSignUpHook()

    return (
        <>
            <div className={styles.signupForm_container}>
                <Card>
                    <div className={styles.signupForm}>
                        <h1 className={styles.form_header_text}>Create your account</h1>

                        <Input
                            label='Name'
                            name='name'
                            value={userDetail.name} 
                            placeholder='Enter your name'
                            onChange={handleInputChange}
                        />

                        <Input
                            label='Email Address'
                            name='email'
                            value={userDetail.email} 
                            placeholder='Enter your email address'
                            onChange={handleInputChange}
                        />

                        <Input
                            label='Password'
                            type='password' 
                            name='password'
                            value={userDetail.password} 
                            placeholder='Enter your password'
                            onChange={handleInputChange}
                        />

                        <Input
                            label='Confirm Password'
                            type='password' 
                            name='confirmPassword'
                            value={userDetail.confirmPassword} 
                            placeholder='enter your password again'
                            onChange={handleInputChange}
                        />

                        <button className={styles.submit_button} type='submit' onClick={submitHandler}>SIGN UP</button>

                        <div className='create-acc-container'><span>Already have an account? <Link to='/login'>Login here</Link></span></div>
                    </div>
                </Card>
            </div>
        
           
        </>

    )
}

export default SignupPage
