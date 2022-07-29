import React from 'react'
import { Link } from "react-router-dom"
import AuthNavbar from '../AuthNavbar/AuthNavbar';
import { Container } from "@mui/material";
import { Avatar, Grid} from "@nextui-org/react"
import { Container as NextContainer, Card, Row, Text } from "@nextui-org/react";
import { Drawer, IconButton, List, Divider } from "@mui/material"
import { useState } from "react";
import { AuthModuleCard } from '../Modules/Modules';
function UserDashboard() {
  return (
    <>
      <AuthNavbar />
      <NextContainer fluid>
        <Hero />
        <Sidebar />
        <ModuleDisplay />
        <ModulesComplete />
      </NextContainer>
    </>
  )
}
export default UserDashboard

function Hero(){
  return(
    <Container maxWidth={false} disableGutters>
      <Card css={{ $$cardColor: '$colors$primary' }} >
        <Card.Body>
          <Row justify="left" align="center">
            <Text h6 size={15} color="white" css={{ m: 0 }}>
              Happy Friday, Guy
            </Text>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  )
}


function Sidebar(){


  return(
        <Drawer
        variant="permanent"
          ModalProps={{
    keepMounted: true,
  }}
      >
        <div>
          <IconButton>
            <Avatar />
          </IconButton>
        </div>
        <Divider />
        <List>WHY ISNT THIS WORKING</List>
        <Divider />
        <List>HELLO</List>
      </Drawer>
  )
}

function ModuleDisplay(){
  return(
    <>
      <Text h1 b >My Modules</Text>
      <Grid.Container gap={2} justify="center">
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
    </>
  )
}

function ModulesComplete(){
  return(
    <>
    <Text h1 b>Modules completed</Text>
    <Grid.Container gap={2} justify="left">
      <Grid>
        <Text>None completed yet.</Text>
      </Grid>
    </Grid.Container>
    </>
  )
}