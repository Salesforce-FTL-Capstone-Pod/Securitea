import React from "react";
import { Link } from "react-router-dom";
import { Avatar, Grid } from "@nextui-org/react";
import { Container as NextContainer, Card, Row, Text, Table, Spacer, Progress, Button, Checkbox, Textarea, Loading } from "@nextui-org/react";
import { useState } from "react";
import "./UserDashboard.css";

export default function ProfileTab({ user }){
  return(
    <>
      <Grid>
      <NextContainer fluid>
      <Text h1 b>
        Profile
      </Text>
        <Grid>
          <Text h2 Body>Manager/Company info</Text>
          <AccountInfo user={user} />
        </Grid>
       
      <Grid>
          <Text h2 Body>Something else</Text>
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
              who's my boss, company i work for, circle of company pic, somethign else
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
          Somethign else important about the user,
        </Text>
      </Card.Body>
    </Card>
    )
  }

