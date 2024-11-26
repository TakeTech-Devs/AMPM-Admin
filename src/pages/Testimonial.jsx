import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createTestimonial, clearErrors, getTestimonial } from '../Actions/TestimonialActions';
import { useEffect } from 'react';
import { useState } from 'react';
import { Form, Container, Row, Col, Button, Table } from 'react-bootstrap';
import ReactStars from "react-rating-stars-component";

const Testimonial = () => {
  const dispatch = useDispatch();

  const { error, loading } = useSelector((state) => state.createTestimonial);

  const { testimonialList, error: testimonialListError, loading: testimonialListLoading } = useSelector((state) => state.testimonials);

  const [formData, setFormData] = useState({
    name: '',
    role: '',
    testimonial: '',
    rating: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleClear = () => {
    setFormData({
      name: '',
      role: '',
      testimonial: '',
      rating: '',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    const formattedData = {
      ...formData,
    };

    dispatch(createTestimonial(formattedData))

    window.alert("New Testimonial Added")
    window.location.reload()
  };

  useEffect(() => {
    if (error) {
      window.alert(error);
      dispatch(clearErrors());
    };

    dispatch(getTestimonial())
  }, [dispatch, error])





  return (
    <div className="cardbox">
      <h3>Testimonial</h3>
      <Container>
        <Row>
          <Form onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Col lg={12}>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Col>
              <Col lg={12}>
                <Form.Control
                  type="text"
                  name="role"
                  placeholder="Role"
                  value={formData.role}
                  onChange={handleChange}
                  required
                />
              </Col>
              <Col lg={12}>
                <Form.Control
                  as="textarea"
                  name="testimonial"
                  placeholder="Testimonial"
                  value={formData.testimonial}
                  onChange={handleChange}
                />
              </Col>
              <Col lg={12}>
                <Form.Control
                  type="number"
                  name="rating"
                  placeholder="Rating"
                  value={formData.rating}
                  onChange={handleChange}
                  required
                />
              </Col>
              <Col xs={12} className="d-flex justify-content-end gap-2">
                <Button variant="danger" onClick={handleClear}>
                  Clear
                </Button>
                <Button variant="success" type="submit">
                  Submit
                </Button>
              </Col>
            </Row>
          </Form>
        </Row>
        <Table bordered hover responsive>
          <thead>
            <tr>
              <th>Name</th>
              <th>Role</th>
              <th>Testimonial</th>
              <th>Rating</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {testimonialList && testimonialList.length > 0 ? (
              [...testimonialList].reverse().map((item) => (
                // .reverse()
                // .map((item) => (
                  <tr key={item._id}>
                    <td>{item.name || "N/A"}</td>
                    <td>{item.role || "N/A"}</td>
                    <td>{item.testimonial || "N/A"}</td>
                    <td>
                      <ReactStars
                        count={5}
                        value={item.rating}
                        size={20}
                        isHalf={true}
                        edit={false}
                        activeColor="#ffd700"
                      />
                    </td>
                    <td>{new Date(item.createdAt).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}</td>
                  </tr>
                ))
            ) : (
              <tr>
                <td colSpan="9" className="text-center">
                  {testimonialListLoading ? "Loading..." : "No testimonial found"}
                </td>
              </tr>
            )}

          </tbody>
        </Table>
      </Container>
    </div>
  )
}

export default Testimonial
