import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Product from '../../components/Product';
import { useDispatch } from 'react-redux';
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

    if(loading) return <LoadingSpinner/>
    if(!loading && !product?.length) return <ProductNotFound/>
    
    return (
        <>
            <div className={styles.product_page_header_container}>
                <div className={styles.product_page_header}>
                    <h2>{(product && product.length > 0)? categoryName:''}</h2>
                    <select onChange={change} className={styles.price_select}>
                        <option value="1">Low to High</option>
                        <option value="-1">High to low</option>
                    </select>
                </div>
            </div>
          
            <div className={styles.product_list}>
                {(product && product.length > 0)? product.map(product => (
                    <Product product = {product} isLoading= {loading}/>  
                )): null}
            </div>
            
        </>
    )
}

export default ProductPage
