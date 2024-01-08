import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { register } from '../../../actions/userActions'

const useSignUpHook = () => {

    const [userDetail, setUserdetail] = useState({
        name: null,
        email: null,
        password: null,
        confirmPassword: null
    })

    const dispatch = useDispatch()

    const userRegister = useSelector(state => state.userRegister)

    const {loading, error, userInfo} = userRegister

    const navigate = useNavigate()

    const submitHandler = () => {

        if(!userDetail.email || !userDetail.password){
            toast('please enter your details')
            return;
        }

        if(!userDetail.email.includes('.' && '@')){
            toast('email not correct')
            return;
        }

        if(userDetail.password !== userDetail.confirmPassword) {
            toast('password do not match')
            return;
        }

        dispatch(register(userDetail.name, userDetail.email, userDetail.password))
    }

    const handleInputChange = (event) => {
        setUserdetail((prev) => ({...prev, [event.target.name]: event.target.value}))
    }

    if(error) toast(error)

    useEffect(() => {
        if(userInfo)
            navigate('/')

    },[userInfo])

    return {

        userDetail,
        handleInputChange,
        submitHandler,
    }
}

export default useSignUpHook