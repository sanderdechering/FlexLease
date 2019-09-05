import React, { Component } from "react";
import { Container, Row, Col, Button, Image, CardGroup, CardImg } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import {Link} from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <Container>
          <Row>
            <Col>
              <Card className="card">

                <Card.Img
                  variant="top"
                  src=".\img\suzuki.jpg"
                />
                <Card.Body>
                  <Card.Title>
                    Car in use:
                </Card.Title>
                  <Card.Text>
                    Brand: Suzuki
                    <br/>
                    Type: Swift
                    <br/>
                    Kilometers: 500.000
                  </Card.Text>
                  <Button variant="danger">Force switch car</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col>
              <Link to="./notifications" className="button">
                  <Row>
                      <Col>Notifications</Col>
                      <Col>0</Col>
                  </Row>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Home;
