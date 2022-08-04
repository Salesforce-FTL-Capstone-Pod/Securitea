import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { Container } from "@mui/material";
import { Avatar, Grid } from "@nextui-org/react";
import { Container as NextContainer, Card, Row, Text, Table, Spacer, Progress, Button, Checkbox, Textarea, Loading } from "@nextui-org/react";
import { useState } from "react";
import "./UserDashboard.css";
import Footer from "../Footer/Footer";
import { useAuthContext } from "../../contexts/auth"
import axios from "axios";
import apiClient from "../../services/apiClient"
import { useEffect } from "react";

function SettingsTab({ user }){
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
          <NotificationInfo user={user}/>
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

  function NotificationInfo({user}){
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

export default SettingsTab