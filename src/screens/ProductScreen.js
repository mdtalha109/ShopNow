import React from 'react';
import {Link, useParams} from 'react-router-dom'
import {Row, Col, Image, ListGroup, Card, Button} from 'react-bootstrap'
import Rating from '../components/Rating'
import products from '../products' 
import { disable } from 'express/lib/application';

const ProductScreen = ({match}) => {
    const {id} = useParams();
    const product = products.find((p) => p._id === id  )
    return (
        <>
           <Link className='btn btn-dark my-3' to="/">Go Back</Link>
           <Row>
               <Col md={6}>
                    <Image src={product.image} alt={product.name} fluid/>
               </Col>
 
               <Col md={3}>
                    <ListGroup variant='flush'>
                        <ListGroup.Item >
                            <h3 className=''>{product.name}</h3>
                        </ListGroup.Item>

                        <ListGroup.Item >
                            <h3 className='card-rating'> <Rating value={product.rating} text={`${product.numReviews} reviews`}/></h3>
                        </ListGroup.Item>

                        <ListGroup.Item >
                            Price: ${product.price}
                        </ListGroup.Item>

                        <ListGroup.Item >
                            Description: ${product.description}
                        </ListGroup.Item>
                    </ListGroup>
               </Col>

               <Col md={3}>
                    <Card>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                        Price:
                                    </Col>

                                    <Col>
                                        <strong>
                                            {product.price}
                                        </strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                        Status:  
                                    </Col>

                                    <Col>
                                        {product.countInStock > 0 ? 'In stock' : 'Out of stock'}
                                    </Col>
                                </Row>
                            </ListGroup.Item>

                            <ListGroup.Item>
                            <button className={` ${product.countInStock===0? 'btn-disabled': 'card-add_to_cart'}`} disabled={product.countInStock===0}>
                                Add to Cart
                            </button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>


           </Row>
        </>
    )
}

export default ProductScreen;
