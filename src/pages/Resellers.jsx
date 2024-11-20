import React, { useEffect, useState } from 'react'
import { Form, Container, Row, Col, Button, Table } from "react-bootstrap";
import "../styles/Dashboard.scss";
import "../styles/Global.scss";
import { useDispatch, useSelector } from 'react-redux';
import { approveReseller, clearErrors, getReseller } from '../Actions/ResellerActions';
import { RESELLER_APPROVE_RESET } from '../Constants/ResellerConstants';
import Swal from 'sweetalert2';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import BlockIcon from '@mui/icons-material/Block';

const Resellers = () => {
    const dispatch = useDispatch();
    const [duration, setDuration] = useState("");

    const { reseller, error, loading } = useSelector((state) => state.adminReseller);

    useEffect(() => {
        if (error) {
            alert(error);
            dispatch(clearErrors());
        }
        dispatch(getReseller(duration));
    }, [dispatch, error, duration]);

    const { error: approveError, isApproved, loading: approveLoading } = useSelector((state) => state.resellerApprove);

    const approveProductHandler = (id) => {
        dispatch(approveReseller(id));
        // window.location.reload();
    }

    // const showAlert = () =>{
    //     Swal.fire({
    //         title: 'Error!',
    //         text: 'Do you want to continue',
    //         icon: 'error',
    //         confirmButtonText: 'Cool'
    //       })
    // }

    const showApproveAlert = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'Do you want to approve this reseller?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, approve it!'
        }).then((result) => {
            if (result.isConfirmed) {
                approveProductHandler(id); // Call the function here if confirmed
                Swal.fire(
                    'Approved!',
                    'The reseller has been approved successfully.',
                    'success'
                ).then(() => {
                    window.location.reload(); // Reload the page after clicking OK
                });
            }
        });
    };

    const showAlert = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'Do you want to disapprove this reseller?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, disapprove it!'
        }).then((result) => {
            if (result.isConfirmed) {
                approveProductHandler(id); // Call the function here if confirmed
                Swal.fire(
                    'Disapprove!',
                    'The reseller has been disapprove successfully.',
                    'success'
                ).then(() => {
                    window.location.reload(); // Reload the page after clicking OK
                });
            }
        });
    }

    const exportToCSV = () => {
        if (!reseller || reseller.length === 0) {
            alert("No data available to export.");
            return;
        }

        // Prepare the CSV header and rows
        const headers = [
            "Full Name",
            "Business Name",
            "Business Type",
            "ABN",
            "Business Email",
            "Business Website",
            "Approval Status",
            "Date"
        ];

        // Reverse the data rows
        const rows = reseller
            .slice()
            .reverse()
            .map((reseller) => [
                reseller.fullName || "N/A",
                reseller.businessName || "N/A",
                reseller.businessType || "N/A",
                reseller.abn || "N/A",
                reseller.businessEmail || "N/A",
                reseller.businessWebsite || "N/A",
                reseller.approvalStatus ? "Approved" : "Not Approved",
                new Date(reseller.createdAt).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })
            ]);

        // Combine header and rows into a CSV string
        const csvContent =
            [headers, ...rows]
                .map((row) => row.map((value) => `"${value}"`).join(","))
                .join("\n");


        // Create a blob and trigger download
        const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
        const link = document.createElement("a");
        const url = URL.createObjectURL(blob);

        link.setAttribute("href", url);
        link.setAttribute("download", `Reseller_${duration || "All"}.csv`);
        link.style.display = "none";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };



    useEffect(() => {
        if (approveError) {
            window.alert(approveError);
            dispatch(clearErrors);
        }

        if (isApproved) {
            window.alert("Reseller Approve Successfully");
            // navigate("/admin/products");
            dispatch({ type: RESELLER_APPROVE_RESET });

        }
    }, [dispatch, isApproved, approveError])




    return (
        <>
            <div className="cardbox">
                <h3>Reseller List</h3>
                <Container>
                    <Form.Group controlId="filter">
                        <Form.Label>Filter by Registration Date</Form.Label>
                        <Form.Control
                            as="select"
                            value={duration}
                            onChange={(e) => setDuration(e.target.value)}
                        >
                            <option value="">All</option>
                            <option value="3months">Last 3 Months</option>
                            <option value="6months">Last 6 Months</option>
                            <option value="1year">Last 1 Year</option>
                        </Form.Control>
                    </Form.Group>

                    <div className="text-end my-3">
                        <Button variant="success" onClick={exportToCSV}>
                            Export to CSV
                        </Button>
                    </div>

                    <Table bordered hover responsive>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Business Name</th>
                                <th>Business Type</th>
                                <th>ABN</th>
                                <th>Business Email</th>
                                <th>Business Website</th>
                                <th>Date</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {reseller && reseller.length > 0 ? (
                                // Reverse the reseller array
                                [...reseller].reverse().map((user, index) => ( // Use spread operator to avoid mutating the original array
                                    <tr key={index}>
                                        <td>{user.fullName || "N/A"}</td>
                                        <td>{user.businessName || "N/A"}</td>
                                        <td>{user.businessType || "N/A"}</td>
                                        <td>{user.abn || "N/A"}</td>
                                        <td>{user.businessEmail || "N/A"}</td>
                                        <td>{user.businessWebsite || "N/A"}</td>
                                        <td>{new Date(user.createdAt).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}</td>
                                        <td>
                                            {user.approvalStatus ? (
                                                // <Button variant="success" onClick={() => approveProductHandler(user._id)}>Approved</Button>
                                                <Button variant="success" onClick={() => showAlert(user._id)}><HowToRegIcon /></Button>
                                            ) : (
                                                // <Button variant="danger" onClick={() => approveProductHandler(user._id)}>Not Approved</Button>
                                                <Button variant="danger" onClick={() => showApproveAlert(user._id)}><BlockIcon /></Button>
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

export default Resellers