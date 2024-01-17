import { Paper, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useEffect } from 'react'

import { Table, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

import Sidebar from '../Sidebar/Sidebar'
import TableSkeleton from '../../../components/SkeletonLoader/TableSkeleton'
import {listOrders} from '../../../actions/orderActions'

const OrderPage = ({ history }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const OrderList = useSelector((state) => state.orderList)
  const { orders } = OrderList

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin 


  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listOrders())
    } else {
      navigate('/')
    }
  }, [userInfo])

 
  return (
    <>
    
   
     
      {0 ? (
        <div style={{position:"relative", left:"22%"}}>
          <TableSkeleton/>

        </div>
      ) : (
        <TableContainer component={Paper} style={{width: "80%"}}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Order Id</TableCell>
            <TableCell align="center">User Name</TableCell>
            <TableCell align="center">Total Price</TableCell>
           
          
          </TableRow>
        </TableHead>
        <TableBody>
          {orders && orders.map((order) => (
            <TableRow
              key={order._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              style={{cursor:"pointer"}}
              onClick={()=> navigate(`../order/${order._id}`)}
            >
              <TableCell component="th" scope="row">
                {order._id}
              </TableCell>
              <TableCell align="center">{order.user.name}</TableCell>
              <TableCell align="center">{order.totalPrice}</TableCell>
              <TableCell align="center">{order.total}</TableCell>
            </TableRow> 
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      )}
     
      
    </>
  )
}

export default OrderPage