import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Container } from "react-bootstrap"
import { useParams } from "react-router-dom";
import ReactToPrint from "react-to-print";

import { remote_config } from "../../config/remoteURL";

import Card from "../../components/ui/Card";

import styles from "./index.module.css"
import Table from "../../components/ui/Table";
import Button from "../../components/ui/Button";



const UserOrderDetails = () => {

    const id = useParams().order_id;
    const [OrderDetails, setOrderDetails] = useState();

    useEffect(async () => {
        const { data } = await axios.post(`${remote_config.BACKEND_URL}/api/orders/get-order-detail`, { order_id: id })
        setOrderDetails(data)
    }, [])

    const ref = useRef();



    return (
        <>
            <Container className={styles.order_details_container} ref={ref}>
                {OrderDetails &&

                    <Card >
                        <Card.Header style={{ backgroundColor: "rgb(228, 228, 231", display: "flex" }}>
                            <div >
                                <div>
                                    <h2 style={{ fontWeight: "bold", textTransform: "lowercase" }}>Order #{id}</h2>
                                    <p>Placed on June 15, 2023</p>
                                </div>
                            </div>
                        </Card.Header>


                        <Card.Content>
                            <div className="orderDetails_container-address_details">
                                <h2 style={{ fontWeight: "bold", textTransform: "lowercase" }}>Shipping Address</h2>
                                <div>Address: {OrderDetails.shippingAddress.address}</div>
                                <div>City: {OrderDetails.shippingAddress.city}</div>
                                <div>Postal Code: {OrderDetails.shippingAddress.postalCode}</div>
                                <div>Country: {OrderDetails.shippingAddress.country}</div>
                            </div>
                        </Card.Content>

                        <Card.Content>

                            <h2 style={{ fontWeight: "bold", textTransform: "lowercase" }}>Order Summary</h2>

                            <Table>
                                <Table.Head>
                                    <Table.Row>
                                        <Table.Column>Product Name</Table.Column>
                                        <Table.Column>Quantity</Table.Column>
                                        <Table.Column>Price</Table.Column>
                                    </Table.Row>
                                </Table.Head>

                                <Table.Body>
                                    {OrderDetails.orderItems.map((item) =>
                                        <Table.Row>
                                            <Table.Cell>{item.name}</Table.Cell>
                                            <Table.Cell>{item.qty}</Table.Cell>
                                            <Table.Cell>{item.price}</Table.Cell>
                                        </Table.Row>
                                    )}

                                    <Table.Row>
                                        <Table.Cell></Table.Cell>
                                        <Table.Cell> Total </Table.Cell>
                                        <Table.Cell>{OrderDetails.totalPrice}</Table.Cell>
                                    </Table.Row>
                                </Table.Body>
                            </Table>
                        </Card.Content>
                    </Card>

                }
            </Container>

            {
                OrderDetails &&
                <Container className={styles.download_reciept_container}>
                    <ReactToPrint
                        bodyClass="print-agreement"
                        content={() => ref.current}
                        trigger={() => (
                            <Button>Download Reciept</Button>
                        )}
                    />
                </Container>
            }
        </>
    )
}

export default UserOrderDetails