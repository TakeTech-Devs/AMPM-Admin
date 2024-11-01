import React, { useEffect, useState } from 'react'
import { Form, Container, Row, Col, Button, Table } from "react-bootstrap";
import "../styles/Dashboard.scss";
import "../styles/Global.scss";
import { useDispatch, useSelector } from 'react-redux';
import { addAdmin, clearErrors, getAdmin } from '../Actions/AdminAction';

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

    const { user, loading: addAdminLoading, error: addAdminError } = useSelector((state) => state.authReducer);

    const [adminData, setAdminData] = useState({
        name: '',
        email: '',
        password: '',
    })

    useEffect(() => {
        if (user) {
            setAdminData({
                name: user.name,
                email: user.email,
                password: user.password,
            })
        }

        if (addAdminError) {
            window.alert(addAdminError);
            dispatch(clearErrors());
        }
    }, [user, addAdminError, dispatch]);



    const handelAdminInput = (e) => {
        setAdminData({
            ...adminData,
            [e.target.name]: e.target.value
        })
    }

    const handelAdminInputSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', adminData.name);
        formData.append('email', adminData.email);
        formData.append('password', adminData.password);

        dispatch(addAdmin(formData));

        window.alert("New Admin Added")

        window.location.reload()

    }



    return (

        <>
            <div className="cardbox">
                <h3>Admin List</h3>
                <Container>
                    <Form onSubmit={handelAdminInputSubmit}>
                        <Row >
                            <Col lg={12}>
                                <Form.Control type="text" placeholder="Admin Name" name='name' value={adminData.name} onChange={handelAdminInput} />
                            </Col>
                            <Col lg={12}>
                                <Form.Control type="email" placeholder="Admin Email" name='email' value={adminData.email} onChange={handelAdminInput} />
                            </Col>
                            <Col lg={12}>
                                <Form.Control type="password" placeholder="Admin Password" name='password' value={adminData.password} onChange={handelAdminInput} />
                            </Col>

                            <Col xs={12} className=" d-flex justify-content-end gap-2">
                                <Button variant="danger">Cancel</Button>
                                <Button variant="success" type='submit'>Submit</Button>
                            </Col>
                        </Row>
                    </Form>
                    <Table bordered hover responsive>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {admin && admin.length > 0 ? (
                                // Reverse the admin array
                                [...admin].reverse().map((user, index) => ( // Use spread operator to avoid mutating the original array
                                    <tr key={index}>
                                        <td>{user.name || "N/A"}</td>
                                        <td>{user.email || "N/A"}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="8" className="text-center">No admin found</td>
                                </tr>
                            )}
                        </tbody>

                    </Table>
                </Container>
            </div>
        </>
    )
}
