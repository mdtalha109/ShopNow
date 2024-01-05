import { Container } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { remote_config } from '../../config/remoteURL';

import Product from '../Product';
import ProductSkeletonLoader from '../SkeletonLoader/productSkeletonLoader';

import './CategoriesProduct.css'

const CategoriesProduct = ({categoryName, Limit, heading, style}) => {

    const CategoriesProductStyle= {
        ...style
    }

    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState([])

   
        useEffect(async()=> {
            const {data} = await axios.get(`${remote_config.BACKEND_URL}/api/products/category/${categoryName}?Limit=${Limit}`);
            setProduct(data)
            setLoading(false)
        }, []);
    
   
  return (
      <>
      <div style={CategoriesProductStyle}>
      <h2>{heading}</h2>
      
        {<div className="container-product_card">
            {loading ? <div style={{width:"100%", display: "flex", justifyContent:"center"}}><ProductSkeletonLoader/></div> : ""}
            {product && product.map(product => <Product product = {product}/>)}
            
            </div>  
        }
        </div>
      
      
      </>
  )
}

export default CategoriesProduct