import React, {useState, useEffect } from 'react';
import {Link, useParams, useNavigate, useLocation, useSearchParams} from 'react-router-dom'
import { toast, ToastContainer } from "react-toastify";
import Rating from '../../components/Rating'
import products from '../../products' 
import { useDispatch, useSelector } from 'react-redux';
import { listProductDetails, ListProducts } from '../../actions/productAction';
import { addToCart } from '../../actions/cartActions'
import CategoriesProduct from '../../components/CategoriesProduct/CategoriesProduct';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import ProductNotFound from '../../components/ProductNotFound/ProductNotFound';

import styles from './index.module.css'


const ProductScreen = ({match}) => {
    
    const navigate = useNavigate();
    
    
    const [qty, setQty] = useState(1);

    const id = useParams().id
    const [searchParams] = useSearchParams();
    const product_category = searchParams.get('category')

    const dispatch = useDispatch()

    const productDetails = useSelector(state => state.productDetails)
    const {loading, productDetail} = productDetails

     useEffect(()=> {
        dispatch(listProductDetails(id))
    }, [dispatch, match, id])

    // useEffect(()=> {
    //     dispatch(ListProducts(""))
    // }, [dispatch]);

    const productList = useSelector(state => state.productList)
    const {product} = productList;

    

    

    const addToCartHandler = () => {
        dispatch(addToCart(productDetail._id, qty));
        toast(`${productDetail.name} added to your cart!`);  

        // navigate(`/cart/${product._id}?qty=${qty}`);  
    }

    const increment = () => {

        setQty(qty+1)
    }
    const decrement = () => {
        if(qty >1) {
            setQty(qty-1)
        }  
    }
    return (
        <>
           <ToastContainer/>

            {
                loading ? <LoadingSpinner/>: !productDetail ? <ProductNotFound/> :(
                    <div className={styles.product_detail_container}>
                        <div className={styles.product_detail}>
                        
                                <div className={styles.ProductDetail_image_container}>
                                    <img src={productDetail.image} alt={productDetail.name} className={styles.product_img}/>
                                </div>
                                
                                <div className={styles.product_detail_info}>
                                    <div> <h3 className={styles.product_detail_name}>{productDetail.name}</h3> </div>
                                    <div className={styles.product_detail_price}>Price: ${productDetail.price}</div>
        
                                    <h3 className={styles.product_rating}> <Rating value={productDetail.rating} text={`${productDetail.numReviews} reviews`}/></h3>
        
                                    
                                    
                                    <div className=''>Description: ${productDetail.description} </div>
                                    <br></br>
                                    <div className={styles.add_to_cart_container}>
        
                                        <div className={styles.qty_counter_container}>
                                            <div className={styles.qty_counter_action} onClick={increment}> +</div>
                                            <div className={styles.qty_counter_display}>{qty}</div>
                                            <div className={styles.qty_counter_action} onClick={decrement}> -</div>
                                        </div>

                
                                        <button className={` ${styles.btn_add_to_cart} ${productDetail.countInStock===0 ? styles.btn_add_to_cart_disabled: null}`} 
                                                disabled={productDetail.countInStock===0}
                                                onClick={addToCartHandler}                
                                        >
                                            Add to Cart
                                        </button>
                                        
                                    </div>
                                
                                </div>
                        </div>
                    </div>
    
                )
            }
             
            
                <div className="container-product_card">
             
                <CategoriesProduct categoryName={product_category} Limit='6' heading="Related Products"/>
                </div>

           
        </>
    )
}

export default ProductScreen;
