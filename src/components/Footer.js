import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from '../assets/img/linkedin.svg';
import navIcon2 from '../assets/img/email-1.svg';
import navIcon3 from '../assets/img/whatsapp.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img className="footer-logo" src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">

             <div className="social-icon footersocial-icon">
                           <a href="https://www.linkedin.com/in/andrew-dev87" target="_blank" rel="noopener noreferrer">
                            <img src={navIcon1} alt="LinkedIn" />
                           </a>
                          <a href="mailto:eandrewmiracle@gmail.com" target="_blank" rel="noopener noreferrer">
                          <img src={navIcon2} alt="Email" />
                         </a>
                         <a href="https://wa.me/905488525839" target="_blank" rel="noopener noreferrer">
                         <img src={navIcon3} alt="WhatsApp" />
                       </a>
                       </div>
            <p>Copyright 2025. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
