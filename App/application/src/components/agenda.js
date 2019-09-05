import React, { Component } from "react";
import { useState } from 'react';
import Form from "react-bootstrap/Form";
import DatePicker from "react-datepicker";
import axios from "axios";
import {Container, Row, Col, Button, Alert} from "react-bootstrap";

import "react-datepicker/dist/react-datepicker.css";
import {init, runAi} from '../training'
class Agenda extends Component {

  constructor() {
    super();
    init()
    this.state = {
        startDate: new Date(),
        title: "",
        location: [0,0],
        datapicker: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

    fetchData= async() =>{
        const response = await fetch('http://localhost:1348/user')
        const agenda = await response.json();
        this.setState({data:agenda})
    }
    componentDidMount(){
      this.fetchData();
    }

    handleChange(evt) {
      this.setState({ [evt.target.name]: evt.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();
        let location = this.state.location;
        let aiData;
        let output;
        aiData = this.makeFloats(this.state.title, this.state.startDate, location)
        output = runAi(aiData[0], aiData[1], aiData[2], aiData[3])
        let carTrue = document.getElementById('carTrue')
        let carFalse = document.getElementById('carFalse')
        if (output.iscar > 0.5){
            carFalse.classList.add("hidden");
            carTrue.classList.remove("hidden");
            carTrue.classList.remove("hidden");
        }else{
            carTrue.classList.add("hidden");
            carFalse.classList.remove("hidden");
        }
    }
    makeFloats(title, date, location){

        title = 0 + Math.random() * (19 - 0)
        let name_index
        let aiData = [];

        name_index = parseInt(title, 10)
        aiData.push(name_index/19);
        console.log(location)
        if(date != "0000-00-00 00:00:00"){
            aiData.push(1/(Date.parse(date)/1000000000000));
        }else{
            aiData.push(0.7)
        }
        if (location == '4.895168,52.370216') {
            aiData.push( 1/4.895168)
            aiData.push(10/52.370216)
        }
        if (location == '4.4777325,51.9244201') {
            aiData.push( 1/4.4777325)
            aiData.push(10/51.9244201)
        }
        if (location == '5.1214201,52.0907374') {
            aiData.push( 1/5.1214201)
            aiData.push(10/52.0907374)
        }
        if (location == '2.3522219,48.856614') {
            aiData.push( 1/2.3522219)
            aiData.push(10/48.856614)
        }

        return aiData
    }
    render() {
    return (
      <div className="agenda">
        <Container>
          <h3>Add agenda item</h3>
            <Form>
              <Form.Group as={Row} controlId="Title">
                <Col sm={10}>
                  <Form.Control value={this.state.title} name="title" onChange={this.handleChange} type="title" placeholder="Title" />
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="datepicker" className=" datepicker-wrapper">
                <DatePicker
                  selected={this.state.startDate}
                  onChange={this.handleChange}
                  timeFormat="HH:mm"
                  timeIntervals={15}
                  dateFormat="MMMM d, yyyy h:mm aa"
                  timeCaption="time"
                  isClearable={false}
                  name="datepicker"
                  className="datepicker form-control"
                />
              </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Control as="select" placeholder="Location" name="location" value={this.state.location} onChange={this.handleChange}>
                        <option value={[4.895168, 52.370216]}>Amsterdam</option>
                        <option value={[4.4777325, 51.9244201]}>Parijs</option>
                        <option value={[5.1214201, 52.0907374]}>Rotterdam</option>
                        <option value={[2.3522219, 48.856614]}>Utrecht</option>
                    </Form.Control>
                </Form.Group>
              <Form.Group as={Row}>
                <Col sm={{ span: 10, offset: 2 }}>
                  <Button onClick={this.handleSubmit}>Add</Button>
                </Col>
              </Form.Group>
            </Form>
            <Row id="carTrue" className="hidden">
                <Col>
                    <Alert variant="success">
                        <Alert.Heading>Hey, you ARE in need of a car!</Alert.Heading>
                        <p>
                            Is this correct?
                        </p>
                        <hr />
                        <p className="mb-0">
                            <Row>
                                <Col>
                                    <Button variant="info">Yes</Button>
                                </Col>
                                <Col>
                                    <Button variant="danger">No</Button>
                                </Col>
                            </Row>
                        </p>
                    </Alert>
                </Col>
            </Row>
            <Row id="carFalse" className="hidden">
                <Col>
                    <Alert variant="danger">
                        <Alert.Heading>Hey, you AREN'T in need of a car!</Alert.Heading>
                        <p>
                            Is this correct?
                        </p>
                        <hr />
                        <p className="mb-0">
                            <Row>
                                <Col>
                                    <Button variant="info">Yes</Button>
                                </Col>
                                <Col>
                                    <Button variant="danger">No</Button>

                                </Col>
                            </Row>
                        </p>
                    </Alert>
                </Col>
            </Row>
        </Container>
      </div>
    );
    }
    }

    export default Agenda;
