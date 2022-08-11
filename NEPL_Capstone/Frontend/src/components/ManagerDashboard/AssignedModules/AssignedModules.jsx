import React from 'react'
import { useState } from 'react';
import { Link } from "react-router-dom"
import { Dropdown, Grid, Card, Row, Button, Spacer, Text, Container, Modal, Loading, Table } from "@nextui-org/react"
import apiClient from '../../../services/apiClient';
function AssignedModules() {
  return (
    <>
    <Grid>
        <Display />
    </Grid>
    </>
  )
}

export default AssignedModules

export function AssignDropdown(){
    const [visible, setVisible] = React.useState(false);
    const [selectedTab, setselectedTab] = useState("");
    const [selectAll, setselectAll] = useState(false)
    function setTab(e){
        setselectedTab(e.currentKey)
        if (e.currentKey == "assignAll"){
            setVisible(true)
        }
        if (e.currentKey == "selectAssign"){
          setselectAll(true)
        }
      }  
    return (
    <>
    <Dropdown>
    <Dropdown.Button color="secondary" flat>Assign Module</Dropdown.Button>
    <Dropdown.Menu
      disabledKeys={[]}
      aria-label="AssignDropdown"
      selectionMode="single"
      onSelectionChange={(e) => setTab(e)}
    >
      <Dropdown.Item key="assignAll"><Text>Assign to All Employees</Text></Dropdown.Item>
      <Dropdown.Item key="selectAssign"><Text>Select Employees to Assign</Text></Dropdown.Item>
      <Dropdown.Item key="4" withDivider color="error">
        Exit
      </Dropdown.Item>
    </Dropdown.Menu>
    </Dropdown>
    <ConfirmModal visible={visible} setVisible={setVisible} />
    <SelectionModal visible={selectAll} setVisible={setselectAll} />
    </>
    )
}

function Display(){
    return(
        <Container fluid>
        <Text h2 weight="normal">
          Modules Assigned
        </Text>
        <Grid.Container gap={2}>
          <Grid>
            <ModuleCard moduleName="Phishing" />
          </Grid>
          <Grid>
            <ModuleCard moduleName="Internet Safety Tips" />
          </Grid>
        </Grid.Container>
      </Container>
    )
}

function ModuleCard({ moduleName }){

    return(
        <Card isHoverable css={{ mw: "350px", bg: "$colors$medpurple" }}>
          <Card.Header css={{ textAlign: "center" }} >
            <Text css={{ textAlign: "center", color: "$colors$black"}} size={30} b>{moduleName}</Text> 
          </Card.Header>
          <Card.Divider />
          <Card.Body css={{ py: "$10"}}>
            <Text css={{ color: "$colors$black" }}>
              Something about the module. Something about the module.  Something about the module. 
              Something about the module. Something about the module. Something about the module. 
              Something about the module. Something about the module. Something about the module.  
            </Text>
            <Spacer></Spacer>
          </Card.Body>
  
          <Card.Divider />
  
          <Card.Footer>
            <Row justify="flex-end">
              <AssignDropdown />
            </Row>
          </Card.Footer>
        </Card>
    );
}

function ConfirmModal({ visible, setVisible }){
  const delay = ms => new Promise(res => setTimeout(res, ms));


  const [loading, setLoading] = useState(false)
  const [confirmation, setConfirmation] = useState(false)
	const closeHandler = () => {
		setVisible(false);
	};

    const pressed = (e) => {
        if (e == "cancel"){
            setVisible(false)
        }
        if (e == "confirm"){
            async function ping(){
              setLoading(true)
              const res = await apiClient.pingAllEmployees()
              console.log(res)
              await delay(2000);
              setLoading(false)
              setConfirmation(true)
            }
            ping()
        }
    };
    
	return (
		<div>
			<Modal
				closeButton
				aria-labelledby="modal-title"
				open={visible}
				onClose={closeHandler}
			>
				<Modal.Body>
          {loading == false && confirmation == false ? <>
                <Row justify="center" align="center">
                    <Text b>Confirm Action</Text>
                </Row>
                <Row>
                    <Text css={{ textAlign: "center"}}>
                    Are you sure you want assign this module to all your employees? By doing this, they will receieve a notification to complete the module by a certain time.
                    </Text>
                </Row>
                <Row justify='space-between' align="center">
                <Button auto color="error" key="cancel" onClick={() => pressed("cancel")}>
                    Cancel
                </Button>
                <Button auto css={{ background: "green"}} key="confirm" onClick={() => pressed("confirm")}>
                    Confirm
                </Button>
                </Row></> : 
                <>{confirmation == true ? <></> : <Loading>Pinging all employees</Loading>}</>}
          {confirmation == true && loading == false ? <>
            <Row justify="center" align="center">
                    <Text css={{ marginBottom: "0vh"}} b>All employees were successfully pinged!</Text>
                </Row>
              </>:<></>}
				</Modal.Body>
				<Modal.Footer></Modal.Footer>
			</Modal>
		</div>
	);
}

function SelectionModal({ visible, setVisible }){
  const [selected, setSelected] = useState([])
  const closeHandler = () => {
		setVisible(false);
	};

  function addEmployees(e){
    setSelected([...selected], e)
  }

  function test(keys){
    // console.log("test:", e.entries().forEach((entry) => {console.log(entry)))
    // for (entry of e.values()){
    //   console.log(entry)
    // }
    console.log(keys)
    console.log([...keys])
  }
  return (
      <Modal
				closeButton
				aria-labelledby="modal-title"
				open={visible}
				onClose={closeHandler}
        autoMargin={true}
        css={{ minWidth: "50vh"}}
			>
				<Modal.Body>
          <Table
            aria-label="Example static collection table with multiple selection"
            css={{
              height: "auto",
              minWidth: "100%",
            }}
            selectionMode="multiple"
            onSelectionChange={(e) => test(e)}
          >
              <Table.Header>
                <Table.Column>NAME</Table.Column>
                <Table.Column>ROLE</Table.Column>
                <Table.Column>STATUS</Table.Column>
              </Table.Header>
              <Table.Body>
                <Table.Row key="1">
                  <Table.Cell>Tony Reichert</Table.Cell>
                  <Table.Cell>CEO</Table.Cell>
                  <Table.Cell>Active</Table.Cell>
                </Table.Row>
                <Table.Row key="2">
                  <Table.Cell>Zoey Lang</Table.Cell>
                  <Table.Cell>Technical Lead</Table.Cell>
                  <Table.Cell>Paused</Table.Cell>
                </Table.Row>
                <Table.Row key="3">
                  <Table.Cell>Jane Fisher</Table.Cell>
                  <Table.Cell>Senior Developer</Table.Cell>
                  <Table.Cell>Active</Table.Cell>
                </Table.Row>
                <Table.Row key="4">
                  <Table.Cell>William Howard</Table.Cell>
                  <Table.Cell>Community Manager</Table.Cell>
                  <Table.Cell>Vacation</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
				</Modal.Body>
				<Modal.Footer></Modal.Footer>
			</Modal>
  )
}