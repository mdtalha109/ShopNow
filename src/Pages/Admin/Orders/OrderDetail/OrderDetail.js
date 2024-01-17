import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import Card from '../../../../components/Card/Card';
import Button from '../../../../components/ui/Button';
import { useSelector } from 'react-redux';

const OrderDetail = () => {
    const { order_id } = useParams();

    const [orderDetails, setOrderDetails] = useState();

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const config = {
        headers: {
            Authorization: `Bearer ${userInfo.token}`,
        },
    };

    const markOrderAsDelivered = async () => {
        const orderDelivered = await axios.patch(`http://localhost:2000/api/orders/deliver/${order_id}`, config);
        if (orderDelivered.status < 300) {
            setOrderDetails((prev) => (
                { ...prev, isDelivered: true }
            ))
        }
    }

    useEffect(() => {

        (async function fetchData() {
            let order = await axios.post('http://localhost:2000/api/orders/get-order-detail', { order_id })
            setOrderDetails(order.data)
        })();

    }, [order_id])
    return (
        <>
            <Container className="orderDetails_container" >
                <h1>Order Details: #{order_id}</h1>

                {orderDetails &&
                    <>
                        <div>
                            <Card style={{ fontSize: "1.2rem" }}>
                                <div className="orderDetails_container-customer_details">
                                    <h3>Cusotmer Details:</h3>
                                    <div>Name: {orderDetails?.user?.name}</div>
                                    <div>Email Id: {orderDetails?.shippingAddress?.city}</div>
                                </div>

                                <hr />

                                <div className="orderDetails_container-address_details">
                                    <h3>Shipping Address:</h3>
                                    <div>Address: {orderDetails?.shippingAddress?.address}</div>
                                    <div>City: {orderDetails?.shippingAddress?.city}</div>
                                    <div>Postal Code: {orderDetails?.shippingAddress?.postalCode}</div>
                                    <div>Country: {orderDetails?.shippingAddress?.country}</div>
                                </div>

                                <hr />
                                <div>
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Product Name</th>
                                                <th>Quantity</th>
                                                <th>Price</th>
                                            </tr>
                                        </thead>

                                        {orderDetails?.orderItems?.map((item) =>
                                            <tr>
                                                <td>{item.name}</td>
                                                <td>{item.qty}</td>
                                                <td>{item.price}</td>
                                            </tr>
                                        )}
                                    </table>

                                    <hr />

                                    <table className="total_details">
                                        <tr>
                                            <td></td>
                                            <td> Total </td>
                                            <td>{orderDetails?.totalPrice}</td>
                                        </tr>

                                    </table>
                                </div>
                                <Button onClick={markOrderAsDelivered}>
                                    {orderDetails.isDelivered ? "Order Delivered" : "Mark as Delivered"}
                                </Button>
                            </Card>


                        </div>


                    </>
                }
            </Container>

        </>
    )
}

export default OrderDetail