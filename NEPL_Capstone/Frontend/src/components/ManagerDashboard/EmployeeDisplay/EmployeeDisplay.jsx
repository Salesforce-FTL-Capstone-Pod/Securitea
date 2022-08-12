import React from "react";
import Navbar from "../../Navbar/Navbar";
import { useState } from 'react';
import { Container, Box} from "@mui/material";
import { Link } from "react-router-dom";
import * as color from "../../../assets/colorPalette"
import { Text, Button, Spacer, Row, Progress, User, Collapse, Avatar, Grid, Card, Table, Container as NextContainer, Modal } from "@nextui-org/react"
import apiClient from "../../../services/apiClient"
import { StyledBadge } from "../EmployeeTable/StyledBadge";

export default function EmployeeDisplay({ employees, company, logo, setReload }) {

  return (
    <Content setReload={setReload} employees={employees} company={company} logo={logo} />
  );
}

function Content({ employees, company, logo, setReload }) {
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
          <Tayble setReload={setReload} employees={employees} valid={true} logo={logo} showBox={false} />
    </Grid>
   </Grid.Container>
   </NextContainer>
  )
}

export function Tayble({ employees, valid, logo, showBox, setReload }) {
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
      key: "pingStatus1",
      label: "PING STATUS: MODULE 1",
    },
    {
      key: "pingStatus2",
      label: "PING STATUS: MODULE 2",
    },
  ];
  const rows = []
  let status2 = "Not Pinged"
  let status1 = "Not Pinged"
  if (valid == true){
  for (const employee in employees.info.podProgress){
    if (employees.info.podProgress[employee].wasPinged.waspinged1 == true){
      status1 = "Pinged"
    }
    if (employees.info.podProgress[employee].wasPinged.waspinged2 == true){
      status2 = "Pinged"
    }
    rows.push({
      key: employee,
      progress: employees.info.podProgress[employee],
      name: 
      <User bordered color="success" src={logo} name={employees.info.podProgress[employee].name} css={{ p: 0 }}>
      
      </User>,
      email: employees.info.podProgress[employee].email,
      pingStatus1: <StyledBadge type={employees.info.podProgress[employee].wasPinged.waspinged1 == true ? "active" : "paused"}>{status2}</StyledBadge>,
      pingStatus2: <StyledBadge type={employees.info.podProgress[employee].wasPinged.waspinged2 == true ? "active" : "paused"}>{status2}</StyledBadge>,
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
    {selectedEmployee == undefined ? <></> : <><EmployeeModal setReload={setReload} pingStatus1={status1} pingStatus2={status2} visible={visible} setVisible={setVisible} employees={rows} selectedEmployee={selectedEmployee} logo={logo} /></>}
    </>
  );
}


export function EmployeeModal({ visible, setVisible, employees, selectedEmployee, logo, pingStatus1, pingStatus2, setReload }){
  

  const employee = {
    name: employees[selectedEmployee].progress.name,
    email: employees[selectedEmployee].progress.email,
    module1ping: employees[selectedEmployee].progress.wasPinged.waspinged1,
    module2ping: employees[selectedEmployee].progress.wasPinged.waspinged2,
    phishingProgress: employees[selectedEmployee].progress[1],
    safetyProgress: employees[selectedEmployee].progress[2]
  }
  async function sendPings(email, modules) {
    console.log("strig" , email, modules)
    const res = await apiClient.pingEmployee(email, modules);
    console.log(res)
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
            <StyledBadge type={employee.module1ping == true ? "active" : "paused"}>Phishing Module: {employee.module1ping.toString()}</StyledBadge>
            <StyledBadge type={employee.module2ping == true ? "active" : "paused"}>Safety Tips Module: {employee.module1ping.toString()}</StyledBadge>
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
                <Button color="success" onClick={() => sendPings(employee.email, 1)}>
                  Ping to Complete
                </Button>
              </Row>
            </Collapse>
            <Collapse title="Module Safety Tips Progress">
              <Row justify="space-between">
              <Text>
                {employee.safetyProgress.progress} out of {employee.safetyProgress.steps} Steps Completed
                <Progress color="gradient" value={10} />
              </Text>
              <Button color="success" onClick={() => sendPings(employee.email, 2)}>
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

