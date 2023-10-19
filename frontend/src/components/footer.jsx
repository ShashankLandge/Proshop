import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  const curr_year = new Date().getFullYear();
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">
            <p> Proshop &copy; {curr_year} </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
