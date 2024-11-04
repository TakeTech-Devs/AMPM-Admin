import React, { useEffect, useState } from 'react';
import { Form, Container, Row, Col, Button, Table } from 'react-bootstrap';
import '../styles/Dashboard.scss';
import '../styles/Global.scss';
import AddIcon from '@mui/icons-material/Add';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useDispatch, useSelector } from 'react-redux';
import {
    clearErrors,
    createProductBattery,
    createProductBatteryCard,
    createProductFeatureBattery,
    createProductHeader,
    deleteFeatureProductPoint,
    getProdcutData,
} from '../Actions/ProductActions';
import {
    ADD_BATTERY_ADMIN_RESET,
    ADD_BATTERYCARD_ADMIN_RESET,
    ADD_FEATUREBATTERY_ADMIN_RESET,
    ADD_PRODUCTHEADER_ADMIN_RESET,
    DELETE_FEATUREBATTERYPOINT_RESET,
} from '../Constants/ProductConstants';

const Product = () => {


    const dispatch = useDispatch();

    const { productData, loading, error } = useSelector((state) => state.productData);

    useEffect(() => {
        dispatch(getProdcutData());

        if (error) {
            window.alert(error);
            dispatch(clearErrors());
        }
    }, [dispatch, error]);

    const { newProductData, isUpdated, error: productError } = useSelector(
        (state) => state.newProductData
    );

    const [headerData, setHeaderData] = useState({
        headerTitle: '',
        headerDescription: '',
    });

    const [batteryData, setBatteryData] = useState({
        batteryTitle: '',
        batteryDescription: '',
    });

    const [batteryCardData, setBatteryCardData] = useState({
        batteryCardOne: '',
        batteryCardTwo: '',
        batteryCardThree: '',
    });

    const [highlights, setHighlights] = useState([]);
    const [highlightInput, setHighlightInput] = useState('');
    const [featureProductDescription, setFeatureProductDescription] = useState('');

    const addHighlight = () => {
        if (!highlightInput.trim()) return;
        setHighlights([...highlights, highlightInput]);
        setHighlightInput('');
    };

    const deleteHighlight = (index) => {
        setHighlights(highlights.filter((_, i) => i !== index));
    };

    useEffect(() => {
        if (newProductData) {
            setHeaderData({
                headerTitle: newProductData.headerTitle,
                headerDescription: newProductData.headerDescription,
            });
            setBatteryData({
                batteryTitle: newProductData.batteryTitle,
                batteryDescription: newProductData.batteryDescription,
            });
            setBatteryCardData({
                batteryCardOne: newProductData.batteryCardOne,
                batteryCardTwo: newProductData.batteryCardTwo,
                batteryCardThree: newProductData.batteryCardThree,
            });
        }

        if (isUpdated) {
            window.alert('Product Page Data Updated Successfully');
            dispatch({ type: ADD_PRODUCTHEADER_ADMIN_RESET });
            dispatch({ type: ADD_BATTERY_ADMIN_RESET });
            dispatch({ type: ADD_BATTERYCARD_ADMIN_RESET });
            dispatch({ type: ADD_FEATUREBATTERY_ADMIN_RESET });
            dispatch({ type: DELETE_FEATUREBATTERYPOINT_RESET });
            window.location.reload();
        }

        if (productError) {
            window.alert(productError);
            dispatch(clearErrors());
        }
    }, [newProductData, isUpdated, productError, dispatch]);

    const handelHeaderInput = (e) => {
        setHeaderData({
            ...headerData,
            [e.target.name]: e.target.value,
        });
    };

    const handelHeaderInputSubmit = (e) => {
        e.preventDefault();
        dispatch(createProductHeader(headerData));
    };

    const handelBatteryInput = (e) => {
        setBatteryData({
            ...batteryData,
            [e.target.name]: e.target.value,
        });
    };

    const handelBatteryInputSubmit = (e) => {
        e.preventDefault();
        dispatch(createProductBattery(batteryData));
    };

    const handelBatteryCardInput = (e) => {
        setBatteryCardData({
            ...batteryCardData,
            [e.target.name]: e.target.value,
        });
    };

    const handelBatteryCardInputSubmit = (e) => {
        e.preventDefault();
        dispatch(createProductBatteryCard(batteryCardData));
    };

    const handelFeatureBatteryInputSubmit = (e) => {
        if (!featureProductDescription.trim() || highlights.length === 0) {
            return;
        }

        const productData = {
            featureProduct: featureProductDescription,
            featureProductPoints: highlights
        }

        dispatch(createProductFeatureBattery(productData));

        setFeatureProductDescription('');
        setHighlights([]);
    }

    const handleDeletePoint = (productId, point) => {
        console.log("Deleting point:", point); // Debugging to verify the point content
        dispatch(deleteFeatureProductPoint(productId, point));
    };


    return (
        <>
            <div className="cardbox">
                <h3>Banner Section</h3>
                <Container>
                    <Row>
                        <Form onSubmit={handelHeaderInputSubmit}>
                            <Col lg={12}>
                                <Form.Control type="text" placeholder="Enter Banner Title" name='headerTitle' value={headerData.headerTitle} onChange={handelHeaderInput} />
                            </Col>
                            <Col lg={12}>
                                <Form.Control as="textarea" placeholder="Enter Banner Description" name='headerDescription' value={headerData.headerDescription} onChange={handelHeaderInput} />
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
                                <th>Banner Title</th>
                                <th>Banner Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{productData[0]?.headerTitle}</td>
                                <td>{productData[0]?.headerDescription}</td>
                            </tr>
                        </tbody>
                    </Table>
                </Container>
            </div>
            <div className="cardbox">
                <h3>Battery Section</h3>
                <Container>
                    <Row>
                        <Form onSubmit={handelBatteryInputSubmit}>
                            <Col lg={12}>
                                <Form.Control type="text" placeholder="Enter Battery Title" name='batteryTitle' value={batteryData.batteryTitle} onChange={handelBatteryInput} />
                            </Col>
                            <Col lg={12}>
                                <Form.Control as="textarea" placeholder="Enter Battery Description" name="batteryDescription" value={batteryData.batteryDescription} onChange={handelBatteryInput} />
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
                                <th>Battery Title</th>
                                <th>Battery Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{productData[0]?.batteryTitle}</td>
                                <td>{productData[0]?.batteryDescription}</td>
                            </tr>
                        </tbody>
                    </Table>
                </Container>
            </div>
            <div className="cardbox">
                <h3>Batteries Cards Section</h3>
                <Container>
                    <Row>
                        <Form onSubmit={handelBatteryCardInputSubmit}>
                            <Col lg={12}>
                                <Form.Control type="text" placeholder="Enter Batteries Cards" name='batteryCardOne' value={batteryCardData.batteryCardOne} onChange={handelBatteryCardInput} />
                            </Col>
                            <Col lg={12}>
                                <Form.Control type="text" placeholder="Enter Batteries Cards" name='batteryCardTwo' value={batteryCardData.batteryCardTwo} onChange={handelBatteryCardInput} />
                            </Col>
                            <Col lg={12}>
                                <Form.Control type="text" placeholder="Enter Batteries Cards" name='batteryCardThree' value={batteryCardData.batteryCardThree} onChange={handelBatteryCardInput} />
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
                                <th>Battery Card One</th>
                                <th>Battery Card Two</th>
                                <th>Battery Card Three</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{productData[0]?.batteryCardOne}</td>
                                <td>{productData[0]?.batteryCardTwo}</td>
                                <td>{productData[0]?.batteryCardThree}</td>
                            </tr>
                        </tbody>
                    </Table>
                </Container>
            </div>
            <div className="cardbox">
                <h3>Features</h3>
                <Container>
                    <Row>
                        <Form>
                            <Col lg={12}>
                                <Form.Control
                                    as="textarea"
                                    placeholder="Feature Product"
                                    value={featureProductDescription}
                                    onChange={(e) => setFeatureProductDescription(e.target.value)}
                                />
                            </Col>
                            <Col lg={12} className="d-flex align-items-center">
                                <Form.Control
                                    value={highlightInput}
                                    onChange={(e) => setHighlightInput(e.target.value)}
                                    type="text"
                                    placeholder="Add a highlight"
                                />
                                <Button onClick={addHighlight} variant="outline-success" className="ms-2">
                                    <AddIcon style={{ fontSize: "20px" }} />
                                </Button>
                            </Col>
                            <Col lg={12} className="mt-2">
                                {highlights.map((highlight, i) => (
                                    <div
                                        key={i}
                                        className="d-flex justify-content-between align-items-center p-2 mb-2 border rounded bg-light">
                                        <span className="text">{highlight}</span>
                                        <Button className="d-flex justify-content-center btn-highlight" variant="outline-danger" onClick={() => deleteHighlight(i)}>
                                            <DeleteForeverIcon style={{ fontSize: "20px" }} />
                                        </Button>
                                    </div>
                                ))}
                            </Col>
                            <Col xs={12} className="d-flex justify-content-end gap-2 mt-2">
                                <Button variant="danger" onClick={() => setHighlights([])}>
                                    Clear
                                </Button>
                                <Button variant="success" onClick={handelFeatureBatteryInputSubmit}>
                                    Submit
                                </Button>
                            </Col>
                        </Form>
                    </Row>
                    <Table bordered hover responsive>
                        <thead>
                            <tr>
                                <th>Feature Product</th>
                                <th>Feature Product Points</th>
                            </tr>
                        </thead>
                        <tbody>

                            {Array.isArray(productData) && productData.length > 0 && (
                                productData.map((item, index) => (
                                    <tr key={index}>
                                        <td style={{ width: "600px" }}>{item.featureProduct}</td>
                                        <td>
                                            {item.featureProductPoints.map((point, pointIndex) => (
                                                <div
                                                    key={`${index}-${pointIndex}`}
                                                    style={{
                                                        display: "flex",
                                                        alignItems: "center", // Aligns items vertically
                                                        justifyContent: "space-between",
                                                        marginBottom: "8px", // Adds space between items
                                                    }}
                                                >
                                                    <span>{pointIndex + 1}. {   }</span>
                                                    <Button
                                                        variant="outline-danger"
                                                        onClick={() => handleDeletePoint(item._id, point)}
                                                        style={{ padding: "4px", minWidth: "32px" }} // Optional styling for button
                                                    >
                                                        <DeleteForeverIcon style={{ fontSize: "20px" }} />
                                                    </Button>
                                                </div>
                                            ))}
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </Table>
                </Container>
            </div>
            {/* <div className="cardbox">
                <h3>What We Do</h3>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <Form.Control type="text" placeholder="Normal text" />
                        </Col>
                        <Col lg={12}>
                            <Form.Control type="text" placeholder="Normal text" />
                        </Col>
                        <Col lg={12}>
                            <Form.Control type="text" placeholder="Normal text" />
                        </Col>
                        <Col lg={12}>
                            <Form.Control type="text" placeholder="Normal text" />
                        </Col>
                        <Col lg={12}>
                            <Form.Control type="text" placeholder="Normal text" />
                        </Col>
                        <Col lg={12}>
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
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Username</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                        </tbody>
                    </Table>
                </Container>
            </div> */}
        </>
    )
}

export default Product