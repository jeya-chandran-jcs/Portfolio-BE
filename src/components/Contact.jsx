import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Spinner } from 'react-bootstrap';
import Aos from 'aos';
import { FaGithub, FaLinkedin, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import axios from 'axios';
import 'aos/dist/aos.css';
import './Contact.css';

Aos.init();

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    description: ''
  });

  const [loading, setLoading] = useState(false); // Add loading state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleBlur = () => {

  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading state to true
    try {
      const response = await axios.post("https://portfolio-backend-166h.onrender.com/contact", formData);
      console.log(response);
      alert("Message sent successfully");
    } catch (error) {
      console.log(error);
      alert("Failed to send message");
    } finally {
      setLoading(false); // Set loading state to false
    }
  }

  return (
    <Container>
      <h2 className='text-center mx-5 fs-1 fw-bolder text-primary text-decoration-underline mb-5'
        data-aos="fade-up">Contact</h2>
      <Row>
        <Col sm={12} md={6} className=''>
          <Form onSubmit={handleSubmit} className='w-75 mx-auto'>
            <Form.Group className="my-3 shadow border-dark" controlId="formName" data-aos="fade-right">
              <Form.Control type="text" placeholder="Enter your name" name="name" 
                value={formData.name} onChange={handleChange} onBlur={handleBlur} />
            </Form.Group>
            
            <Form.Group className="my-3 shadow" controlId="formEmail" data-aos="fade-right">
              <Form.Control type="email" placeholder="Enter your email" name="email" 
                value={formData.email} onChange={handleChange} onBlur={handleBlur} />
            </Form.Group>

            <Form.Group className="my-3 shadow" controlId="formDescription" data-aos="fade-right">
              <Form.Control as="textarea" rows={5} placeholder="Enter your hiring message here" name="description" 
                value={formData.description} onChange={handleChange} onBlur={handleBlur} />
            </Form.Group>

            <Button variant="primary" type="submit" data-aos="fade-down" className="btn-lg mx-auto d-block">
              Hire
            </Button>
          </Form>
        </Col>
        
        <Col sm={12} md={6} className="mt-5 d-flex flex-column justify-content-start align-items-start">
          <h2 className='text-center mx-5 lead text-dark text-decoration-underline mb-5'
            data-aos="fade-down">Let's Connect! Reach Out Anytime</h2> 
          <h5 data-aos="fade-right"><FaEnvelope className='text-primary' size={18} /> jeyachandranjcs@gmail.com</h5>
          <h4 data-aos="fade-right"><FaPhoneAlt className='text-primary' size={18}/>+91 8524000214</h4>
          <Row>
            <Col>
              <a href="https://github.com/jeya-chandran-jcs" target="_blank" rel="noopener noreferrer" className="icon-link"
                data-aos="fade-up">
                <FaGithub size={40} />
              </a>
              <a href="https://www.linkedin.com/in/jeya-chandran-s-1a5b70271/" target="_blank" rel="noopener noreferrer" className="icon-link">
                <FaLinkedin size={40} data-aos="fade-up"/>
              </a>
            </Col>
          </Row>
        
        </Col>
      </Row>

      {loading && (
        <div className="loading-overlay d-flex justidy-content-center align-items-center">
          <Spinner animation="border" variant="primary" />
        </div>
      )}
    </Container>
  );
}
