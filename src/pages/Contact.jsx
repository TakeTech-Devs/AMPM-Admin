import React, { useEffect, useState } from 'react'
import { Form, Container, Row, Col, Button, Table } from "react-bootstrap";
import "../styles/Dashboard.scss";
import "../styles/Global.scss";
import { useSelector, useDispatch } from 'react-redux';
import { clearErrors, createContact, getContact } from '../Actions/ContactAction';
import { ADD_CONTACT_ADMIN_RESET } from '../Constants/ContactConstants';

const Contact = () => {

    const dispatch = useDispatch();

    const { contactInfo, loading, error } = useSelector(state => state.adminContact);

    useEffect(() => {
        dispatch(getContact());

        if (error) {
            alert(error);
            dispatch(clearErrors());
        }
    }, [dispatch, error]);

    const { contact: addContact, error: newHomeDataError, isUpdated, loading: updateLoading } = useSelector(state => state.newContactData);

    const [headerData, setHeaderData] = useState({
        headerTitle: '',
        headerDescription: '',
        Landline: '',
        Mobile: '',
        Email: '',
    })

    useEffect(() => {
        if (addContact) {
            setHeaderData({
                headerTitle: addContact.headerTitle,
                headerDescription: addContact.headerDescription,
                Landline: addContact.Landline,
                Mobile: addContact.Mobile,
                Email: addContact.Email
            })
        }

        if (isUpdated) {
            window.alert('Contact Page Data updated successfully');
            dispatch({ type: ADD_CONTACT_ADMIN_RESET });
            window.location.reload()
        }

        if (newHomeDataError) {
            window.alert(newHomeDataError);
            dispatch(clearErrors());
        }
    }, [addContact, isUpdated, newHomeDataError, dispatch])

    const handelHeaderInput = (e) => {
        setHeaderData({
            ...headerData,
            [e.target.name]: e.target.value,
        });
    }

    const handelHeaderInputSubmit = (e) => {
        e.preventDefault();
        dispatch(createContact(headerData));
    }

    return (
        <>
            {updateLoading && <h4>Loading....</h4>}
            <div className="cardbox">
                <h3>Banner Section</h3>
                <Container>
                    <Row>
                        <Form onSubmit={handelHeaderInputSubmit}>
                            <Col lg={12}>
                                <Form.Control type="text" placeholder="Enter New Banner Title" name='headerTitle' value={headerData.headerTitle} onChange={handelHeaderInput} />
                            </Col>
                            <Col lg={12}>
                                <Form.Control as="textarea" placeholder="Enter New Banner Description" name='headerDescription' value={headerData.headerDescription} onChange={handelHeaderInput} />
                            </Col>
                            <Col xs={12} className=" d-flex justify-content-end gap-2">
                                <Button variant="danger">Cancel</Button>
                                <Button variant="success" type='submit'>Submit</Button>
                            </Col>
                        </Form>
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
                            {contactInfo && contactInfo.length > 0 ? (
                                contactInfo.map((info, index) => (
                                    <tr key={index}>
                                        <td>{info.headerTitle}</td>
                                        <td>{info.headerDescription}</td>
                                    </tr>
                                ))
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
                        <Form onSubmit={handelHeaderInputSubmit}>
                            <Col lg={12}>
                                <Form.Control type="text" placeholder="Enter New Landline Number" name='Landline' value={headerData.Landline} onChange={handelHeaderInput} />
                            </Col>
                            <Col lg={12}>
                                <Form.Control type="text" placeholder="Enter New Mobile Number" name='Mobile' value={headerData.Mobile} onChange={handelHeaderInput} />
                            </Col>
                            <Col lg={12}>
                                <Form.Control type="text" placeholder="Enter New Email" name='Email' value={headerData.Email} onChange={handelHeaderInput} />
                            </Col>
                            <Col xs={12} className=" d-flex justify-content-end gap-2">
                                <Button variant="danger">Cancel</Button>
                                <Button variant="success" type='submit'>Submit</Button>
                            </Col>
                        </Form>
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
                             {contactInfo && contactInfo.length > 0 ? (
                                contactInfo.map((info, index) => (
                                    <tr key={index}>
                                        <td>{info.Landline}</td>
                                        <td>{info.Mobile}</td>
                                        <td>{info.Email}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="2" className="text-center">No data found</td>
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