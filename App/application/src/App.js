import React from 'react';
import './App.scss';
import Main from './components/main';
import { Link } from 'react-router-dom';
import {Navbar, Nav, Container, Row, Col} from 'react-bootstrap';

function App() {
  return (
    <div>
      <h5 className="title"> Leaseplan + </h5>
      <Navbar  fixed="bottom"  className="justify-content-center navbar">
      <Nav>
        <Row>
          <Col>
            <Nav.Link> <Link to="/">Home</Link> </Nav.Link>
          </Col>
          <Col>
            <Nav.Link> <Link to="/agenda">Agenda</Link> </Nav.Link>
          </Col>
          <Col>
            <Nav.Link> <Link to="/notifications">Notification</Link> </Nav.Link>
          </Col>
        </Row>
      </Nav>
    </Navbar>
    <Main/>
    </div>
  );
}

export default App;


