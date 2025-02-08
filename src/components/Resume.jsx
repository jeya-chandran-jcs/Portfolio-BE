import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Aos from 'aos';
import { FaFilePdf ,FaFolderOpen, FaDownload, FaGoogleDrive} from 'react-icons/fa';

Aos.init();
export default function Resume() {
  return (
    <Container className='my-5'>
        <h2 className='text-center mx-5 fs-1 fw-bolder text-primary text-decoration-underline mb-5'
        data-aos="fade-up">Resume</h2>

        <Row className='text-center'>
            <Col sm={12} md={12} className="d-flex justify-content-center align-items-center"> 
                <p className='fs-3 fw-bolder font-italic' data-aos="fade-right"> Download my Resume </p>
                <h4 className='text-primary fw-bold mx-2' data-aos="fade-right">&gt;&gt;</h4>
                <a href="https://drive.google.com/file/d/11GbirCpYWB4UNdZk6LTrZf-2akginOi7/view?usp=sharing" target="_blank" rel="noopener noreferrer" 
                className="icon-link" data-aos="fade-down">
                <FaDownload size={40} data-aos="fade-right"/>
                </a>
            </Col>        
        </Row>
    </Container>
  )
}
