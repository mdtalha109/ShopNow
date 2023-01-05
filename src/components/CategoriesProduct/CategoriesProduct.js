import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { remote_config } from '../../config/remoteURL';

import Product from '../Product';
import ProductSkeletonLoader from '../SkeletonLoader/productSkeletonLoader';

const CategoriesProduct = ({categoryName, Limit}) => {

    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState([])

   
        useEffect(async()=> {
            const {data} = await axios.get(`${remote_config.BACKEND_URL}/api/products/category/${categoryName}?Limit=${Limit}`);
            setProduct(data)
            setLoading(false)
        }, []);
    
   
  return (
      <>
       
        {<div className="container-product_card">
            {loading ? <div style={{width:"100%", display: "flex", justifyContent:"center"}}><ProductSkeletonLoader/></div> : ""}
            {product && product.map(product => <Product product = {product}/>)}
            
            </div>  
        }
      </>
  )
}

export default CategoriesProduct