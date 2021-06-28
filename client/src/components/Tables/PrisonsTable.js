import axios from 'axios'
import ApiHandlerContext from 'context/ApiHandlerContext'
import React, { useContext, useState } from 'react'
import { Button, Card, CardBody, CardHeader, CardTitle, Col, Row, Table } from 'reactstrap'

const PrisonsTable = () => {
  const {getAllPrisons,refresh ,setRefresh}  = useContext(ApiHandlerContext)

const [data,setData]=useState([{id:'',name:'', password:''}])
const [r,rr]=useState(false)

 React.useEffect(async() => {
setData(await getAllPrisons());
  }, [r,refresh])



    return (
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Prisons Table</CardTitle>
              </CardHeader>
              <CardBody>
                <Table responsive  hover >
                  <thead className="text-primary">
                    <tr>
                      <th>SERIAL NO</th>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Occupancy</th>
                      <th>Available Space</th>

                      {/* <th className="text-right"></th> */}
                    </tr>
                  </thead>
                  <tbody>
                  {data.map((o, i ) =>{ 
  return(<tr key={i}>
    <td>{`${i+1}`}</td>
    <td>{`JAIL - ID USPL${o.id}`}</td>
    <td className="">{o.name}</td>
    <td className="">{o.occupancy}</td>
    <td className="">{o?.availableSpace || o.occupancy}</td>


    <td className="text-right"  > <Button color="danger" onClick = { async e=>{
      await axios.delete(`/api/prisons/${o.id}`);
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

export default PrisonsTable
