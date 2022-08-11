import React from "react";
import Navbar from "../../Navbar/Navbar";
import { useState } from 'react';
import { Container, Box} from "@mui/material";
import { Link } from "react-router-dom";
import * as color from "../../../assets/colorPalette"
import { Text, Button, Spacer, Row, Progress, User, Collapse, Avatar, Grid, Card, Table, Container as NextContainer, Modal } from "@nextui-org/react"
import apiClient from "../../../services/apiClient"
import { StyledBadge } from "../EmployeeTable/StyledBadge";

export default function EmployeeDisplay({ employees, company, logo }) {

  return (
    <Content employees={employees} company={company} logo={logo} />
  );
}

function Content({ employees, company, logo }) {
  return (
    <NextContainer css={{marginBototm: "10vh", minWidth: "100vh" }} fluid>
      <Spacer></Spacer>
      <Spacer></Spacer>
   <Grid.Container justify='center'>
    <Grid>
      <Row justify="center">

      <Text color="black" weight="medium" h3 size={30} css={{ textAlign: "center", marginTop: "-4vh"}}>
          {company} Employees Under Your Management
      </Text>
      </Row>
          <Tayble employees={employees} valid={true} logo={logo} showBox={false} />
    </Grid>
   </Grid.Container>
   </NextContainer>
  )

  // return (
  //   <Container sx={{ display: "flex", minHeight: "100vh", marginBottom: "10vh"}} disableGutters>
  //     <Container>

  //     <Button onClick={fetchEmployees}>Fetch Employees</Button>
  //     <Tayble employees={employees} valid={valid} />
  //     </Container>
  //   </Container>
  // );
}

export function Tayble({ employees, valid, logo, showBox }) {
  const columns = [
    {
      key: "name",
      label: "NAME",
    },
    {
      key: "email",
      label: "EMAIL",
    },
    {
      key: "status",
      label: "PING STATUS",
    },
  ];
  const rows = []
  if (valid == true){
  for (const employee in employees.info.podProgress){
    let pingStatus = "Not Pinged"
    if (employees.info.podProgress[employee].wasPinged.waspinged == true){
      pingStatus = "Pinged"
    }
    rows.push({
      key: employee,
      progress: employees.info.podProgress[employee],
      name: 
      <User bordered color="success" src={logo} name={employees.info.podProgress[employee].name} css={{ p: 0 }}>
      
      </User>,
      email: employees.info.podProgress[employee].email,
      status: pingStatus
    })
  }
  }
  const [visible, setVisible] = useState(false)
  const [selectedEmployee, setselectedEmployee] = useState()
  function displayModal(e){
    setselectedEmployee(e.currentKey)
    setVisible(true)
    if(e.size == 0){
      setVisible(false)
    }
    if (e.size == 1){
    }
  }

  return (
    <>
    <Table
      aria-label="Example table with dynamic content"
      css={{
        height: "auto",
        minWidth: "90vh",
        background: "white"
      }}
      selectionMode="single"
      onSelectionChange={(e) => displayModal(e)}
      showSelectionCheckboxes={showBox}
    >
      <Table.Header columns={columns}>
        {(column) => (
          <Table.Column key={column.key}>{column.label}</Table.Column>
        )}
      </Table.Header>
      <Table.Body items={rows}>
        {(item) => (
          <Table.Row key={item.key}>
            {(columnKey) => <Table.Cell>{item[columnKey]}</Table.Cell>}
          </Table.Row>
        )}
      </Table.Body>
    </Table>
    {selectedEmployee == undefined ? <></> : <><EmployeeModal visible={visible} setVisible={setVisible} employees={rows} selectedEmployee={selectedEmployee} logo={logo} /></>}
    </>
  );
}


export function EmployeeModal({ visible, setVisible, employees, selectedEmployee, logo}){
  const employee = {
    name: employees[selectedEmployee].progress.name,
    email: employees[selectedEmployee].progress.email,
    module1ping: employees[selectedEmployee].progress.wasPinged.waspinged1,
    module2ping: employees[selectedEmployee].progress.wasPinged.waspinged2,
    phishingProgress: employees[selectedEmployee].progress[1],
    safetyProgress: employees[selectedEmployee].progress[2]
  }
  
  return(
    <Modal
    scroll
    width="40%"
    aria-labelledby="modal-title"
    aria-describedby="modal-description"
    open={visible}
    onClose={() => setVisible(false)}
  >
      <Modal.Header>
        <Text id="modal-title" weight="normal" size={18}>
          Viewing information for <Text weight="semibold"  size={22} >{employee.name}</Text>
        </Text>
      </Modal.Header>
      <Modal.Body>
      <Text id="modal-description">
          
        </Text>
        
        <Row justify="center" css={{ marginLeft: "6vh"}} >
        <Avatar
                  css={{ size: "$20",}}
                  src={logo}
                  color="gradient"
                  bordered
          />
          
          <Card variant="flat" css={{ marginLeft: "0.5vh", background: "white", maxWidth: "50%"}}>
            
          <Text id="modal-title" weight="thin" size={15}>
            
            Name <Text weight="semibold"  size={20} >{employee.name}</Text>
          </Text>

          <Text id="modal-title" weight="thin" size={15}>
            Email <Text weight="semibold"  size={20} >{employee.email}</Text>
            <StyledBadge type={employee.module1ping == true ? "active" : "paused"}>PINGED: {employee.module1ping}</StyledBadge>
            <StyledBadge type={employee.module2ping == true ? "active" : "paused"}>PINGED: {employee.module2ping}</StyledBadge>
          </Text>
          
          </Card>

        </Row>

          <Collapse.Group accordion={false}>
            <Collapse title="Module Phishing Progress">
              <Row justify="space-between">
                <Text>
                  {employee.phishingProgress.progress} out of {employee.phishingProgress.steps} Steps Completed
                  <Progress color="gradient" value={10} />
                </Text>
                <Button color="success" >
                  Ping to Complete
                </Button>
              </Row>
            </Collapse>
            <Collapse title="Module Safety Tips Progress">
              <Row justify="space-between">
              <Text>
                {employee.safetyProgress.progress} out of {employee.safetyProgress.steps} Steps Completed
                <Progress color="gradient" value={100} />
              </Text>
              <Button color="success">
                Ping to Complete
              </Button>
              </Row>
            </Collapse>
          </Collapse.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button auto flat color="error" onClick={() => setVisible(false)}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

