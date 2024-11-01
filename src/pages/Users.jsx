import React, { useEffect } from 'react'
import { Form, Container, Row, Col, Button, Table } from "react-bootstrap";
import "../styles/Dashboard.scss";
import "../styles/Global.scss";
import { useDispatch, useSelector } from 'react-redux';
import { clearErrors, getConsumers } from '../Actions/ConsumerActions';

const Users = () => {

    const dispatch = useDispatch();

    const { consumer, error, loading } = useSelector((state) => state.adminConsumer);

    useEffect(() => {
        if (error) {
            alert(error);
            dispatch(clearErrors());
        }
        dispatch(getConsumers());
    }, [dispatch, error]);


    return (
        <>
            <div className="cardbox">
                <h3>Consumer List</h3>
                <Container>
                    <Table bordered hover responsive>
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Address</th>
                                <th>Suburb</th>
                                <th>Sate</th>
                                <th>PIN</th>
                            </tr>
                        </thead>
                        <tbody>
                            {consumer && consumer.length > 0 ? (
                                // Reverse the consumer array
                                [...consumer].reverse().map((user, index) => ( // Use spread operator to avoid mutating the original array
                                    <tr key={index}>
                                        <td>{user.firstName || "N/A"}</td>
                                        <td>{user.lastName || "N/A"}</td>
                                        <td>{user.email || "N/A"}</td>
                                        <td>{user.phone || "N/A"}</td>
                                        <td>{user.address || "N/A"}</td>
                                        <td>{user.suburb || "N/A"}</td>
                                        <td>{user.state || "N/A"}</td>
                                        <td>{user.pinCode || "N/A"}</td>
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

export default Users