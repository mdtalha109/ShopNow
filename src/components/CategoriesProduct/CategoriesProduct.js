import { Container } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { remote_config } from '../../config/remoteURL';
import Product from '../Product';
import ProductSkeletonLoader from '../SkeletonLoader/productSkeletonLoader';

import styles from './index.module.css'

const CategoriesProduct = ({ categoryName, Limit, heading, style }) => {

    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState([])


    useEffect(async () => {
        const { data } = await axios.get(`${remote_config.BACKEND_URL}/api/products/category/${categoryName}?Limit=${Limit}`);
        setProduct(data)
        setLoading(false)
    }, []);


    return (
        <>
            <div className={styles.category_product_container}>
                <h1 className={styles.categories_title}>{heading}</h1>

                <div className={styles.container_product_card}>
                    {loading ? <div><ProductSkeletonLoader /></div> : ""}
                    {product && product.map(product => <Product product={product} />)}
                </div>
            </div>
        </>
    )
}

export default CategoriesProduct