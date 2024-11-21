import React, { useEffect, useState } from 'react';
import { Form, Container, Row, Col, Button, Table } from 'react-bootstrap';
import '../styles/Dashboard.scss';
import '../styles/Global.scss';
import AddIcon from '@mui/icons-material/Add';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useDispatch, useSelector } from 'react-redux';
import { approveCoupon, clearErrors, createCoupon, deleteCoupon, getDiscounts } from '../Actions/DiscountActions';
import Swal from 'sweetalert2';
import { DISCOUNT_APPROVE_RESET, DISCOUNT_DELETE_RESET } from '../Constants/discountConstants';

const Discount = () => {
    const dispatch = useDispatch();

    const { discountCoupon, error, loading } = useSelector((state) => state.discountCoupon);

    const { error: approveError, isApproved, loading: approveLoading } = useSelector((state) => state.discountApprove);

    const { error: newCouponError, loading: newCouponLoading } = useSelector((state) => state.createCoupon);

    const approveCouponHandler = (id) => {
        dispatch(approveCoupon(id))
    }

    const showApproveAlert = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'Do you want to active this coupon?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, active it!'
        }).then((result) => {
            if (result.isConfirmed) {
                approveCouponHandler(id); // Call the function here if confirmed
                Swal.fire(
                    'Activet!',
                    'The coupon has been actived successfully.',
                    'success'
                ).then(() => {
                    window.location.reload(); // Reload the page after clicking OK
                });
            }
        });
    };

    const showAlert = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'Do you want to deactive this coupon?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, deactive it!'
        }).then((result) => {
            if (result.isConfirmed) {
                approveCouponHandler(id); // Call the function here if confirmed
                Swal.fire(
                    'Deactive!',
                    'The coupon has been deactived successfully.',
                    'success'
                ).then(() => {
                    window.location.reload(); // Reload the page after clicking OK
                });
            }
        });
    }

    const approveDeleteHandler = (id) => {
        dispatch(deleteCoupon(id))
    }

    const showDeleteAlert = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'Do you want to delete this coupon?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                approveDeleteHandler(id); // Call the function here if confirmed
                Swal.fire(
                    'Deleted!',
                    'The coupon has been deleted successfully.',
                    'success'
                ).then(() => {
                    window.location.reload(); // Reload the page after clicking OK
                });
            }
        });
    }


    const [formData, setFormData] = useState({
        code: '',
        discountType: 'percentage',
        discountValue: '',
        minPurchaseAmount: '',
        expiryDate: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };


    const handleClear = () => {
        setFormData({
            code: '',
            discountType: 'percentage',
            discountValue: '',
            minPurchaseAmount: '',
            expiryDate: '',
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();


        const formattedData = {
            ...formData,
            discountValue: parseFloat(formData.discountValue || 0), // Convert to number
            minPurchaseAmount: parseFloat(formData.minPurchaseAmount || 0), // Convert to number
        };

        dispatch(createCoupon(formattedData))

        window.alert("New Coupon Added")
        window.location.reload()
    };

    useEffect(() => {
        if (error) {
            window.alert(error);
            dispatch(clearErrors());
        }
        if (approveError) {
            window.alert(approveError);
            dispatch(clearErrors);
        }
        if (isApproved) {
            window.alert("Successfully Completred");
            // navigate("/admin/products");
            dispatch({ type: DISCOUNT_APPROVE_RESET });
            dispatch({ type: DISCOUNT_DELETE_RESET });


        }
        if (newCouponError) {
            window.alert(newCouponError);
            dispatch(clearErrors());
        }
        dispatch(getDiscounts())
    }, [dispatch, error, approveError, isApproved, newCouponError])

    return (
        <div className="cardbox">
            <h3>Discounts</h3>
            <Container>
                <Row>
                    <Form onSubmit={handleSubmit}>
                        <Row className="mb-3">
                            <Col lg={12}>
                                <Form.Control
                                    type="text"
                                    name="code"
                                    placeholder="Discount Code"
                                    value={formData.code}
                                    onChange={handleChange}
                                    required
                                />
                            </Col>
                        </Row>
                        {/* <Row className="mb-3">
                            <Col lg={12}>
                                <Form.Select
                                    name="discountType"
                                    value={formData.discountType}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="percentage">Percentage</option>
                                    <option value="fixed">Fixed Amount</option>
                                </Form.Select>
                            </Col>
                        </Row> */}
                        <Row className="mb-3">
                            <Col lg={12}>
                                <Form.Label>Discount Type</Form.Label>
                                <div className="d-flex gap-3">
                                    <Form.Check
                                        type="radio"
                                        name="discountType"
                                        value="percentage"
                                        id="discountTypePercentage"
                                        label="Percentage"
                                        onChange={handleChange}
                                        checked={formData.discountType === "percentage"}
                                        required
                                    />
                                    <Form.Check
                                        type="radio"
                                        name="discountType"
                                        value="fixed"
                                        id="discountTypeFixed"
                                        label="Fixed Amount"
                                        onChange={handleChange}
                                        checked={formData.discountType === "fixed"}
                                        required
                                    />
                                </div>
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col lg={12}>
                                <Form.Control
                                    type="number"
                                    name="discountValue"
                                    placeholder="Discount Value"
                                    value={formData.discountValue}
                                    onChange={handleChange}
                                    required
                                    min="0"
                                    step="0.01"
                                />
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col lg={12}>
                                <Form.Control
                                    type="number"
                                    name="minPurchaseAmount"
                                    placeholder="Minimum Purchase Amount"
                                    value={formData.minPurchaseAmount}
                                    onChange={handleChange}
                                    min="0"
                                    step="0.01"
                                />
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col lg={12}>
                                <Form.Control
                                    type="date"
                                    name="expiryDate"
                                    placeholder="Expiry Date"
                                    value={formData.expiryDate}
                                    onChange={handleChange}
                                    required
                                />
                            </Col>
                        </Row>
                        <Row className="d-flex justify-content-end gap-2 mt-2">
                            <Col xs="auto">
                                <Button variant="danger" onClick={handleClear}>
                                    Clear
                                </Button>
                            </Col>
                            <Col xs="auto">
                                <Button variant="success" type="submit">
                                    Submit
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </Row>
                <Table bordered hover responsive>
                    <thead>
                        <tr>
                            <th>Discount Code</th>
                            <th>Discount Type</th>
                            <th>Discount Value</th>
                            <th>Minimum Purchase Amount</th>
                            <th>Expiry Date</th>
                            <th>isActive</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {discountCoupon && discountCoupon.length > 0 ? (
                            discountCoupon
                                .reverse()
                                .map((item) => (
                                    <tr key={item._id}>
                                        <td>{item.code || "N/A"}</td>
                                        <td>{item.discountType || "N/A"}</td>
                                        <td>{item.discountValue ? item.discountValue.toString() : "N/A"}{item.discountType == 'percentage' ? '%' : '/-'}</td>
                                        <td>{item.minPurchaseAmount ? item.minPurchaseAmount.toString() : "N/A"}/-</td>
                                        <td>{new Date(item.expiryDate).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}</td>
                                        <td>
                                            {item.isActive ? (
                                                // <p>Active</p>
                                                <Button variant="success" onClick={() => showAlert(item._id)}>Active</Button>
                                            ) : (
                                                // <p>Not Active</p>
                                                <Button variant="danger" onClick={() => showApproveAlert(item._id)}>Not Active</Button>
                                            )}
                                        </td>
                                        <td><Button variant="danger" onClick={() => showDeleteAlert(item._id)}>Delete</Button></td>
                                    </tr>
                                ))
                        ) : (
                            <tr>
                                <td colSpan="9" className="text-center">
                                    {loading ? "Loading..." : "No coupon found"}
                                </td>
                            </tr>
                        )}

                    </tbody>
                </Table>
            </Container>
        </div>

    )
}

export default Discount