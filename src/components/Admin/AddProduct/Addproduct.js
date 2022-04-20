import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { createProduct } from '../../../actions/productAction';

const Addproduct = () => {

    const [productName, setProductName] = useState('')
    const [productCategory, setProductCategory] = useState('')
    const [productImage, setProductImage] = useState('')
    const [productBrand, setProductBrand] = useState('')
    const [productPrice, setProductPrice] = useState('')
    const [productDescription, setProductDescription] = useState('')
    const [countInStock, setCountInStock] = useState('')



    const dispatch = useDispatch();

    const addProductHandler = async() => {
        dispatch(createProduct(productName, productCategory, productImage,productBrand,productPrice, productDescription,countInStock));
        alert("Product Created!!!")
       
      }


    const ImageHanlder = (pic) => {
        if(pic === undefined){
            alert('Image not uploaded')
            return
        }

        
        if(pic.type  === "Image/jpeg" || "Image/png" ||"Image/webp"  ){
            const data = new FormData()
            data.append("file", pic)
            data.append("upload_preset", "shopNow")
            data.append("cloud_name", "talhapro321")
            fetch("https://api.cloudinary.com/v1_1/talhapro321/image/upload", {
                method: "POST",
                body: data
            }).then((res) => res.json())
              .then(data => {
                console.log(data)
                setProductImage(data.url.toString())
                console.log(data)
                
              })
              .catch((err) => {
                  console.log(err)
                  
              })
        } else{
            alert('something went wrong')
        }
    }

  return (
    <div class="form">
    <h1>Add Product</h1>
    <div style={{display: "flex"}}>
      <input type="text" placeholder="Product Name" style={{marginRight: "10px"}} onChange={(e) => setProductName(e.target.value)}/>
      <input type="text" placeholder="Category" onChange={(e) => setProductCategory(e.target.value)}/>
    </div>
    <input type="file" placeholder="" onChange={(e) => ImageHanlder(e.target.files[0])}/>
   
    <div style={{display: "flex"}}>
      <input type="text" placeholder="Brand" style={{marginRight: "10px"}} onChange={(e) => setProductBrand(e.target.value)}/>
      <input type="text" placeholder="Price" onChange={(e) => setProductPrice(e.target.value)}/>
    </div>

    <input type="textarea" placeholder="Product Description" onChange={(e) => setProductDescription(e.target.value)}/>
    <input type="textarea" placeholder="Count In Stock" onChange={(e) => setCountInStock(e.target.value)}/>

    <button onClick={addProductHandler}>Submit</button>
  
  
</div>
  )
}

export default Addproduct