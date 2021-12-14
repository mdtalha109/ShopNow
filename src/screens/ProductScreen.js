import React from 'react';

import Rating from '../components/Rating';
import products from '../products';

const ProductScreen = ({match}) => {
    const product = product.find(p => p._id === match.params.id)
    return (
        <div>
            
        </div>
    )
}

export default ProductScreen
