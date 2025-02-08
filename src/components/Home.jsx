import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import { Link } from 'react-scroll';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css';

AOS.init();

const Home = () => {
  const [currentTitle, setCurrentTitle] = useState(0);
  const titles = ['Backend Developer', 'Node.js Developer', 'API Architect'];



  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTitle((prevTitle) => (prevTitle + 1) % titles.length);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

 

  return (
    <div className="container-fluid home-container">
      <Row className="align-items-center">
        <Col xs={12} md={6} className="text-center" data-aos="fade-right">
          <h1 className="text-dark cursive text1">Hi, I'm</h1>
          <h1 className="text-primary text2">Jeya Chandran</h1>
          <h2 className="text3 mt-3 fw-bold">{titles[currentTitle]}</h2>
          <div className="d-flex justify-content-center align-items-center gap-2 mt-3">
            <button className="btn btn-outline-primary btn-lg"  data-aos="fade-left">
              <Link to="contact" activeClass="active" spy={true} smooth={true} offset={50} 
              duration={100}>Contact</Link></button>
            <a href="https://github.com/jeya-chandran-jcs" target="_blank" rel="noopener noreferrer" className="icon-link" data-aos="fade-up">
              <FaGithub size={40} />
            </a>
            <a href="https://www.linkedin.com/in/jeya-chandran-s-1a5b70271/" target="_blank" rel="noopener noreferrer" className="icon-link" data-aos="fade-right">
              <FaLinkedin size={40} />
            </a>
          </div>
        </Col>
        <Col xs={12} md={6} className="text-center my-2" data-aos="fade-left">
          <img src="/hi.jpg" alt="Jeya Chandran" className="img-fluid rounded-circle float-animation" />
        </Col>
      </Row>
    </div>
  );
};

export default Home;
