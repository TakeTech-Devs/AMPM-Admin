import React, { useEffect } from 'react'
import { Form, Container, Row, Col, Button, Table } from "react-bootstrap";
import "../styles/Dashboard.scss";
import "../styles/Global.scss";
import { useDispatch, useSelector } from 'react-redux';
import { clearErrors, getReseller } from '../Actions/ResellerActions';

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
                            {/* <tr>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                            </tr> */}
                            {reseller && reseller.length > 0 ? (
                                reseller.map((user, index) => (
                                    <tr key={index}>
                                        <td>{user.fullName || "N/A"}</td>
                                        <td>{user.businessName || "N/A"}</td>
                                        <td>{user.businessType || "N/A"}</td>
                                        <td>{user.abn || "N/A"}</td>
                                        <td>{user.businessEmail || "N/A"}</td>
                                        <td>{user.businessWebsite || "N/A"}</td>
                                        <td>{user.approvalStatus || "N/A"}</td>
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

export default Resellers