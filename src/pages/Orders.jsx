import React, { useEffect } from 'react'
import { Form, Container, Row, Col, Button, Table } from "react-bootstrap";
import "../styles/Dashboard.scss";
import "../styles/Global.scss";
import { useDispatch, useSelector } from 'react-redux';
import { clearErrors, getOrder } from '../Actions/OrderActions';

const Orders = () => {

    const dispatch = useDispatch();

    const { orders, error, loading } = useSelector((state) => state.adminOrders);

    useEffect(() => {
        if (error) {
            alert(error);
            dispatch(clearErrors());
        }
        dispatch(getOrder());
    }, [dispatch, error]);


    return (
        <>
            <div className="cardbox">
                <h3>Orders List</h3>
                <Container>
                    <Table bordered hover responsive>
                        <thead>
                            <tr>
                                <th>Order ID</th>
                                <th>Shipping Info</th>
                                <th>Order Items</th>
                                <th>Amount</th>
                                <th>Order Date</th>
                                <th>Order Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* <tr>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                                <td>@mdo</td> 
                                <td>@mdo</td> 
                            </tr> */}
                            {orders && orders.length > 0 ? (
                                orders.map((user, index) => (
                                    <tr key={index}>
                                        <td>{user._id || "N/A"}</td>
                                        <td>{user.shippingInfo.firstName || "N/A"} {user.shippingInfo.lastName || "N/A"}, {user.shippingInfo.address || "N/A"}, {user.shippingInfo.city || "N/A"}, {user.shippingInfo.pin || "N/A"}, {user.shippingInfo.state || "N/A"}, {user.shippingInfo.country || "N/A"},  Phone: {user.shippingInfo.phone || "N/A"}, Email: {user.shippingInfo.email || "N/A"}</td>
                                        <td>
                                            <Table bordered>
                                                <thead>
                                                    <tr>
                                                        <th>Product Name</th>
                                                        <th>Price</th>
                                                        <th>Quantity</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {user.orderItems.map((item, itemIndex) => (
                                                        <tr key={itemIndex}>
                                                            <td>{item.name}</td>
                                                            <td>{item.price}</td>
                                                            <td>{item.quantity}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </Table>
                                        </td>
                                        <td>{user.totalPrice}</td>
                                        <td>{new Date(user.paidAt).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}</td>
                                        <td>{user.orderStatus}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="8" className="text-center">No consumers found</td>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                </Container>
            </div>
        </>
    )
}

export default Orders