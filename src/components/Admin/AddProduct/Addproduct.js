import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { createProduct } from '../../../actions/productAction';
import Input from '../../ui/Input';
import Textarea from '../../ui/Textarea';
import { toast } from 'react-toastify';
import useAddProduct from './hooks/useAddProduct';

const Addproduct = ({setisOpen}) => {

  const {
    product, 
    setProduct,
    addProductHandler,
    ImageHanlder
  } = useAddProduct()

  return (
    <div class="form" style={{display: "flex", flexDirection: "column", gap: "10px"}}>

      <h1>Add Product</h1>

      <div style={{display: "flex"}}>
        <Input 
          label='Product Name' 
          type="text" 
          name="name"
          placeholder="Product Name" 
          style={{marginRight: "10px"}} 
          onChange={(event) => setProduct((prev) => ({...prev, [event.target.name]: event.target.value}))}
        />
        <Input
          label='Category'
          type="text" 
          name="category"
          placeholder="Category" 
          onChange={(event) => setProduct((prev) => ({...prev, [event.target.name]: event.target.value}))}
        />
      </div>

      <Input 
        label='Image'
        name="image"
        type="file" 
        placeholder="" 
        onChange={(event) => setProduct((prev) => ({...prev, [event.target.name]: event.target.value}))}
      />
    
      <div style={{display: "flex"}}>

        <Input 
          label='Brand Name'
          type="text" 
          name="brand"
          placeholder="Brand" 
          style={{marginRight: "10px"}} 
          onChange={(event) => setProduct((prev) => ({...prev, [event.target.name]: event.target.value}))}
        />

        <Input
          label='Price'
          type="number" 
          name="price"
          placeholder="Price" 
          onChange={(event) => setProduct((prev) => ({...prev, [event.target.name]: event.target.value}))}
        />
      </div>

      <Textarea
        label="Product Description"
        type="text"
        name="description" 
        placeholder="Product Description" 
        onChange={(event) => setProduct((prev) => ({...prev, [event.target.name]: event.target.value}))}
      />

      <Input
        label="Stock" 
        type="number" 
        name="countInStock"
        placeholder="Count In Stock" 
        onChange={(event) => setProduct((prev) => ({...prev, [event.target.name]: event.target.value}))}
      />

      <button onClick={addProductHandler}>Submit</button>
    
  
    </div>
  )
}

export default Addproduct