import axios from "axios";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap"
import { useParams } from "react-router-dom";
import Card from "../../components/Card/Card";
import { remote_config } from "../../config/remoteURL";
import './userOrderDetails.css'

const UserOrderDetails = () => {

    const id = useParams().order_id;
    const [OrderDetails, setOrderDetails] = useState();

    useEffect(async () => {
        const { data } = await axios.post(`${remote_config.BACKEND_URL}/api/orders/getOrderDetail`, { order_id: id })

        setOrderDetails(data)
    }, [])



    return (
        <Container className="orderDetails_container">
            <h1>Order Details: #{id}</h1>
            <br/>
            {OrderDetails &&
                <div>
                    <Card>
                        <h3>Delivery Address:</h3>
                        <div>{OrderDetails.shippingAddress.address}</div>
                        <div>{OrderDetails.shippingAddress.city}</div>
                        <div>{OrderDetails.shippingAddress.postalCode}</div>
                        <div>{OrderDetails.shippingAddress.country}</div>
                    </Card>


                    <Card>
                        <div>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Product Name</th>
                                        <th>Quantity</th>
                                        <th>Price</th>
                                    </tr>
                                </thead>
                                
                                {OrderDetails.orderItems.map((item) =>                     
                                    <tr>
                                        <td>{item.name}</td>
                                        <td>{item.qty}</td>
                                        <td>{item.price}</td>
                                    </tr>
                                )}
                            </table>

                            <hr/>

                            <table className="total_details">                
                                    <tr>
                                        <td></td>
                                        <td> Total </td>
                                        <td>{OrderDetails.totalPrice}</td>
                                    </tr>
                                
                            </table>
                        </div>
                    </Card>
                </div>
            }



        </Container>

    )
}

export default UserOrderDetails