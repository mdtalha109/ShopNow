import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Col, Row } from 'react-bootstrap';

import Product from '../components/Product'

const HomeScreen = () => {
    
    var [products, setProducts ] = useState([]);
    const [loading, setLoading] = useState(false);
    
    useEffect(()=> {
        
        const fetchProducts = async () => {
            const {data} = await axios.get('http://localhost:5000/api/products');
            setProducts(data);
            setLoading(true);
            
        }
        fetchProducts();
    });

    return (
       <>
            <h1>Latest Products</h1>

            {!loading && <h6>Product Loading </h6>}

            {loading && <Row className="container-cc">
                {products.map(product => (
                    <Col sm={12} md={6} lg={4} xl={3 }>
                        <Product product = {product}/> 
                    </Col>
                ))}
                
            </Row>
            }
       </>
    )
}

export default HomeScreen
