import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Aos from 'aos';
import 'aos/dist/aos.css';
import './Intern.css';

Aos.init();

export default function Intern() {
  return (
    <Container>
      <h2 className='text-center mx-5 fs-1 fw-bolder text-primary text-decoration-underline mb-5'
        data-aos="fade-up">internship</h2>
      <Row>
        <Col sm={12} md={4}>
          <img src="/intern.jpg" alt="Intern" className="img-fluid float-animation" data-aos="fade-right" />
        </Col>
        <Col sm={12} md={8} className="text-center lead text-lg-start">
          <p data-aos="fade-right">
          Developed a web application with Python backend and MySQL database management.
          </p>
          <hr/>
          <p data-aos="fade-right">
          Focused on frontend development using JavaScript and React.js.
          </p >
          <hr/>
          <p data-aos="fade-right">
          Collaborated with team members to integrate frontend and backend components seamlessly.
          </p>
          <hr/>
          <p data-aos="fade-right">
          Participated in team tasks for performance improvement and bug fixing.
          </p>
          <hr/>
          <p data-aos="fade-right">
          Acquired and applied skills in HTML, CSS, and JavaScript under the mentorship of the project manager.
          </p>
          <hr/>
          <p data-aos="fade-right">
          Technologies Used: HTML, CSS, JavaScript, React, Python, MySQL.
          </p>

        </Col>
      </Row>
    </Container>
  )
}
