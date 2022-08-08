import React from 'react'
import { useState } from 'react';
import { Link } from "react-router-dom"
import { Dropdown, Grid, Card, Row, Button, Spacer, Text, Container, Modal, Loading } from "@nextui-org/react"

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
    function setTab(e){
        setselectedTab(e.currentKey)
        if (e.currentKey == "assignAll"){
            setVisible(true)
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
	const closeHandler = () => {
		setVisible(false);
	};
    const pressed = (e) => {
        if (e == "cancel"){
            console.log("cancelled")
            setVisible(false)
        }
        if (e == "confirm"){
            console.log("confirmed")
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
                </Row>
				</Modal.Body>
				<Modal.Footer></Modal.Footer>
			</Modal>
		</div>
	);
}