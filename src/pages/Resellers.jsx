import React, { useEffect } from 'react'
import { Form, Container, Row, Col, Button, Table } from "react-bootstrap";
import "../styles/Dashboard.scss";
import "../styles/Global.scss";
import { useDispatch, useSelector } from 'react-redux';
import { approveReseller, clearErrors, getReseller } from '../Actions/ResellerActions';
import { RESELLER_APPROVE_RESET } from '../Constants/ResellerConstants';

const Resellers = () => {
    const dispatch = useDispatch();

    const { reseller, error, loading } = useSelector((state) => state.adminReseller);

    useEffect(() => {
        if (error) {
            alert(error);
            dispatch(clearErrors());
        }
        dispatch(getReseller());
    }, [dispatch, error]);

    const { error: approveError, isApproved, loading: approveLoading } = useSelector((state) => state.resellerApprove);

    const approveProductHandler = (id) => {
        dispatch(approveReseller(id));
        window.location.reload();
    }

    useEffect(() => {
        if (approveError) {
            window.alert(approveError);
            dispatch(clearErrors);
        }

        if (isApproved) {
            window.alert("Product Approve Successfully");
            // navigate("/admin/products");
            dispatch({ type: RESELLER_APPROVE_RESET });

        }
    }, [dispatch, isApproved, approveError])




    return (
        <>
            <div className="cardbox">
                <h3>Reseller List</h3>
                <Container>
                    <Table bordered hover responsive>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Business Name</th>
                                <th>Business Type</th>
                                <th>ABN</th>
                                <th>Business Email</th>
                                <th>Business Website</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {reseller && reseller.length > 0 ? (
                                // Reverse the reseller array
                                [...reseller].reverse().map((user, index) => ( // Use spread operator to avoid mutating the original array
                                    <tr key={index}>
                                        <td>{user.fullName || "N/A"}</td>
                                        <td>{user.businessName || "N/A"}</td>
                                        <td>{user.businessType || "N/A"}</td>
                                        <td>{user.abn || "N/A"}</td>
                                        <td>{user.businessEmail || "N/A"}</td>
                                        <td>{user.businessWebsite || "N/A"}</td>
                                        <td>
                                            {user.approvalStatus ? (
                                                <Button variant="success" onClick={() => approveProductHandler(user._id)}>Approved</Button>
                                            ) : (
                                                <Button variant="danger" onClick={() => approveProductHandler(user._id)}>Not Approved</Button>
                                            )}
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="8" className="text-center">No reseller found</td>
                                </tr>
                            )}
                        </tbody>

                    </Table>
                </Container>
            </div>
        </>
    )
}

export default Resellers