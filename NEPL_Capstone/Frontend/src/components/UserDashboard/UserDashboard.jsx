import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { Container } from "@mui/material";
import { Avatar, Grid } from "@nextui-org/react";
import { Container as NextContainer, Card, Row, Text, Table, Spacer, Progress, Button, Checkbox, Textarea } from "@nextui-org/react";
import { useState } from "react";
import "./UserDashboard.css";
import Footer from "../Footer/Footer";
import { useAuthContext } from "../../contexts/auth"

function UserDashboard() {
  const { user } = useAuthContext();
  const [selectedTab, setselectedTab] = useState("Modules")

  return (
    <>
      <Navbar />
      <Hero user={user} />
      <Container maxWidth={false} disableGutters sx={{display: "flex", justifyContent: "center"}}>
        <Sidebar selectedTab={selectedTab} setselectedTab={setselectedTab} />
        <Grid.Container gap={2} css={{flexDirection: "column"}}>
          {selectedTab == "Modules" ? <Modules ModuleDisplay={ModuleDisplay} ModulesComplete={ModulesComplete}/> : <></>}
          {selectedTab == "Settings" ? <Settings user={user} /> : <></>}
          {selectedTab == "Progress" ? <h1>Progress</h1> : <></>}
          {selectedTab == "Profile" ? <h1>Profile</h1> : <></>}
        </Grid.Container>
      </Container>
      <Footer />
    </>
  );
}
export default UserDashboard;

function Hero({ user }) {
  const greetingText = `Good afternoon, Mr. ${user.firstName} ${user.last_name}`;
  return (
    <Container maxWidth={false} disableGutters>
      <Card
        css={{
          $$cardColor: "$colors$primary",
          borderRadius: "0px",
          height: "10vw",
        }}
      >
        <Card.Body>
        <Avatar
                css={{ size: "$20"}}
                src="https://logos-world.net/wp-content/uploads/2020/10/Salesforce-Emblem.png"
                color="gradient"
                bordered
        />
        <Text h1>{greetingText}</Text>
        </Card.Body>
      </Card>
    </Container>
  );
}


function Sidebar({ selectedTab, setselectedTab }) {
  function setTab(e){
    setselectedTab(e.currentKey)
  }  
  if (!selectedTab){
    setselectedTab("Modules")
  }
  console.log(selectedTab)
  return (
    <NextContainer css={{ marginLeft: "0px", width: "20%"}} fluid>
    <Table
    defaultSelectedKeys={[selectedTab]}
    selectedKeys={[selectedTab]}
    disallowEmptySelection
    onSelectionChange={(e) => setTab(e)}
    aria-label="My Stuff Table"
    css={{
      height: "auto",
      minWidth: "20%",
    }}
    selectionMode="single"
    >
      <Table.Header>
        <Table.Column>My Stuff</Table.Column>
      </Table.Header>
      <Table.Body>
        <Table.Row key="Modules">
          <Table.Cell>Modules</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
    <Spacer></Spacer>
    <Table
    aria-label="My Account Table"
    css={{
      height: "auto",
      minWidth: "20%",
    }}
    selectionMode="single"
    selectedKeys={[selectedTab]}
    onSelectionChange={(e) => setTab(e)}
    >
      <Table.Header>
        <Table.Column>My Account</Table.Column>
      </Table.Header>
      <Table.Body>
        <Table.Row key="Settings">
          <Table.Cell>Settings</Table.Cell>
        </Table.Row>
        <Table.Row key="Progress">
          <Table.Cell>Progress</Table.Cell>
        </Table.Row>
        <Table.Row key="Profile">
          <Table.Cell>Profile</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
    </NextContainer>
  );
}

function Modules({ ModuleDisplay, ModulesComplete }){
  return(
    <>
          <Grid>
            <ModuleDisplay />
          </Grid>
          <Grid>
            <ModulesComplete />
            <Spacer></Spacer>
            <Spacer></Spacer>
            <Spacer></Spacer>
          </Grid>
    </>
  )
}
function ModuleDisplay() {
  return (
    <NextContainer fluid>
      <Text h1 b>
        My Modules
      </Text>
      <Grid.Container gap={2}>
        <Grid>
          <AuthModuleCard />
        </Grid>
        <Grid>
          <AuthModuleCard />
        </Grid>
        <Grid>
          <AuthModuleCard />
        </Grid>
      </Grid.Container>
    </NextContainer>
  );
}

function ModulesComplete() {
  return (
    <NextContainer fluid>
      <Text h1 b>
        Modules completed
      </Text>
      <Grid.Container justify="left">
        <Grid>
          <Text>None completed yet.</Text>
        </Grid>
      </Grid.Container>
    </NextContainer>
  );
}

function AuthModuleCard(){
  return(
      <Card isHoverable css={{ mw: "350px", bg: "$black" }}>
        <Card.Header css={{ textAlign: "center" }} >
          <Text css={{ textAlign: "center", color: "$white"}} size={30} b> Phishing </Text> 
        </Card.Header>
        <Card.Divider />
        <Card.Body css={{ py: "$10"}}>
          <Text css={{ color: "$white" }}>
            Something about the module. Something about the module.  Something about the module. 
            Something about the module. Something about the module. Something about the module. 
            Something about the module. Something about the module. Something about the module.  
          </Text>
          <Spacer></Spacer>
          <Progress color="primary" value={75} />
          <Text css={{ color: "$white" }} > 3/4 Simulations Complete</Text>
        </Card.Body>

        <Card.Divider />

        <Card.Footer>
          <Row justify="flex-end">
          <Button size="sm" bordered color="secondary">Learn More</Button>
          <Spacer></Spacer>
          <Button size="sm" color="secondary">Continue</Button>
          </Row>
        </Card.Footer>
      </Card>
  )
}

function Settings({ user }){
  return(
    <>
      <Grid>
      <NextContainer fluid>
      <Text h1 b>
        Settings
      </Text>
        <Grid>
          <Text h2 Body>Account Info</Text>
          <AccountInfo user={user} />
        </Grid>
       
      <Grid>
          <Text h2 Body>Notification Preferences</Text>
          <Notifications user={user}/>
        </Grid>
    </NextContainer>
      </Grid>
    </>
  )
  }

  function AccountInfo({user}){
    return(
        <Card css={{ bg: "$colors$darkpurple", mw: "100%"}}>
          <Card.Divider />
          <Card.Body css={{ py: "$10"}}>
            <Text css={{ color: "$white" }} h3>
              Email {user.email} 
            </Text>
            <Text css={{ color: "blue"}}>
              Change email
            </Text>
            <Spacer></Spacer>
            <Text css={{ color: "$white" }} h3>
              Password ******************
            </Text>
            <Text css={{ color: "blue"}}>
              Change password
            </Text>
          </Card.Body>
        </Card>
    )
  }

  function Notifications({user}){
    return(
      <Card css={{ bg: "$colors$darkpurple", mw: "100%"}}>
      <Card.Divider />
      <Card.Body css={{ py: "$10"}}>
        <Text css={{ color: "$white" }} h3>
         Email notification preferences
        </Text>
          <Checkbox.Group
            size="xs"
            color="secondary"
            defaultValue={["1"]}
            label="Select which email notifications you would like to receive"
          > 
            <Checkbox value="1">Updates on new modules</Checkbox>
            <Checkbox value="2">Surveys for completed modules</Checkbox>
            <Checkbox value="3">Something</Checkbox>
            <Checkbox value="4">Something else</Checkbox>
          </Checkbox.Group>
        <Spacer></Spacer>
        <Text css={{ color: "$white" }} h3>
          Default notifcation email <br></br>
          <Row>
           <Textarea disabled  status="primary" placeholder={user.email} rows={1}/> <Spacer> </Spacer><Button size="xs" css={{ bg: "$black"}}>Update</Button>
          </Row>
        </Text>
      </Card.Body>
    </Card>
    )
  }
