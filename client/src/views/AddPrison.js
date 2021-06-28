

import axios from "axios";
import React, { useState } from "react";
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




function AddPrison() {
  const notificationAlert = React.useRef();

  const [data, setData] = useState({name:"" , occupancy:0})

  const onSubmitHandler = async (e) =>{
e.preventDefault();
    
try {
  const res = await axios.post('/api/prisons', data);  
  const options = {
    place: "tr",
    message: (
      <div>
        <div>
          Prison Registered
        </div>
      </div>
    ),
    type: "success",
    icon: "nc-icon nc-bell-55",
    autoDismiss: 7,
  };
  notificationAlert.current.notificationAlert(options);
} catch (error) {
  const options = {
    place: "tr",
    message: (
      <div>
        <div>
          {error.response.data?.message}
        </div>
      </div>
    ),
    type: "danger",
    icon: "nc-icon nc-bell-55",
    autoDismiss: 7,
  };
  notificationAlert.current.notificationAlert(options);
}

  }
  


  return (
    <><NotificationAlert ref={notificationAlert} />
      <div className="content">
        <Row>
          <Col md='2'></Col>
          <Col md="8">
            <Card className="card-user">
              <CardHeader>
                <CardTitle tag="h5">Add Prison</CardTitle>
              </CardHeader>
              <CardBody>
                <Form onSubmit={onSubmitHandler}>
                  <Row>
                    <Col className="pr-1" md="5">
                      <FormGroup>
                        <label>Name</label>
                        <Input
                          defaultValue=""
                          onChange={e=>{setData({...data, name:e.target.value})}}
                          placeholder="Prison Name"
                          type="text"
                          required
                        />
                      </FormGroup>
                    </Col>
                    <Col className="px-1" md="3">
                      <FormGroup>
                        <label>Occupancy</label>
                        <Input
                          defaultValue=""
                          onChange={e=>{setData({...data,occupancy:parseInt(e.target.value)})}}
                          placeholder={2020}
                          required

                          type="Number"
                        />
                      </FormGroup>
                    </Col>
                    {/* <Col className="pl-1" md="4">
                      <FormGroup>
                        <label htmlFor="exampleInputEmail1">
                          Email address
                        </label>
                        <Input placeholder="Email" type="email" />
                      </FormGroup>
                    </Col> */}
                  </Row>
                 
                  <Row>
                    <div className="update ml-auto mr-auto">
                      <Button
                        className="btn-round"
                        color="primary"
                        type="submit"
                      >
                        Add Prison
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

export default AddPrison;
