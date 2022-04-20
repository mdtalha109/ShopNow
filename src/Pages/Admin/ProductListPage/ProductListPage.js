import { Paper, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import zIndex from '@mui/material/styles/zIndex'
import React, { useEffect , useState} from 'react'

import { Table, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { deleteProduct, ListProducts, createProduct } from '../../../actions/productAction'
import Addproduct from '../../../components/Admin/AddProduct/Addproduct'
import Modal from '../../../components/Modal/Modal'
import TableSkeleton from '../../../components/SkeletonLoader/TableSkeleton'
import LoginScreen from '../../LoginPage/LoginPage'


import Sidebar from '../Sidebar/Sidebar'

const ProductListPage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  // const [showModal, setShowModal] = useState(false)
  // const [showModalBackdrop, setShowModalBackdrop] = useState(false)

  const [isOpen, setisOpen] = useState(false)

  
  const productList = useSelector(state => state.productList)
  const {loading, product} = productList

  const productDelete = useSelector(state => state.productDelete)
  const {loading: loadingDelete , success: successDelete} = productDelete
  

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin 

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(ListProducts())
    } else {
      navigate('/')
    } 
  }, [userInfo, dispatch, successDelete])

  const deleteHandler = (id) => {
   
    
      if(window.confirm('Are you sure')){
        dispatch(deleteProduct(id ))
      }
    
  }


  const closeModal = () => {
    setisOpen(false)
  }



  // const toggleModal = () => {
  //  showModal ? setShowModal(false) : setShowModal(true);
  //  showModalBackdrop ? setShowModalBackdrop(false) : setShowModalBackdrop(true)
  
  // }

 

  return (
    <>
    
    <Sidebar/>
     <div style={{width: "80%",marginLeft:"20%"}}>
      {loading ? (
        <div style={{position:"relative", left:"2%"}}>
          <TableSkeleton/>

        </div>
      ) : (
        <TableContainer component={Paper} >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="center">Price</TableCell>
            <TableCell align="center">Category</TableCell>
            <TableCell align="center"></TableCell>
          
          </TableRow>
        </TableHead>
        <TableBody>
          {product && product.map((product) => (
            <TableRow
              key={product.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {product.name}
              </TableCell>
              <TableCell align="center">{product.price}</TableCell>
              <TableCell align="center">{product.category}</TableCell>
              {/* <TableCell align="center">{product.price ? "YES" : "NO"}</TableCell> */}
              <TableCell>
                  {/* <Link to={`/admin/user/${product.id}/edit`}>
                    <Button variant='light' className='btn-sm'>
                      <i className='fas fa-edit'></i>
                    </Button>
                  </Link> */}
                  <button
                    variant='danger'
                    className='btn-sm'
                    style={{cursor:"default"}}
                    onClick={() => deleteHandler(product._id)}
                   >
                    <i className='fas fa-trash'></i>
                  </button>
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      )}


      <Modal open={isOpen} close={closeModal}>
         <Addproduct />
      </Modal>
     

        <button style={{
            backgroundColor:"blue", 
            border:"none", 
            padding:"0px 17px", 
            borderRadius:"50%",
            position:"fixed",
            right:"30px",
            bottom:"30px", 
            zIndex:"999",
            fontSize:"40px",
            color:"white"
          }}
          onClick={() => setisOpen(true)}>
          +
        </button>
      </div>


     
    </>
  )
}

export default ProductListPage