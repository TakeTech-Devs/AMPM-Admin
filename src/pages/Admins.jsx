import React, { useEffect } from 'react'
import { Form, Container, Row, Col, Button, Table } from "react-bootstrap";
import "../styles/Dashboard.scss";
import "../styles/Global.scss";
import { useDispatch, useSelector } from 'react-redux';
import { clearErrors, getAdmin } from '../Actions/AdminAction';

export const Admins = () => {

    const dispatch = useDispatch();

    const { admin, error, loading } = useSelector((state) => state.adminList);

    useEffect(() => {
        if (error) {
            alert(error);
            dispatch(clearErrors());
        }
        dispatch(getAdmin());
    }, [dispatch, error]);

    return (

        <>
            <div className="cardbox">
                <h3>Admin List</h3>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <Form.Control type="text" placeholder="Admin Name" />
                        </Col>
                        <Col lg={12}>
                            <Form.Control type="text" placeholder="Admin Email" />
                        </Col>

                        <Col xs={12} className=" d-flex justify-content-end gap-2">
                            <Button variant="danger">Cancel</Button>
                            <Button variant="success">Submit</Button>
                        </Col>
                    </Row>
                    <Table bordered hover responsive>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* <tr>
                                <td>Mark</td>
                                <td>Otto</td>
                            </tr> */}
                            {admin && admin.length > 0 ? (
                                admin.map((user, index) => (
                                    <tr key={index}>
                                        <td>{user.name || "N/A"}</td>
                                        <td>{user.email || "N/A"}</td>
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
