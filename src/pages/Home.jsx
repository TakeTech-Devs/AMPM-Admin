import React, { useEffect } from "react";
import { Form, Container, Row, Col, Button, Table } from "react-bootstrap";
import "../styles/Dashboard.scss";
import "../styles/Global.scss";
import { useSelector, useDispatch } from 'react-redux';
import { getHome } from "../Actions/HomeActions";


function Home() {

  const dispatch = useDispatch();

  const { home, loading, error } = useSelector(state => state.adminHome);

  useEffect(() => {
    dispatch(getHome());

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
                <th>Banner Title</th>
                <th>Banner Description</th>
                <th>Banner PointOne</th>
                <th>Banner PointTwo</th>
                <th>Banner PointThree</th>
              </tr>
            </thead>
            <tbody>
              {/* <tr>
                <td>{home.headerTitle}</td>
                <td>{home.headerDescription}</td>
                <td>{home.headerPointOne}</td>
                <td>{home.headerPointTwo}</td>
                <td>{home.headerPointThree}</td>
              </tr> */}
              {home && home.headerTitle ? (
                <tr>
                  <td>{home.headerTitle}</td>
                  <td>{home.headerDescription}</td>
                  <td>{home.headerPointOne}</td>
                  <td>{home.headerPointTwo}</td>
                  <td>{home.headerPointThree}</td>
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
        <h3>Banner Bottom Cards Section</h3>
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
                <th>Card One</th>
                <th>Card Two</th>
                <th>Card Three</th>
              </tr>
            </thead>
            <tbody>
              {/* <tr>
                <td>{home.highlightOne}</td>
                <td>{home.highlightTwo}</td>
                <td>{home.highlightThree}</td>
              </tr> */}
              {home && home.highlightOne ? (
                <tr>
                  <td>{home.highlightOne}</td>
                  <td>{home.highlightTwo}</td>
                  <td>{home.highlightThree}</td>
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
        <h3>Batteries</h3>
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
                <th>Batteries Heading</th>
                <th>Batteries Description</th>
              </tr>
            </thead>
            <tbody>
              {/* <tr>
                <td>{home.batteriesHeading}</td>
                <td>{home.batteriesDescription}</td>
              </tr> */}
              {home && home.batteriesHeading ? (
                <tr>
                  <td>{home.batteriesHeading}</td>
                  <td>{home.batteriesDescription}</td>
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

      {/* <div className="cardbox">
        <h3>What We Do</h3>
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

      <div className="cardbox">
        <h3>Contact US</h3>
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
                <th>Contact Us</th>
                <th>Contact Us Description</th>
              </tr>
            </thead>
            <tbody>
              {/* <tr>
                <td>{home.ContactUS}</td>
                <td>{home.ContactUSDescription}</td>
              </tr> */}
              {home && home.ContactUS ? (
                <tr>
                  <td>{home.ContactUS}</td>
                  <td>{home.ContactUSDescription}</td>
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
    </>
  )
}

export default Home