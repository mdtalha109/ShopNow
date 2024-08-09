import React, { useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { listProductDetails } from '../../actions/productAction';

import CategoriesProduct from '../../components/CategoriesProduct/CategoriesProduct';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import ProductNotFound from '../../components/ProductNotFound/ProductNotFound';
import ProductDetail from '../../components/ProductDetail';
import styles from './index.module.css'


const ProductScreen = ({ match }) => {

    const id = useParams().id
    const [searchParams] = useSearchParams();
    const product_category = searchParams.get('category')

    const dispatch = useDispatch()

    const productDetails = useSelector(state => state.productDetails)
    const { loading, productDetail } = productDetails

    useEffect(() => {
        dispatch(listProductDetails(id))
        
    }, [dispatch, match, id])

    useEffect(() => {
        document.title = productDetail?.name || 'ShopNow'
    }, [productDetail])


    if (loading) return <LoadingSpinner />
    if (!loading && !productDetail) return <ProductNotFound />

    return (
        <>
            <div className={styles.product_page_container}>
                <ProductDetail productDetail={productDetail} />
                <CategoriesProduct categoryName={product_category} Limit='6' heading="Related Products" />
            </div>
        </>
    )
}

export default ProductScreen;
