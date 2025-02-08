import React from 'react';
import { Container, Row, Col, } from 'react-bootstrap';
import { FaRegSmile ,FaCode} from 'react-icons/fa';
import "./footer.css";

export default function Footer() {
    return (
      <footer className="bg-dark text-light py-4 mt-3" style={{ bottom: 0, width: "100%" }}>
        <Container>
          <Row>
            <Col>
              <p className="text-center mb-3">Thank you for visiting my portfolio. Have a great day!</p>
            </Col>
          </Row>
          <Row className="text-center">
            <Col className="text-center d-flex justify-content-center ">
              <FaCode size={30}  className="mb-3 btn-warning text-dark  rounded" />
              <p className='mx-1 fs-4'>Jeya Chandran S</p>
            </Col>
          </Row>
          {/* <Row>
            <Col className="text-center">
              <p className="mb-0">© {new Date().getFullYear()} Jeya Chandran S. All rights reserved.</p>
            </Col>
          </Row> */}
        </Container>
      </footer>
    );
  }