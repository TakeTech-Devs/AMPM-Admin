import React, { useEffect, useState } from 'react'
import { Form, Container, Row, Col, Button, Table } from "react-bootstrap";
import "../styles/Dashboard.scss";
import "../styles/Global.scss";
import { useDispatch, useSelector } from 'react-redux';
import { addAdmin, clearErrors, deleteAdmin, getAdmin, updateAdmin } from '../Actions/AdminAction';
import Swal from 'sweetalert2';
import Modal from 'react-bootstrap/Modal';

export const Admins = () => {

    const dispatch = useDispatch();

    const { admin, error, loading } = useSelector((state) => state.adminList);

    const { error: approveError, isApproved, loading: approveLoading } = useSelector((state) => state.deleteAdmin);

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

    const adminDeleteHandler = (id) => {
        dispatch(deleteAdmin(id))
    }

    const showDeleteAlert = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'Do you want to delete this admin?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                adminDeleteHandler(id); // Call the function here if confirmed
                Swal.fire(
                    'Deleted!',
                    'The admin has been deleted successfully.',
                    'success'
                ).then(() => {
                    window.location.reload(); // Reload the page after clicking OK
                });
            }
        });
    }

    const [showEditForm, setShowEditForm] = useState(false);
    const [selectedAdmin, setSelectedAdmin] = useState(null);

    const handleShowEditForm = (admin) => {
        setSelectedAdmin(admin); // Set the selected admin's details, including id
        setAdminData({
            name: admin.name || '',
            email: admin.email || '',
            password: '', // Keep password blank for security reasons
        });
        setShowEditForm(true);
    };
    const handleCloseEditForm = () => {
        setShowEditForm(false);
        setSelectedAdmin(null); // Clear selected admin details on close
        setAdminData({ name: '', email: '', password: '' }); // Reset form fields
    };

    const handleUpdateAdmin = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('name', adminData.name);
        formData.append('email', adminData.email);
        formData.append('password', adminData.password);

        if (selectedAdmin && selectedAdmin._id) {
            dispatch(updateAdmin(selectedAdmin._id, {
                name: adminData.name,
                email: adminData.email,
                password: adminData.password,
            })); // Dispatch the update action with admin id and form data
            window.alert("Admin Updated Successfully");
            window.location.reload(); // Reload the page after updating
        } else {
            window.alert("Admin ID not found");
        }

        handleCloseEditForm();
    };



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
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {admin && admin.length > 0 ? (
                                // Reverse the admin array
                                [...admin].reverse().map((user, index) => ( // Use spread operator to avoid mutating the original array
                                    <tr key={index}>
                                        <td>{user.name || "N/A"}</td>
                                        <td>{user.email || "N/A"}</td>
                                        <td>
                                            <Button variant='success' onClick={() => handleShowEditForm(user)}>Edit</Button>
                                            <Button variant="danger" onClick={() => showDeleteAlert(user._id)}>Delete</Button>
                                        </td>
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
            <Modal show={showEditForm} onHide={handleCloseEditForm}>
                <Modal.Header closeButton>
                    <Modal.Title>Update Admin</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleUpdateAdmin}>
                        <Form.Group className="mb-3">
                            <Form.Label>Admin Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Admin Name"
                                name="name"
                                value={adminData.name}
                                onChange={handelAdminInput}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Admin Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Admin Email"
                                name="email"
                                value={adminData.email}
                                onChange={handelAdminInput}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Admin Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Admin Password"
                                name="password"
                                value={adminData.password}
                                onChange={handelAdminInput}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleCloseEditForm}>
                        Close
                    </Button>
                    <Button variant="success" type="submit" onClick={handleUpdateAdmin}>
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
