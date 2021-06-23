import axios from 'axios'
import ApiHandlerContext from 'context/ApiHandlerContext'
import React, { useContext, useState } from 'react'
import { Button, Card, CardBody, CardHeader, CardTitle, Col, Row, Table } from 'reactstrap'

const PrisonersTable = () => {
  const {getAllPrisoners,refresh ,setRefresh}  = useContext(ApiHandlerContext)

const [data,setData]=useState([{id:'',name:'', crime:''}])
const [r,rr]=useState(false)

 React.useEffect(async() => {
setData(await getAllPrisoners());
  }, [refresh])



    return (
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Prisoner Table</CardTitle>
              </CardHeader>
              <CardBody>
                <Table responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Serial No.</th>
                      <th>Id</th>
                      <th>Name</th>
                      <th>Prison Name</th>
                      <th className="">Crime</th>

                      {/* <th className="text-right">Crime</th> */}
                    </tr>
                  </thead>
                  <tbody>
                   {data.map((o, i ) =>{ 
  return(<tr key={i}>
    <td>{1000+i}</td>
    <td>{o.id}</td>
    <td className="">{o.name}</td>
    <td className="">{o.prisonName}</td>

    <td className="">{o.crime}</td>
    <td className="text-right"  > <Button color="danger" onClick = { async e=>{
      await axios.delete(`/api/prisoners/${o.id}`);
      rr(!r);
      setRefresh(!refresh)
    }} >Delete </Button></td>
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

export default PrisonersTable
