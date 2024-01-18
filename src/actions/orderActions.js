import axios from "axios"
import { remote_config } from "../config/remoteURL"

import { ORDER_CREATE_REQUEST, ORDER_CREATE_SUCCESS, ORDER_LIST_FAIL, ORDER_LIST_REQUEST, ORDER_LIST_SUCCESS } from "../constants/orderContants"
import { CART_CLEAR_ITEMS } from "../constants/cartConstants"
import { logout } from "./userActions"

export const createOrder = (order) => async (dispatch, getState) => {
    try {
      dispatch({
        type: ORDER_CREATE_REQUEST,
      })
  
      const {
        userLogin: { userInfo },
      } = getState()
  
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
  
      const { data } = await axios.post(`${remote_config.BACKEND_URL}/api/orders`, order, config)
  
      dispatch({
        type: ORDER_CREATE_SUCCESS,
        payload: data,
      })
      dispatch({
        type: CART_CLEAR_ITEMS,
        // payload: data,
      })
      localStorage.removeItem('cartItems')
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    //   if (message === 'Not authorized, token failed') {
    //     dispatch(logout())
    //   }
    //   dispatch({
    //     type: ORDER_CREATE_FAIL,
    //     payload: message,
    //   })
    }
  }


  export const listOrders = () => async (dispatch, getState) => {
    try {
      dispatch({
        type: ORDER_LIST_REQUEST,
      })
  
      const {
        userLogin: { userInfo },
      } = getState()
  
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
  
      const { data } = await axios.get(`http://localhost:2000/api/orders`, config)
  
      dispatch({
        type: ORDER_LIST_SUCCESS,
        payload: data,
      })
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      if (message === 'Not authorized, token failed') {
        dispatch(logout())
      }
      dispatch({
        type: ORDER_LIST_FAIL,
        payload: message,
      })
    }
  }