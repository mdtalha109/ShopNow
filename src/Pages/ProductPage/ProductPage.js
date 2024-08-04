import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import axios from 'axios';
import Product from '../../components/Product';
import { ListProducts } from '../../actions/productAction';
import { useDispatch, useSelector } from 'react-redux';
import CategoriesProduct from '../../components/CategoriesProduct/CategoriesProduct'
import Categories from '../../components/Categories/Categories';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import ProductNotFound from '../../components/ProductNotFound/ProductNotFound.js'
import { remote_config } from '../../config/remoteURL';
import styles from'./index.module.css'



const ProductPage = () => {
    const dispatch = useDispatch()

    const categoryName = useParams().category;

    const [sort, setSort] = useState("")
    const [product, setProduct] = useState("")
    const [loading, setLoading] = useState(false)

     useEffect(async()=> {
        setLoading(true)
        const {data} = await axios.get(`${remote_config.BACKEND_URL}/api/products/category/${categoryName}?sort=${sort}`);
        setProduct(data)
        setLoading(false)
    }, [dispatch, sort]);


    function change(e){
        setSort(e.target.value)
    }
    
    return (
        <>
            <span style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                <div style={{marginTop: "20px", display:"flex", justifyContent:"space-between",alignItems:"center", width: "90%"}}>
                <h2>{(product && product.length > 0)? categoryName:''}</h2>
                    <select onChange={change} style={{width: "200px", height: "40px"}}>
                        <option value="1">Low to High</option>
                        <option value="-1">High to low</option>
                    </select>
                </div>
            </span>
            
          
                <div className={styles.product_list}>
                    {loading && <LoadingSpinner/>}
                    {(product && product.length > 0)? product.map(product => (
                       <Product product = {product} isLoading= {loading}/>  
                    )): !loading && <ProductNotFound/>}
                </div>
            
        </>
    )
}

export default ProductPage
