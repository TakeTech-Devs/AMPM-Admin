import React from 'react';
import { useEffect } from 'react';
import { Form, Container, Row, Col, Button, Table, Spinner } from "react-bootstrap";
import { useSelector, useDispatch } from 'react-redux';
import { clearErrors, getContactQueries, queriseResolve } from '../Actions/ContactAction';
import Swal from 'sweetalert2';
import { QUERIES_RESOLVED_RESET } from '../Constants/ContactConstants';

const Queries = () => {

    const dispatch = useDispatch();

    const { contactUsData, loading, error } = useSelector(state => state.adminContact);
    const { error: approveError, isApproved, loading: approveLoading } = useSelector((state) => state.querise);

    useEffect(() => {
        dispatch(getContactQueries());

        if (error) {
            alert(error);
            dispatch(clearErrors());
        }
        if (isApproved) {
            window.alert("Querie Resolved Successfully");
            // navigate("/admin/products");
            dispatch({ type: QUERIES_RESOLVED_RESET });

        }
    }, [dispatch, error, isApproved]);

    const queriseResolveHandler = (id) => {
        dispatch(queriseResolve(id));
        // window.location.reload();
    }

    const showAlert = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'Do you want to resolve this queries?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, resolve it!'
        }).then((result) => {
            if (result.isConfirmed) {
                queriseResolveHandler(id)
                Swal.fire(
                    'Resolved!',
                    'The queries has been resolved successfully.',
                    'success'
                ).then(() => {
                    window.location.reload(); // Reload the page after clicking OK
                });
            }
        });
    }

    return (
        <>
            <div className="cardbox">
                <h3>Reseller List</h3>
                <Container>
                    <Table bordered hover responsive>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Company</th>
                                <th>Message</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {contactUsData && contactUsData.length > 0 ? (
                                // Reverse the reseller array
                                [...contactUsData].reverse().map((user, index) => ( // Use spread operator to avoid mutating the original array
                                    <tr key={index}>
                                        <td>{user.name || "N/A"}</td>
                                        <td>{user.email || "N/A"}</td>
                                        <td>{user.phone || "N/A"}</td>
                                        <td>{user.company || "N/A"}</td>
                                        <td>{user.message || "N/A"}</td>
                                        <td>{user.status ? "Reslove" : "Not Reslove"}</td>
                                        <td>
                                            {user.status ? (
                                                <Button variant="secondary" disabled >Resolved</Button>
                                            ) : (
                                                <Button variant="success" onClick={() => showAlert(user._id)}>Resolve</Button>
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

export default Queries
