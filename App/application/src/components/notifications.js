import React, { Component } from "react";
import { Accordion, Form, Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";

class Notifications extends Component {
  render() {
    return (
      <div className="notifications">
        <Accordion>
          <Card>
            <Card.Header>Car request</Card.Header>
            <Card.Body>
              <Card.Text>
                Dear user, In your agenda we saw you planned to move. We have
                taken the initiative to reserve a car for you. The car we have
                for you have selected is a: Kia Pikanto. For the duration from:
                23-12-2019 to: 24-12-2019
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="acceptButton">
            <Accordion.Toggle as={Card.Header} eventKey="0">
              Accept
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body> Are you sure? <br/> <Form>
              <Button variant="outline-light" size="sm" type="submit">
                        Accept
                      </Button></Form> </Card.Body>
              
            </Accordion.Collapse>
          </Card>
          <Card className="declineButton">
            <Accordion.Toggle as={Card.Header} eventKey="1">
              Decline
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <Form>
                  {["checkbox"].map(type => (
                    <div key={`default-${type}`} className="mb-3">
                      <Form.Check
                        type={type}
                        id={`default-${type}`}
                        label={`I don't need the vehicle`}
                      />
                      <Form.Check
                        type={type}
                        id={`default-${type}`}
                        label={`i do need a vehicle but not this type of vehicle`}
                      />
                      <Form.Check
                        type={type}
                        id={`default-${type}`}
                        label={`The date or duration time is wrong`}
                      />
                      <Form.Check
                        type={type}
                        id={`default-${type}`}
                        label={`Other`}
                      />
                      <Button variant="outline-light" size="sm" type="submit">
                        Submit
                      </Button>
                    </div>
                  ))}
                </Form>{" "}
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    );
  }
}

export default Notifications;
