import React from 'react'
import { Container, Row, Card, Col } from 'react-bootstrap'
import Aos from 'aos';

import 'aos/dist/aos.css';
import './education.css';  // Import the custom CSS file

Aos.init();

const data = [
    {
        name: "IIT Madras, Guvi Bootcamp-Zen class",
        subject: "Full Stack Web Development-MERN",
        certificate:"https://drive.google.com/file/d/1iqYi1K1G2NwRj9sNmOjcAKddYwRPLZp7/view?usp=sharing",
        year: 2023
    },
    {
        name: "Ultra Arts and Science College",
        subject: "Master of Computer Science",
        year: 2023,
        cgpa: "7.8"
    },
    {
        name: "S.Vellaichamy Nadar College",
        subject: "Bachelor of Computer Application",
        year: 2021,
        cgpa: "7.5"
    }
]

export default function Education() {
  return (
    <Container className=" my-5">
      <h2 className='text-center mx-5 fs-1 fw-bolder text-primary text-decoration-underline mb-5'
        data-aos="fade-up">Education</h2>
      <Row className="g-4 d-flex flex-wrap justify-content-center" >
        {data.map((item, index) => {
          return (
            <Col xs={12} md={6} lg={4} key={index} className="d-flex">
              <Card className="border border-info w-100 bg-light" data-aos="fade-up">
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>{item.subject}</Card.Text>
                  {item.cgpa && <Card.Text>CGPA: {item.cgpa}</Card.Text>}
                  {item.certificate ? <Card.Text> <a href={item.certificate} className="text-primary" target="_blank"> 
                    View Certificate &gt;&gt;</a></Card.Text> : null} 
                  <div className="mt-auto">
                    <Card.Footer className="text-muted">{item.year}</Card.Footer>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          )
        })}
      </Row>
    </Container>
  )
}
