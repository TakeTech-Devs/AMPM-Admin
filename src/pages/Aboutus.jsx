import React, { useEffect } from 'react'
import { Form, Container, Row, Col, Button, Table } from "react-bootstrap";
import "../styles/Dashboard.scss";
import "../styles/Global.scss";
import { useDispatch, useSelector } from 'react-redux';
import { clearErrors, getAbout } from '../Actions/AboutActions';

function Aboutus() {

  const dispatch = useDispatch();

  const { about, loading, error } = useSelector(state => state.adminAbout);

  useEffect(() => {
    dispatch(getAbout());

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
              </tr>
            </thead>
            <tbody>
              {/* <tr>
                <td>{about.headerTitle}</td>
                <td>{about.headerDescription}</td>
              </tr> */}
               {about && about.headerTitle ? (
                <tr>
                  <td>{about.headerTitle}</td>
                  <td>{about.headerDescription}</td>
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
        <h3>Our Mission</h3>
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
                <th>Our Mission Title</th>
                <th>Our Mission Description</th>
              </tr>
            </thead>
            <tbody>
              {/* <tr>
                <td>{about.ourMissionTitle}</td>
                <td>{about.ourMissionDescription}</td>
              </tr> */}
              {about && about.ourMissionTitle ? (
                <tr>
                  <td>{about.ourMissionTitle}</td>
                  <td>{about.ourMissionDescription}</td>
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
        <h3>What We Do</h3>
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
                <th>We Do Title</th>
                <th>We Do Description</th>
              </tr>
            </thead>
            <tbody>
              {/* <tr>
                <td>{about.weDoTitle}</td>
                <td>{about.weDoDescription}</td>
              </tr> */}
              {about && about.weDoTitle ? (
                <tr>
                  <td>{about.weDoTitle}</td>
                  <td>{about.weDoDescription}</td>
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

export default Aboutus