import React from "react";
import { Link } from "react-router-dom";

import Rating from './Rating';


const Product = ({product}) => {
    return(
        

            <div className="card">
                <Link to={`/product/${product._id}`}>

                     {/* <Card.Img src={product.image} /> */}
                     <div className="card-image">
                         <img src={product.image} alt=""/>
                     </div>

                     <div className="card-title">
                         {product.name}
                     </div>

                     <div className="card-rating">
                         {/* {`${product.rating} from ${product.numReviews}`} */}
                         <Rating value={product.rating} text= {`${product.numReviews} reviews`}/>
                     </div>

                     <div className="card-price">
                         {product.price}
                     </div>
                </Link>
                     <button className="card-add_to_cart">
                         Add to Cart
                     </button>
                 
            </div>

    )
}

export default Product;