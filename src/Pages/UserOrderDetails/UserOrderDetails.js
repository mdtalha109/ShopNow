import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Container } from "react-bootstrap"
import { useParams } from "react-router-dom";
import ReactToPrint from "react-to-print";
import Card from "../../components/Card/Card";
import { remote_config } from "../../config/remoteURL";
import './userOrderDetails.css'



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
        <Container className="orderDetails_container" ref= {ref}>
            <h1>Order Details: #{id}</h1>
            <br/>
            {OrderDetails && 
                <div>
                    <Card style={{ fontSize:"1.2rem" }}>
                        <div >
                        <h3>Cusotmer Details:</h3>
                        <div>Name: {OrderDetails.shippingAddress.address}</div>
                        <div>Email Id: {OrderDetails.shippingAddress.city}</div>
                        </div>

                        <hr/>

                        <div className="orderDetails_container-address_details">
                        <h3>Shipping Address:</h3>
                        <div>Address: {OrderDetails.shippingAddress.address}</div>
                        <div>City: {OrderDetails.shippingAddress.city}</div>
                        <div>Postal Code: {OrderDetails.shippingAddress.postalCode}</div>
                        <div>Country: {OrderDetails.shippingAddress.country}</div>
                        </div>
                    
                        <hr/>

                    
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

        {
            OrderDetails &&  
                <Container className="mt-4">
                    <ReactToPrint
                        bodyClass="print-agreement"
                        content={() => ref.current}
                        trigger={() => (
                            <button className="download_button">Download Reciept</button>
                         )}
                    />


                </Container>
        }
        </>
    )
}

export default UserOrderDetails