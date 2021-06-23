import React from 'react'
import { Card, CardBody, Col, Container, Jumbotron, Row } from 'reactstrap'
import LoginForm from './LoginForm'

const Login = () => {
    return (
        <div className="content">
            <Container>
        <Row>
          <Col />
          <Col lg="8">
            <Jumbotron>
              <h3>
                <u>Login Form</u>
              </h3>
              <hr />
              <Card>
                <CardBody>
                  <LoginForm />
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

export default Login
