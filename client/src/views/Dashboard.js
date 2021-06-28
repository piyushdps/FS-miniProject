
import ApiHandlerContext from "context/ApiHandlerContext";
import React,{useContext} from "react";
// react plugin used to create charts
import { Line, Pie } from "react-chartjs-2";
import TableList from "views/Tables.js";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col,
} from "reactstrap";
// core components

function Dashboard() {

  const { login  , totalPrisons , totalPrisoners, totalUsers,userKaNaam} = useContext(ApiHandlerContext)



  return (
    <>
      <div className="content">
        <Row>
        <h3>
            Hi,{userKaNaam}
          </h3>
        </Row>
        <Row>
        
          <Col lg="4" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-globe text-warning" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">Prisons </p>
                      <CardTitle tag="p">{totalPrisons}</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                  <i className="fas fa-sync-alt" /> Total Prisons Available
                </div>
              </CardFooter>
            </Card>
          </Col>
          <Col lg="4" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-circle-10 text-success" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">Prisoner</p>
                      <CardTitle tag="p">{totalPrisoners}</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                  <i className="fas fa-sync-alt"/> Total Number of Prisoners
                </div>
              </CardFooter>
            </Card>
          </Col>
          <Col lg="4" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-vector text-danger" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">Users</p>
                      <CardTitle tag="p">{totalUsers}</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                  <i className="fas fa-sync-alt" /> Total Number of Users
                </div>
              </CardFooter>
            </Card>
          </Col>
       </Row>
       <Row>
       <Col lg="12" md="6" sm="6">
         <TableList/>
         </Col>
       </Row>
        
     </div>
    </>
  );
}

export default Dashboard;
