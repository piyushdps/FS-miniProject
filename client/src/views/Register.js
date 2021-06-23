import React from 'react'
import { Card, CardBody, Col, Container, Jumbotron, Row } from 'reactstrap'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'

const Register = () => {
    return (
        <div className="content">
            <Container>
        <Row>
          <Col />
          <Col lg="8">
            <Jumbotron>
              <h3>
                <u>Register Form</u>
              </h3>
              <hr />
              <Card>
                <CardBody>
                  <RegisterForm />
                </CardBody>
              </Card>
            </Jumbotron>
          </Col>
          <Col />
        </Row>
      </Container>
        </div>
    )
}

export default Register
