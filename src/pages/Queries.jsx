import React from 'react';
import { useEffect } from 'react';
import { Form, Container, Row, Col, Button, Table, Spinner } from "react-bootstrap";
import { useSelector, useDispatch } from 'react-redux';
import { clearErrors, getContactQueries } from '../Actions/ContactAction';

const Queries = () => {

    const dispatch = useDispatch();

    const { contactUsData, loading, error } = useSelector(state => state.adminContact);

    useEffect(() => {
        dispatch(getContactQueries());

        if (error) {
            alert(error);
            dispatch(clearErrors());
        }
    }, [dispatch, error]);

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
                                        <td></td>
                                        <td></td>
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
