

import ApiHandlerContext from "context/ApiHandlerContext";
import React,{useContext, useEffect} from "react";
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
  InputGroupText,
} from "reactstrap";



function UpdatePrisoner() {
 const {prisonerId,setPrisonerId,disabled,setDisabled}=useContext(ApiHandlerContext)

  const context = useContext(ApiHandlerContext)


const getPrisoner = async( e ) =>{
e.preventDefault();
continueNextStep()
}


const continueNextStep = async () =>{
  setDisabled(true)
if(await context.getSpecificPrisoners(prisonerId)){
setDisabled(false)}
}

useEffect(() => {

  if(prisonerId){
    continueNextStep()
  }}, [])

useEffect(() => {

  console.log(data)}, [context.prisonerState])

const updatePrisonerClient = (e) =>{
  setDisabled(true)
e.preventDefault();

context.updatePrisoner(prisonerId);
}


  const notificationAlert = React.useRef();
const data = context.prisonerState
const setData = context.setPrisonerState

  return (
    <><NotificationAlert ref={notificationAlert} />
    <div className="content">
      <Row>
        <Col md='2'></Col>
        <Col md="8">
        { disabled && 
        <Card className="card-user">
            <CardHeader>
              <CardTitle tag="h5">Update Criminal</CardTitle>
            </CardHeader>
            <CardBody>

              <Form onSubmit={getPrisoner}>
                <Row>
                  <Col className="pr-1" md="5">
                    <FormGroup>
                      <label>Find Criminal</label>
                      <Input
                        defaultValue=""
                        required

                        value={prisonerId}
                        onChange={e=>{setPrisonerId(e.target.value)}}
                        placeholder="Criminal Id"
                        type="text"
                      />
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
                      Find Criminal
                    </Button>
                  </div>
                </Row>
              </Form>
 
            </CardBody>
          </Card>

        }



       { !disabled &&  <Card className="card-user">
            <CardHeader>
            </CardHeader>
            <CardBody>
<fieldset disabled ={disabled}>
              <Form onSubmit={e=>{updatePrisonerClient(e)}}>
                <Row>
                  <Col className="pr-1" md="5">
                    <FormGroup>
                      <label>Name</label>
                      <Input
                      value = {data.name}
                        defaultValue=""
                        onChange={e=>{setData({...data, name:e.target.value})}}
                        placeholder="Criminal Name"
                          required
                          type="text"
                      />
                    </FormGroup>
                  </Col>
                  <Col className="px-1" md="6">
                    <FormGroup>
                      <label>Crime</label>
                      <Input
                                 value = {data.crime}
                        defaultValue=""
                        onChange={e=>{setData({...data,crime:e.target.value})}}
                        placeholder={"Theft , Murder "}
                          required
                          type="text"
                      />
                    </FormGroup>
                  </Col>
                  </Row>
                  <Row>
                  <Col className="pl-1" >
                    <FormGroup>
                      <label htmlFor="exampleInputEmail1">
                        Prison Id
                      </label>
                      <InputGroupText>	JAIL - ID USPL
                        <Input placeholder="PRISON ID" type="number"  
                          required
                          value = {data.prisonId} onChange={e=>{setData({...data,prisonId:parseInt(e.target.value)})}} /></InputGroupText>
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
                      Update Criminal
                    </Button>
                  </div>
                </Row>
              </Form>
     
              </fieldset>
            </CardBody>
          </Card>
}
       
       
        </Col>
        <Col md='2'></Col>
      </Row>
    </div>
  </>
  );
}

export default UpdatePrisoner;
