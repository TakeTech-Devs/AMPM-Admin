import React, { useEffect, useState } from 'react'
import { Form, Container, Row, Col, Button, Table } from "react-bootstrap";
import "../styles/Dashboard.scss";
import "../styles/Global.scss";
import { useDispatch, useSelector } from 'react-redux';
import { clearErrors, getOrder, updateOrder } from '../Actions/OrderActions';
import EditIcon from '@mui/icons-material/Edit';
import Modal from 'react-bootstrap/Modal';
import { UPDATE_ADMIN_ORDER_RESET } from '../Constants/OrderConstants';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import BlockIcon from '@mui/icons-material/Block';
import FileDownloadIcon from '@mui/icons-material/FileDownload';


const Orders = () => {

    const dispatch = useDispatch();

    const [duration, setDuration] = useState("");

    const { orders, error, loading } = useSelector((state) => state.adminOrders);

    const { error: updateError, isUpdated } = useSelector((state) => state.order);

    useEffect(() => {
        if (error) {
            alert(error);
            dispatch(clearErrors());
        }
        dispatch(getOrder(duration));
    }, [dispatch, error, duration]);

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

    const exportToCSV = () => {
        if (!orders || orders.length === 0) {
            alert("No data available to export.");
            return;
        }

        // Prepare the CSV header and rows
        const headers = [
            "Order ID",
            "Shipping Info",
            "Order Items",
            "Amount",
            "Order Date",
            "Order Status",
        ];

        // Reverse the data rows
        let totalAmount = 0; // Initialize total amount
    const rows = orders
        .slice()
        .reverse() // Reverse the array for most recent orders first
        .map((order) => {
            totalAmount += order.totalPrice || 0; // Add each order's totalPrice to the total amount

            return [
                order._id || "N/A",
                `${order.shippingInfo?.firstName || "N/A"} ${order.shippingInfo?.lastName || "N/A"}, 
                ${order.shippingInfo?.address || "N/A"}, ${order.shippingInfo?.city || "N/A"}, 
                ${order.shippingInfo?.pin || "N/A"}, ${order.shippingInfo?.state || "N/A"}, 
                ${order.shippingInfo?.country || "N/A"}, Phone: ${order.shippingInfo?.phone || "N/A"}, 
                Email: ${order.shippingInfo?.email || "N/A"}`,
                order.orderItems.map(item => `${item.name} (Qty: ${item.quantity})`).join("; ") || "N/A",
                order.totalPrice || "N/A",
                new Date(order.paidAt).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
                order.orderStatus || "N/A",
            ];
        });

    // Add a row for the total amount
    rows.push(["", "", "", `Total Amount: ${totalAmount}`, "", ""]);

        // Combine header and rows into a CSV string
        const csvContent =
            [headers, ...rows]
                .map((row) => row.map((value) => `"${value}"`).join(","))
                .join("\n");


        // Create a blob and trigger download
        const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
        const link = document.createElement("a");
        const url = URL.createObjectURL(blob);

        link.setAttribute("href", url);
        link.setAttribute("download", `Orders_${duration || "All"}.csv`);
        link.style.display = "none";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };



    return (
        <>
            <div className="cardbox">
                <h3>Orders List</h3>
                <Container>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "5px" }}>
                        <Form.Group controlId="filter" style={{ flex: 1 }}>
                            <Form.Label style={{ paddingRight: "15px" }}>Filter by Order Date</Form.Label>
                            <Form.Select
                                style={{ width: "70%", display: "inline-block", marginRight: "10px" }}
                                value={duration}
                                onChange={(e) => setDuration(e.target.value)}
                            >
                                <option value="">All</option>
                                <option value="3months">Last 3 Months</option>
                                <option value="6months">Last 6 Months</option>
                                <option value="1year">Last 1 Year</option>
                            </Form.Select>
                            <Button
                                variant="success"
                                onClick={exportToCSV}
                                style={{ marginTop: "13px", height: "fit-content" }}
                            >
                                <FileDownloadIcon />
                            </Button>
                        </Form.Group>
                    </div>
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
                    <Form>
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
                    <Button variant="success" type="submit" onClick={submitOrderUpdate}>
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Orders