import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import { useDispatch } from 'react-redux';
import { addToCart } from '../../actions/cartActions';
import styles from './index.module.css'
import 'react-toastify/dist/ReactToastify.css'



const Product = ({ product, isLoading }) => {

    const dispatch = useDispatch();

    const [btnText, setBtnText] = useState("Add to cart");
    const [imageInView, setImageInView] = useState(false);
    const imageRef = useRef(null);

    const addToCartHandler = () => {
        if (product.countInStock > 0) {
            dispatch(addToCart(product._id, 1));
            toast.success(`${product.name} added to your cart`);
            setBtnText("Go to cart");
        } else {
            toast.warn('Out of Stock');
        }
    }

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setImageInView(true);
                }
            },
            {
                root: null,
                rootMargin: "0px",
                threshold: 0.1, // Adjust the threshold as needed
            }
        );

        if (imageRef.current) {
            observer.observe(imageRef.current);
        }

        return () => {
            if (imageRef.current) {
                observer.unobserve(imageRef.current);
            }
        };
    }, []);

    return (
        <div className={styles.cards} id={product.countInStock === 0 ? 'out_of_stock_card' : ''} >
            {product.countInStock === 0 ? <div className={styles.out_of_stock}>out of stock</div> : ''}
            <Link to={`/product/${product._id}?category=${product.category}`}>
                <div className={styles.card_image} ref={imageRef}>
                    {imageInView && <img src={product.image} alt="" loading="lazy" />}
                </div>
            </Link>


            <p className={styles.card_title}>
                {product.name}
            </p>


            <div className={styles.card_price}>
                Rs: {product.price}
            </div>


            <button className={styles.product_card_btn} onClick={addToCartHandler}>{btnText}</button>


        </div>
    )
}

export default Product;
