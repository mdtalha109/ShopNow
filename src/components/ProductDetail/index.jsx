import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../actions/cartActions'
import { toast } from 'react-toastify';
import styles from './index.module.css'
import Rating from '../Rating';


const ProductDetail = ({productDetail}) => {

    const [qty, setQty] = useState(1);

    const dispatch = useDispatch()

    const increment = () => {

        setQty(qty + 1)
    }
    const decrement = () => {
        if (qty > 1) {
            setQty(qty - 1)
        }
    }

    const addToCartHandler = () => {
        dispatch(addToCart(productDetail._id, qty));
        toast(`${productDetail.name} added to your cart!`);
    }

    return (
        <div className={styles.product_detail_container}>
            <div className={styles.product_detail}>

                    <div className={styles.ProductDetail_image_container}>
                        <img src={productDetail.image} alt="" className={styles.product_img} />
                    </div>

                <div className={styles.product_detail_info}>
                    <div> <h3 className={styles.product_detail_name}><b></b>{productDetail.name}</h3> </div>
                    <div>
                        <span className={styles.product_detail_price}> Price: ${productDetail.price}</span>
                        <p style={{ fontSize: "0.8rem" }}>Inclusive of taxes

                        </p>
                    </div>

                    <h3 className={styles.product_rating}> <Rating value={productDetail.rating} text={`${productDetail.numReviews} reviews`} /></h3>

                    <div className=''>Description: ${productDetail.description} </div>

                    <div className={styles.add_to_cart_container}>
                        <div className={styles.qty_counter_container}>
                            <div className={styles.qty_counter_action} onClick={increment}> +</div>
                            <div className={styles.qty_counter_display}>{qty}</div>
                            <div className={styles.qty_counter_action} onClick={decrement}> -</div>
                        </div>

                        <button className={` ${styles.btn_add_to_cart} ${productDetail.countInStock === 0 ? styles.btn_add_to_cart_disabled : null}`}
                            disabled={productDetail.countInStock === 0}
                            onClick={addToCartHandler}
                        >
                            <i className='fas fa-shopping-cart'></i>
                            Add to Cart
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ProductDetail