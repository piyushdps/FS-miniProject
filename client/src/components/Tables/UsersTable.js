import ApiHandlerContext from 'context/ApiHandlerContext'
import React, { useContext, useState } from 'react'
import { Card, CardBody, CardHeader, CardTitle, Col, Row, Table } from 'reactstrap'


const UsersTable = () => {
const {getAllUsers,refresh ,setRefresh}  = useContext(ApiHandlerContext)

const [data,setData]=useState([{id:'',name:'', password:''}])
 React.useEffect(async() => {
setData(await getAllUsers());
  }, [refresh])

    return (
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Users Table</CardTitle>
              </CardHeader>
              <CardBody>
                <Table responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Name</th>
                      <th>Username</th>
                      <th className="text-right">Hashed Password</th>
                      {/* <th className="text-right">Salary</th> */}
                    </tr>
                  </thead>
                  <tbody>
                   {data.map((o, i ) =>{ 
  return(<tr key={i}>
    <td>{o.name}</td>
    <td>{o.id}</td>
    <td className="text-right">{o.password}</td>
    {/* <td className="text-right">$36,738</td> */}
  </tr>
  )
})}
                   
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
         
        </Row>
      
            
        
    )
}

export default UsersTable
