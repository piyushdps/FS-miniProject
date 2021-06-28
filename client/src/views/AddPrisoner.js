

import axios from "axios";
import ApiHandlerContext from "context/ApiHandlerContext";
import React, { useContext, useState } from "react";
import NotificationAlert from "react-notification-alert";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
} from "reactstrap";




function AddPrisoner() {
  const notificationAlert = React.useRef();


  const {addPrisoners}= useContext(ApiHandlerContext)
  const [data, setData] = useState({name:"" , prisonId:0 , crime:''})

  


  return (
    <><NotificationAlert ref={notificationAlert} />
      <div className="content">
        <Row>
          <Col md='2'></Col>
          <Col md="8">
            <Card className="card-user">
              <CardHeader>
                <CardTitle tag="h5">Add Prisoner</CardTitle>
              </CardHeader>
              <CardBody>
                <Form onSubmit={e=>{addPrisoners(e,data)}}>
                  <Row>
                    <Col className="pr-1" md="5">
                      <FormGroup>
                        <label>Name</label>
                        <Input
                          defaultValue=""
                          onChange={e=>{setData({...data, name:e.target.value})}}
                          placeholder="Criminal Name"
                          required
                          type="text" 
                        />
                      </FormGroup>
                    </Col>
                    <Col className="px-1" md="3">
                      <FormGroup>
                        <label>Crime</label>
                        <Input
                          defaultValue=""
                          onChange={e=>{setData({...data,crime:e.target.value})}}
                          placeholder={"Theft , Murder "}
                          required
                          type="text" 
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-1" md="4">
                      <FormGroup>
                        <label htmlFor="exampleInputEmail1">
                          Prison Id
                        </label>
                          <Input placeholder="PRISON ID" type="number"  
                          required
                          onChange={e=>{setData({...data,prisonId:parseInt(e.target.value)})}} />
                      </FormGroup>
                    </Col>
                  </Row>
                 
                  <Row>
                    <div className="update ml-auto mr-auto">
                      <Button
                        className="btn-round"
                        color="primary"
                        type="submit"
                      >
                        Add Criminal
                      </Button>
                    </div>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
          <Col md='2'></Col>
        </Row>
      </div>
    </>
  );
}

export default AddPrisoner;
