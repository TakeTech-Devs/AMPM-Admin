import React, { useEffect, useState } from 'react'
import { Form, Container, Row, Col, Button, Table } from "react-bootstrap";
import "../styles/Dashboard.scss";
import "../styles/Global.scss";
import { useDispatch, useSelector } from 'react-redux';
import { clearErrors, getOrder, updateOrder } from '../Actions/OrderActions';
import EditIcon from '@mui/icons-material/Edit';
import Modal from 'react-bootstrap/Modal';
import { UPDATE_ADMIN_ORDER_RESET } from '../Constants/OrderConstants';


const Orders = () => {

    const dispatch = useDispatch();

    const { orders, error, loading } = useSelector((state) => state.adminOrders);

    const { error: updateError, isUpdated } = useSelector((state) => state.order);

    useEffect(() => {
        if (error) {
            alert(error);
            dispatch(clearErrors());
        }
        dispatch(getOrder());
    }, [dispatch, error]);

    const [showEditForm, setShowEditForm] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [orderStatus, setOrderStatus] = useState("");

    useEffect(() => {
        if (isUpdated) {
            alert("Order status updated successfully");
            dispatch(getOrder());  // Refresh orders list after update
            dispatch({ type: UPDATE_ADMIN_ORDER_RESET });
            handleCloseEditForm(); // Close modal
        }
    }, [dispatch, isUpdated]);

    const handleShowEditForm = (order) => {
        setSelectedOrder(order);
        setOrderStatus(order.orderStatus);
        setShowEditForm(true);
    };
    const handleCloseEditForm = () => {
        setShowEditForm(false);
        setSelectedOrder(null);
        setOrderStatus("");
    };

    const handleStatusChange = (e) => {
        setOrderStatus(e.target.value);
    };

    const submitOrderUpdate = (e) => {
        e.preventDefault();
        if (selectedOrder && orderStatus) {
            dispatch(updateOrder(selectedOrder._id, { status: orderStatus }));
        }
    };



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
                            {orders && orders.length > 0 ? (
                                // Reverse the orders array
                                [...orders].reverse().map((user, index) => ( // Use spread operator to avoid mutating the original array
                                    <tr key={index}>
                                        <td>{user._id || "N/A"}</td>
                                        <td>
                                            {user.shippingInfo.firstName || "N/A"} {user.shippingInfo.lastName || "N/A"},
                                            {user.shippingInfo.address || "N/A"}, {user.shippingInfo.city || "N/A"},
                                            {user.shippingInfo.pin || "N/A"}, {user.shippingInfo.state || "N/A"},
                                            {user.shippingInfo.country || "N/A"}, Phone: {user.shippingInfo.phone || "N/A"},
                                            Email: {user.shippingInfo.email || "N/A"}
                                        </td>
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
                                        <td>
                                            <Button
                                                variant="outline-success"
                                                onClick={() => handleShowEditForm(user)}
                                            >
                                                <EditIcon style={{ fontSize: "20px" }} />
                                            </Button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="8" className="text-center">No order found</td>
                                </tr>
                            )}
                        </tbody>

                    </Table>
                </Container>
            </div>

            <Modal show={showEditForm} onHide={handleCloseEditForm}>
                <Modal.Header closeButton>
                    <Modal.Title>Order Update - {selectedOrder?._id}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={submitOrderUpdate}>
                        <Form.Group className="mb-3" controlId="formOrderStatus">
                            <Form.Label>Update Order Status</Form.Label>
                            <Form.Select
                                value={orderStatus}
                                onChange={handleStatusChange}
                                aria-label="Select Order Status"
                            >
                                <option value="">Select Status</option>
                                {selectedOrder?.orderStatus !== "Shipped" && selectedOrder?.orderStatus !== "Delivered" && (
                                    <option value="Shipped">Shipped</option>
                                )}
                                {selectedOrder?.orderStatus === "Shipped" && (
                                    <option value="Delivered">Delivered</option>
                                )}
                            </Form.Select>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleCloseEditForm}>
                        Close
                    </Button>
                    <Button variant="success" type="submit">
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Orders