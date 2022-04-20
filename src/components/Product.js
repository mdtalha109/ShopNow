import React,{useEffect, useState} from "react";
import { Link, useNavigate, } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

import Rating from './Rating';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../actions/cartActions'
import Card from "./Card/Card";





const Product = ({product, isLoading}) => {
    
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [btnText, setBtnText] = useState("Add to cart")

    

    const addToCartHandler = () => {
                if(product.countInStock >0){
                    dispatch(addToCart(product._id, 1));
                    console.log('toast')
                    // toast.success(`${product.name} added to yout cart`);  
                    setBtnText("Go to cart")
                }
                else {
                    toast.warn('Out of Stock')
                }
                   
    }
    return(
            <div className="cards" id={product.countInStock===0 ? 'out-of-stock-card': ''}  >
                {product.countInStock === 0 ? <div className="out-of-stock">out of stock</div>: ''}
                <Link to={`/product/${product._id}?category=${product.category}`}>
                     <div className="card-image">
                         <img src={product.image} alt=""/>
                     </div>
                     </Link>
    
                     <div className="card-title">
                     <p>
                        {product.name}
                     </p>
                    </div>
                    
  
 

                    <div className="card-price">
                        Rs: {product.price}
                    </div>
                    <button className="product-card-btn" onClick={addToCartHandler}>{btnText}</button>
            </div>

    )
}

export default Product;