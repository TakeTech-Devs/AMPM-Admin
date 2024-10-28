import React, { useEffect } from 'react'
import { Form, Container, Row, Col, Button, Table } from "react-bootstrap";
import "../styles/Dashboard.scss";
import "../styles/Global.scss";
import { useSelector, useDispatch } from 'react-redux';
import { clearErrors, getContact } from '../Actions/ContactAction';

const Contact = () => {

    const dispatch = useDispatch();

    const { contactInfo, loading, error } = useSelector(state => state.adminContact);getContact

    useEffect(() => {
        dispatch(getContact());

        if (error) {
            alert(error);
            dispatch(clearErrors());
        }
    }, [dispatch, error]);

    return (
        <>
            <div className="cardbox">
                <h3>Banner Section</h3>
                <Container>
                    <Row>
                        <Col lg={4}>
                            <Form.Control type="text" placeholder="Normal text" />
                        </Col>
                        <Col lg={4}>
                            <Form.Control type="text" placeholder="Normal text" />
                        </Col>
                        <Col xs={12} className=" d-flex justify-content-end gap-2">
                            <Button variant="danger">Cancel</Button>
                            <Button variant="success">Submit</Button>
                        </Col>
                    </Row>
                    <Table bordered hover responsive>
                        <thead>
                            <tr>
                                <th>Header Title</th>
                                <th>Header Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* <tr>
                                <td>{contactInfo.headerTitle}</td>
                                <td>{contactInfo.headerDescription}</td>
                            </tr> */}
                            {contactInfo && contactInfo.headerTitle ? (
                                <tr>
                                    <td>{contactInfo.headerTitle}</td>
                                    <td>{contactInfo.headerDescription}</td>
                                </tr>
                            ) : (
                                <tr>
                                    <td colSpan="2" className="text-center">No data found</td>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                </Container>
            </div>
            <div className="cardbox">
                <h3>Contact Information Section</h3>
                <Container>
                    <Row>
                        <Col lg={4}>
                            <Form.Control type="text" placeholder="Normal text" />
                        </Col>
                        <Col lg={4}>
                            <Form.Control type="text" placeholder="Normal text" />
                        </Col>
                        <Col lg={4}>
                            <Form.Control type="text" placeholder="Normal text" />
                        </Col>
                        <Col xs={12} className=" d-flex justify-content-end gap-2">
                            <Button variant="danger">Cancel</Button>
                            <Button variant="success">Submit</Button>
                        </Col>
                    </Row>
                    <Table bordered hover responsive>
                        <thead>
                            <tr>
                                <th>Landline</th>
                                <th>Mobile</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* <tr>
                                <td>{contactInfo.Landline}</td>
                                <td>{contactInfo.Mobile}</td>
                                <td>{contactInfo.Email}</td>
                            </tr> */}
                            {contactInfo && contactInfo.Landline ? (
                                <tr>
                                    <td>{contactInfo.Landline}</td>
                                    <td>{contactInfo.Mobile}</td>
                                    <td>{contactInfo.Email}</td>
                                </tr>
                            ) : (
                                <tr>
                                    <td colSpan="3" className="text-center">No data found</td>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                </Container>
            </div>
        </>
    )
}

export default Contact