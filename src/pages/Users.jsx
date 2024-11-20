import React, { useEffect, useState } from 'react'
import { Form, Container, Row, Col, Button, Table, Spinner } from "react-bootstrap";
import "../styles/Dashboard.scss";
import "../styles/Global.scss";
import { useDispatch, useSelector } from 'react-redux';
import { clearErrors, getConsumers } from '../Actions/ConsumerActions';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

const Users = () => {

    const [duration, setDuration] = useState("");

    const dispatch = useDispatch();

    const { consumers, error, loading } = useSelector((state) => state.adminConsumer);

    useEffect(() => {
        if (error) {
            alert(error);
            dispatch(clearErrors());
        }
        dispatch(getConsumers(duration));
    }, [dispatch, error, duration]);

    const exportToCSV = () => {
        if (!consumers || consumers.length === 0) {
            alert("No data available to export.");
            return;
        }

        // Prepare the CSV header and rows
        const headers = [
            "First Name",
            "Last Name",
            "Email",
            "Phone",
            "Address",
            "Suburb",
            "State",
            "PIN",
            "Date"
        ];

        // Reverse the data rows
        const rows = consumers
            .slice()
            .reverse()
            .map((consumer) => [
                consumer.firstName || "N/A",
                consumer.lastName || "N/A",
                consumer.email || "N/A",
                consumer.phone || "N/A",
                consumer.address || "N/A",
                consumer.suburb || "N/A",
                consumer.state || "N/A",
                consumer.pinCode || "N/A",
                new Date(consumer.createdAt).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })
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
        link.setAttribute("download", `Consumers_${duration || "All"}.csv`);
        link.style.display = "none";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };


    return (
        <>
            <div className="cardbox">
                <h3>Consumer List</h3>
                <Container>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding:"5px"}}>
                        <Form.Group controlId="filter" style={{ flex: 1}}>
                            <Form.Label style={{paddingRight:"15px" }}>Filter by Registration Date</Form.Label>
                            <Form.Select
                                style={{ width: "70%", display: "inline-block", marginRight:"10px"}}
                                value={duration}
                                onChange={(e) => setDuration(e.target.value)}
                            >
                                <option value="">All</option>
                                <option value="3months">Last 3 Months</option>
                                <option value="6months">Last 6 Months</option>
                                <option value="1year">Last 1 Year</option>
                            </Form.Select>
                            <Button
                            variant="success"
                            onClick={exportToCSV}
                            style={{ marginTop: "13px", height: "fit-content" }}
                        >
                            <FileDownloadIcon/>
                        </Button>
                        </Form.Group>
                    </div>

                    {loading ? (
                        <div className="text-center my-4">
                            <Spinner animation="border" />
                        </div>
                    ) : (
                        <Table bordered hover responsive>
                            <thead>
                                <tr>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Address</th>
                                    <th>Suburb</th>
                                    <th>State</th>
                                    <th>PIN</th>
                                    <th>Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {consumers && consumers.length > 0 ? (
                                    consumers
                                        .slice()
                                        .reverse()
                                        .map((user) => (
                                            <tr key={user._id}>
                                                <td>{user.firstName || "N/A"}</td>
                                                <td>{user.lastName || "N/A"}</td>
                                                <td>{user.email || "N/A"}</td>
                                                <td>{user.phone || "N/A"}</td>
                                                <td>{user.address || "N/A"}</td>
                                                <td>{user.suburb || "N/A"}</td>
                                                <td>{user.state || "N/A"}</td>
                                                <td>{user.pinCode || "N/A"}</td>
                                                <td>{new Date(user.createdAt).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}</td>
                                            </tr>
                                        ))
                                ) : (
                                    <tr>
                                        <td colSpan="9" className="text-center">
                                            {loading ? "Loading..." : "No consumers found"}
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </Table>
                    )}
                </Container>
            </div>
        </>
    )
}

export default Users