import React from 'react'
import { useEffect } from 'react';
import { Container, Table } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { clearErrors, getSubscribers } from '../Actions/SubscribersAction';

const Subscribers = () => {
    const dispatch = useDispatch();
    const { subscribers, error, loading } = useSelector((state) => state.subscribersList)

    useEffect(() =>{
        if(error){
            window.alert(error);    
            dispatch(clearErrors);
        }
        dispatch(getSubscribers())
    },[dispatch, error])

    return (
        <>
            <div className="cardbox">
                <h3>Subscribers List</h3>
                <Container>
                    <Table bordered hover responsive>
                        <thead>
                            <tr>
                                <th>Email Address</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {subscribers && subscribers.length > 0 ? (
                                subscribers
                                .reverse()
                                .map((item) => (
                                    <tr key={item._id}>
                                        <td>{item.email}</td>
                                        <td>{new Date(item.createdAt).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                <td colSpan="9" className="text-center">
                                    {loading ? "Loading..." : "No subscriber found"}
                                </td>
                            </tr>
                            )}
                            
                        </tbody>
                    </Table>
                </Container>
            </div>
        </>
    )
}

export default Subscribers
