import React, { useEffect, useState } from "react";
import { Form, Container, Row, Col, Button, Table } from "react-bootstrap";
import "../styles/Dashboard.scss";
import "../styles/Global.scss";
import { useSelector, useDispatch } from 'react-redux';
import { createHomeBatterie, createHomeContact, createHomeHeader, createHomeHeaderCard, getHome } from "../Actions/HomeActions";
import { ADD_HOMEHEADER_ADMIN_RESET, ADD_HOMEBATTARIE_ADMIN_RESET, ADD_HOMEHEADERCARD_ADMIN_RESET, ADD_HOMECONTACT_ADMIN_RESET } from "../Constants/HomeConstants";


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

  const { home: addHome, error: newHomeDataError, isUpdated, loading: updateLoading } = useSelector(state => state.newHomeData);

  const [headerData, setHeaderData] = useState({
    headerTitle: '',
    headerDescription: '',
    headerPointOne: '',
    headerPointTwo: '',
    headerPointThree: '',
  })

  const [headerCardData, setHeaderCardData] = useState({
    highlightOne: '',
    highlightTwo: '',
    highlightThree: '',
  })


  const [batterieData, setBatterieData] = useState({
    batteriesHeading: '',
    batteriesDescription: '',
  })


  const [contactData, setContactData] = useState({
    ContactUS: '',
    ContactUSDescription: '',
  })

  useEffect(() => {
    if (addHome) {
      setHeaderData({
        headerTitle: addHome.headerTitle,
        headerDescription: addHome.headerDescription,
        headerPointOne: addHome.headerPointOne,
        headerPointTwo: addHome.headerPointTwo,
        headerPointThree: addHome.headerPointThree,
      })
      setHeaderCardData({
        highlightOne: addHome.highlightOne,
        highlightTwo: addHome.highlightTwo,
        highlightThree: addHome.highlightThree,
      })
      setBatterieData({
        batteriesHeading: addHome.batteriesHeading,
        batteriesDescription: addHome.batteriesDescription,
      })
      setContactData({
        ContactUS: addHome.ContactUS,
        ContactUSDescription: addHome.ContactUSDescription,
      })
    }

    if (isUpdated) {
      window.alert('Home Data Updated Successfully');
      dispatch({ type: ADD_HOMEHEADER_ADMIN_RESET });
      dispatch({ type: ADD_HOMEHEADERCARD_ADMIN_RESET });
      dispatch({ type: ADD_HOMEBATTARIE_ADMIN_RESET });
      dispatch({ type: ADD_HOMECONTACT_ADMIN_RESET });
      window.location.reload()
    }

    if (newHomeDataError) {
      window.alert(newHomeDataError);
      dispatch(clearErrors());
    }

  }, [addHome, isUpdated, newHomeDataError, dispatch])

  const handelHeaderInput = (e) => {
    setHeaderData({
      ...headerData,
      [e.target.name]: e.target.value,
    });
  }

  const handelHeaderInputSubmit = (e) => {
    e.preventDefault();
    dispatch(createHomeHeader(headerData));
  }

  const handelHeaderCardInput = (e) => {
    setHeaderCardData({
      ...headerCardData,
      [e.target.name]: e.target.value,
    });
  }

  const handelHeaderCardInputSubmit = (e) => {
    e.preventDefault();
    dispatch(createHomeHeaderCard(headerCardData));
  }

  const handelHeaderBatterieInput = (e) => {
    setBatterieData({
      ...batterieData,
      [e.target.name]: e.target.value,
    });
  }

  const handelHeaderBatterieInputSubmit = (e) => {
    e.preventDefault();
    dispatch(createHomeBatterie(batterieData));
  }

  const handelHeaderContactInput = (e) => {
    setContactData({
      ...contactData,
      [e.target.name]: e.target.value,
    });
  }

  const handelHeaderContactInputSubmit = (e) => {
    e.preventDefault();
    dispatch(createHomeContact(contactData));
  }


  return (
    <>
      <div className="cardbox">
        <h3>Banner Section</h3>
        <Container>
          <Form onSubmit={handelHeaderInputSubmit}>
            <Row>
              <Col lg={12}>
                <Form.Control type="text" placeholder="Enter New Banner Title" name='headerTitle' value={headerData.headerTitle} onChange={handelHeaderInput} />
              </Col>
              <Col lg={12}>
                <Form.Control as="textarea" placeholder="Enter New Banner Description" name='headerDescription' value={headerData.headerDescription} onChange={handelHeaderInput} />
              </Col>
              <Col lg={12}>
                <Form.Control type="text" placeholder="Enter New Banner Point One" name='headerPointOne' value={headerData.headerPointOne} onChange={handelHeaderInput} />
              </Col>
              <Col lg={12}>
                <Form.Control type="text" placeholder="Enter New Banner Point Two" name='headerPointTwo' value={headerData.headerPointTwo} onChange={handelHeaderInput} />
              </Col>
              <Col lg={12}>
                <Form.Control type="text" placeholder="Enter New Banner Point Three" name='headerPointThree' value={headerData.headerPointThree} onChange={handelHeaderInput} />
              </Col>
              <Col xs={12} className=" d-flex justify-content-end gap-2">
                <Button variant="danger">Cancel</Button>
                <Button variant="success" type="submit">Submit</Button>
              </Col>
            </Row>
          </Form>
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
          <Form onSubmit={handelHeaderCardInputSubmit}>
            <Row>
              <Col lg={12}>
                <Form.Control as="textarea" placeholder="Enter New Text" name='highlightOne' value={headerCardData.highlightOne} onChange={handelHeaderCardInput} />
              </Col>
              <Col lg={12}>
                <Form.Control as="textarea" placeholder="Enter New Text" name='highlightTwo' value={headerCardData.highlightTwo} onChange={handelHeaderCardInput} />
              </Col>
              <Col lg={12}>
                <Form.Control as="textarea" placeholder="Enter New Text" name='highlightThree' value={headerCardData.highlightThree} onChange={handelHeaderCardInput} />
              </Col>
              <Col xs={12} className=" d-flex justify-content-end gap-2">
                <Button variant="danger">Cancel</Button>
                <Button variant="success" type="submit">Submit</Button>
              </Col>
            </Row>
          </Form>
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
            <Form onSubmit={handelHeaderBatterieInputSubmit}>
              <Col lg={12}>
                <Form.Control type="text" placeholder="Enter New Text" name='batteriesHeading' value={batterieData.batteriesHeading} onChange={handelHeaderBatterieInput} />
              </Col>
              <Col lg={12}>
                <Form.Control as="textarea" placeholder="Enter New Text" name='batteriesDescription' value={batterieData.batteriesDescription} onChange={handelHeaderBatterieInput} />
              </Col>
              <Col xs={12} className=" d-flex justify-content-end gap-2">
                <Button variant="danger">Cancel</Button>
                <Button variant="success" type="submit">Submit</Button>
              </Col>
            </Form>
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

      <div className="cardbox">
        <h3>Contact US</h3>
        <Container>
          <Row>
            <Form onSubmit={handelHeaderContactInputSubmit}>
              <Col lg={12}>
                <Form.Control type="text" placeholder="Enter New Text" name='ContactUS' value={contactData.ContactUS} onChange={handelHeaderContactInput} />
              </Col>
              <Col lg={12}>
                <Form.Control as="textarea" placeholder="Enter New Text" name='ContactUSDescription' value={contactData.ContactUSDescription} onChange={handelHeaderContactInput} />
              </Col>
              <Col xs={12} className=" d-flex justify-content-end gap-2">
                <Button variant="danger">Cancel</Button>
                <Button variant="success" type="submit">Submit</Button>
              </Col>
            </Form>
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