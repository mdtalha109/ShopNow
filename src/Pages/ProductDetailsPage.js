import React, {useState, useEffect } from 'react';
import {Link, useParams, useNavigate, useLocation, useSearchParams} from 'react-router-dom'
import { toast, ToastContainer } from "react-toastify";
import { Container } from 'react-bootstrap';
import Rating from '../components/Rating'
import products from '../products' 
import { useDispatch, useSelector } from 'react-redux';
import { listProductDetails, ListProducts } from '../actions/productAction';
import { addToCart } from '../actions/cartActions'
import '../index.css'
import CategoriesProduct from '../components/CategoriesProduct/CategoriesProduct';
import LoadingSpinner from '../components/LoadingSpinner/LoadingSpinner.js'
import ProductNotFound from '../components/ProductNotFound/ProductNotFound.js'

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
                    <div className='product_detail_container'>
                    <div className='productDetail'>
                    
                            <div className='ProductDetail_image'>
                                <img src={productDetail.image} alt={productDetail.name}/>
                            </div>
                            
                            <div className='productDetail_info'>
                                <div> <h3 className='product-detail-name'>{productDetail.name}</h3> </div>
                                <div className='product-detail-price'>Price: ${productDetail.price}</div>
    
                                <h3 className='card-rating'> <Rating value={productDetail.rating} text={`${productDetail.numReviews} reviews`}/></h3>
    
                                
                                
                                <div className=''>Description: ${productDetail.description} </div>
                                <br></br>
                                <div className='qty-add-to-cart-container'>
                                    {/* <input type="number" value={qty} min="1" onChange={(e) => setQty(Number(e.target.value))}/> */}
    
                                    <div className='qty-counter-container'>
                                        <span className='qty-counter'> <button onClick={increment} >+</button></span>
                                        <span className='qty-counter'>{qty}</span>
                                        <span className='qty-counter' ><button onClick={decrement}>-</button></span>
                                    </div>
    
                                    <div className='button-container'>
                                        <button className={` ${productDetail.countInStock===0? 'btn-disabled': 'card-add_to_cart'}`} 
                                                disabled={productDetail.countInStock===0}
                                                onClick={addToCartHandler}                
                                        >
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                                <br></br>
    

     
                            </div>
                    </div>
    
                   
                </div>
    
                )
            }
          
               
               
            {<div className="container-product_card">
             
                <CategoriesProduct categoryName={product_category} Limit='6'/>
         </div>}

           
        </>
    )
}

export default ProductScreen;
