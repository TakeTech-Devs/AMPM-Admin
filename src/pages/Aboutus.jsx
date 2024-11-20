import React, { useEffect, useState } from 'react'
import { Form, Container, Row, Col, Button, Table } from "react-bootstrap";
import "../styles/Dashboard.scss";
import "../styles/Global.scss";
import { useDispatch, useSelector } from 'react-redux';
import { clearErrors, createAboutHeader, createAboutMission, createAboutWeDo, getAbout } from '../Actions/AboutActions';
import { ADD_ABOUTHEADER_ADMIN_RESET, ADD_ABOUTMISSION_ADMIN_RESET, ADD_ABOUTWEDO_ADMIN_RESET } from '../Constants/AboutConstants';

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

  const { about: newAbout, isUpdated, error: aboutError, } = useSelector(state => state.newAboutData);

  const [headerData, setHeaderData] = useState({
    headerTitle: '',
    headerDescription: '',
  })

  const [missionData, setMissionData] = useState({
    ourMissionTitle: '',
    ourMissionDescription: '',
  })


  const [weDoData, setWeDoData] = useState({
    weDoTitle: '',
    weDoDescription: '',
  })


  useEffect(() => {
    if (newAbout) {
      setHeaderData({
        headerTitle: newAbout.headerTitle,
        headerDescription: newAbout.headerDescription,
      })
      setMissionData({
        ourMissionTitle: newAbout.ourMissionTitle,
        ourMissionDescription: newAbout.ourMissionDescription,
      })
      setWeDoData({
        weDoTitle: newAbout.weDoTitle,
        weDoDescription: newAbout.weDoDescription,
      })
    }

    if (isUpdated) {
      window.alert('About Us Page Data Updated Successfully');
      dispatch({ type: ADD_ABOUTHEADER_ADMIN_RESET });
      dispatch({ type: ADD_ABOUTMISSION_ADMIN_RESET });
      dispatch({ type: ADD_ABOUTWEDO_ADMIN_RESET });
      window.location.reload()
    }

    if (aboutError) {
      window.alert(aboutError);
      dispatch(clearErrors());
    }
  }, [newAbout, isUpdated, aboutError, dispatch])


  const handelHeaderInput = (e) => {
    setHeaderData({
      ...headerData,
      [e.target.name]: e.target.value,
    });
  }

  const handelHeaderInputSubmit = (e) => {
    e.preventDefault();
    dispatch(createAboutHeader(headerData));
  }

  const handelMissionInput = (e) => {
    setMissionData({
      ...missionData,
      [e.target.name]: e.target.value,
    });
  }

  const handelMissionInputSubmit = (e) => {
    e.preventDefault();
    dispatch(createAboutMission(missionData));
  }

  const handelWeDoInput = (e) => {
    setWeDoData({
      ...weDoData,
      [e.target.name]: e.target.value,
    });
  }

  const handelWeDoInputSubmit = (e) => {
    e.preventDefault();
    dispatch(createAboutWeDo(weDoData));
  }


  return (
    <>
      <div className="cardbox">
        <h3>Banner Section</h3>
        <Container>
          <Row>
            <Form onSubmit={handelHeaderInputSubmit}>
              <Col lg={12}>
                <Form.Control type="text" placeholder="Enter New Banner Title" name='headerTitle' value={headerData.headerTitle} onChange={handelHeaderInput} />
              </Col>
              <Col lg={12}>
                <Form.Control as="textarea" placeholder="Enter New Banner Description" name='headerDescription' value={headerData.headerDescription} onChange={handelHeaderInput} />
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
            <Form onSubmit={handelMissionInputSubmit}>
              <Col lg={12}>
                <Form.Control type="text" placeholder="Enter Our Mission Title" name='ourMissionTitle' value={missionData.ourMissionTitle} onChange={handelMissionInput}/>
              </Col>
              <Col lg={12}>
                <Form.Control as="textarea" placeholder="Enter Our Mission Description" name='ourMissionDescription' value={missionData.ourMissionDescription} onChange={handelMissionInput}/>
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
            <Form onSubmit={handelWeDoInputSubmit}>
            <Col lg={12}>
              <Form.Control type="text" placeholder="Enter What We Do Title" name='weDoTitle' value={weDoData.weDoTitle} onChange={handelWeDoInput}/>
            </Col>
            <Col lg={12}>
              <Form.Control as="textarea" placeholder="Enter What We Do Description" name='weDoDescription' value={weDoData.weDoDescription} onChange={handelWeDoInput}/>
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