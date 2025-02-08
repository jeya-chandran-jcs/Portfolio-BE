import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './about.css';

Aos.init();
export default function About() {
  return (
    <div className="py-5">
      <div className="container-fluid home-container">
        <h2
          className="text-center mx-5 fs-1 fw-bolder text-primary text-decoration-underline mb-5"
          data-aos="fade-up"
        >
          About
        </h2>

        <Row className="align-items-center">
          <Col xs={12} lg={4} className="mb-4 mb-lg-0">
            <img
              src="/about.jpg"
              alt="About"
              className="img-fluid rounded shadow float-animation"
              data-aos="fade-right"
            />
          </Col>
          <Col xs={12} lg={8} className="lead">
            <p data-aos="fade-right">
              Hello! I'm Jeya Chandran S, an MSc Computer Science graduate and a
              passionate backend developer. I specialize in building scalable,
              high-performance server-side applications and RESTful APIs.
            </p>
            <hr />
            <p data-aos="fade-right">
              My expertise includes Node.js, Express.js, MongoDB, and MySQL,
              enabling me to design efficient and secure backend systems. I
              focus on database management, API development, authentication,
              and performance optimization.
            </p>
            <hr />
            <p data-aos="fade-right">
              I thrive in collaborative environments, working closely with
              frontend developers to create seamless applications. I'm
              passionate about problem-solving and optimizing backend logic for
              better performance and scalability.
            </p>
            <hr />
            <p data-aos="fade-right">
              If you're looking for a backend developer who can design and
              maintain robust server-side systems, I'm excited to contribute to
              your team. Let's build something powerful together!
            </p>
          </Col>
        </Row>
      </div>
    </div>
  );
}
