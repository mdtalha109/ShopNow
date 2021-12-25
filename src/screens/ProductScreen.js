import React, {useState, useEffect } from 'react';
import {Link, useParams, useNavigate} from 'react-router-dom'
import {Row, Col, Image, ListGroup, Card, Form} from 'react-bootstrap'
import Rating from '../components/Rating'
import products from '../products' 
import { useDispatch, useSelector } from 'react-redux';
import { listProductDetails } from '../actions/productAction';


const ProductScreen = ({match}) => {
    
    const navigate = useNavigate();
    
    
    const [qty, setQty] = useState(1);

    const id = useParams().id
    

    const dispatch = useDispatch()

    const productDetails = useSelector(state => state.productDetails)
    const {loading, product} = productDetails

     useEffect(()=> {
        dispatch(listProductDetails(id))
    }, [dispatch, match])

    

    const addToCartHandler = () => {

        navigate(`/cart/${product._id}?qty=${qty}`);  
    }
    
    return (
        <>
           <Link className='btn btn-dark my-3' to="/">Go Back</Link>
           {loading && <p>Loading</p>}
           <Row>
               <Col md={6}>
                    {!loading && <Image src={product.image} alt={product.name} fluid/>}
               </Col>
 
               <Col md={3}>
                    {!loading && <ListGroup variant='flush'>
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
                    </ListGroup>}
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

                            {product.countInStock >0 && (
                                <ListGroup.Item>
                                    <Row>
                                        <Col>Qty</Col>
                                        <Col>
                                            <Form.Control as='select' value={qty} onChange={(e) => setQty(Number(e.target.value))}>
                                               { [...Array(product.countInStock).keys()].map(x => (
                                                    <option key={x+1} value={x+1}>
                                                        {x+1}
                                                    </option>
                                                ))
                                               }
                                            </Form.Control>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                            )} 

                            <ListGroup.Item>
                            <button className={` ${product.countInStock===0? 'btn-disabled': 'card-add_to_cart'}`} 
                                    disabled={product.countInStock===0}
                                    onClick={addToCartHandler}                
                            >
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
