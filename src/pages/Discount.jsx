import React, { useEffect, useState } from 'react';
import { Form, Container, Row, Col, Button, Table } from 'react-bootstrap';
import '../styles/Dashboard.scss';
import '../styles/Global.scss';
import AddIcon from '@mui/icons-material/Add';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const Discount = () => {
    return (
        <div className="cardbox">
            <h3>Discounts</h3>
            <Container>
                <Row>
                    <Form>
                        <Col lg={12}>
                            <Form.Control
                                type="text"
                                placeholder="Discount Number"
                                
                            />
                        </Col>
                        <Col lg={12} className="d-flex align-items-center">
                            <Form.Control
                                type="text"
                                placeholder="Discount Code"
                            />
                            <Button variant="outline-success" className="ms-2">
                                <AddIcon style={{ fontSize: "20px" }} />
                            </Button>
                        </Col>
                        <Col lg={12} className="mt-2">
                            
                                <div
                                    // key={i}
                                    className="d-flex justify-content-between align-items-center p-2 mb-2 border rounded bg-light">
                                    <span className="text"></span>
                                    <Button className="d-flex justify-content-center btn-highlight" variant="outline-danger">
                                        <DeleteForeverIcon style={{ fontSize: "20px" }} />
                                    </Button>
                                </div>
                            
                        </Col>
                        <Col xs={12} className="d-flex justify-content-end gap-2 mt-2">
                            <Button variant="danger" >
                                Clear
                            </Button>
                            <Button variant="success">
                                Submit
                            </Button>
                        </Col>
                    </Form>
                </Row>
                <Table bordered hover responsive>
                    <thead>
                        <tr>
                            <th>Discount Number</th>
                            <th>Discount Code</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={{ width: "600px" }}>1</td>
                            <td>
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                        marginBottom: "8px",
                                    }}
                                >
                                    <span style={{ marginBottom: "20px" }}></span>
                                    <Button
                                        variant="outline-danger"
                                        className='d-flex align-items-center justify-content-center'
                                        style={{ padding: "4px", minWidth: "32px" }}
                                    >
                                        <DeleteForeverIcon style={{ fontSize: "20px" }} />
                                    </Button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </div>

    )
}

export default Discount