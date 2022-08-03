import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { Container } from "@mui/material";
import { Avatar, Grid } from "@nextui-org/react";
import { Container as NextContainer, Card, Row, Text, Table, Spacer, Progress, Button } from "@nextui-org/react";
import { Drawer, IconButton, List, Divider } from "@mui/material";
import { useState } from "react";
import "./UserDashboard.css";
import Footer from "../Footer/Footer";
import { useAuthContext } from "../../contexts/auth"

function UserDashboard() {
  const { user } = useAuthContext();
  return (
    <>
      <Navbar />
      <Hero user={user} />
      <Container maxWidth={false} disableGutters sx={{display: "flex", justifyContent: "center"}}>
        <Sidebar />
        <Grid.Container gap={2} css={{flexDirection: "column"}}>
          <Grid>
            <ModuleDisplay />
          </Grid>
          <Grid>
            <ModulesComplete />
            <Spacer></Spacer>
            <Spacer></Spacer>
            <Spacer></Spacer>
          </Grid>
        </Grid.Container>
      </Container>
      <Footer />
    </>
  );
}
export default UserDashboard;

function Hero({ user }) {
  const greetingText = `Good afternoon, ${user.title} ${user.firstName} ${user.last_name}`;
  console.log(greetingText)
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
          <Row justify="left" align="center">
              <Avatar
                css={{ size: "$20"}}
                src="https://logos-world.net/wp-content/uploads/2020/10/Salesforce-Emblem.png"
                color="gradient"
                bordered
              />
            <Text>
              HELO
            </Text>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
}

function Sidebar() {
  return (
    <NextContainer css={{ marginLeft: "0px", width: "20%"}} fluid>
    <Table
    aria-label="Example static collection table"
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
        <Table.Row key="1">
          <Table.Cell>Modules</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
    <Spacer></Spacer>
    <Table
    aria-label="Example static collection table"
    css={{
      height: "auto",
      minWidth: "20%",
    }}
    selectionMode="single"
    >
      <Table.Header>
        <Table.Column>My Account</Table.Column>
      </Table.Header>
      <Table.Body>
        <Table.Row key="1">
          <Table.Cell>Settings</Table.Cell>
        </Table.Row>
        <Table.Row key="2">
          <Table.Cell>Progress</Table.Cell>
        </Table.Row>
        <Table.Row key="3">
          <Table.Cell>Profile</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
    </NextContainer>
  );
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