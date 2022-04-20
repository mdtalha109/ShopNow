import { Paper, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useEffect } from 'react'

import { Table, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

import { listUsers, deleteUser } from '../../../actions/userActions'
import Sidebar from '../Sidebar/Sidebar'
import TableSkeleton from '../../../components/SkeletonLoader/TableSkeleton'

const UserListScreen = ({ history }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const userList = useSelector((state) => state.userList)
  const { loading, error, users } = userList

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin 

  const userDelete = useSelector((state) => state.userDelete)
  const {success:successDelete} = userDelete

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listUsers())
    } else {
      navigate('/')
    }
  }, [userInfo, successDelete])

  const deleteHandler = (id) => {
      prompt("Are you sure")
      dispatch(deleteUser(id))
  }

  return (
    <>
    <div style={{display:"flex"}}>
    <Sidebar/>
     
      {loading ? (
        <div style={{position:"relative", left:"22%"}}>
          <TableSkeleton/>

        </div>
      ) : error ? (
        "error"
      ) : (
        <TableContainer component={Paper} style={{width: "80%",marginLeft:"20%"}}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>User Name</TableCell>
            <TableCell align="center">User Id</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">Admin</TableCell>
          
          </TableRow>
        </TableHead>
        <TableBody>
          {users && users.map((user) => (
            <TableRow
              key={user.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {user.name}
              </TableCell>
              <TableCell align="center">{user._id}</TableCell>
              <TableCell align="center">{user.email}</TableCell>
              <TableCell align="center">{user.isAdmin ? "YES" : "NO"}</TableCell>
              <TableCell>
                  <Link to={`/admin/user/${user._id}/edit`}>
                    <Button variant='light' className='btn-sm'>
                      <i className='fas fa-edit'></i>
                    </Button>
                  </Link>
                  <span
                    variant='danger'
                    className='btn-sm'
                    onClick={() => deleteHandler(user._id)}
                  >
                    <i className='fas fa-trash'></i>
                  </span>
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      )}
      </div>
      
    </>
  )
}

export default UserListScreen