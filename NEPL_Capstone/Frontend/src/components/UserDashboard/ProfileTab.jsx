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
          <AccountInfo user={user} />
        </Grid>
    </NextContainer>
      </Grid>
    </>
  )
  }


  function AccountInfo({user}){
    const fullName = `${user.firstName} ${user.lastName}`
    return(
        <Card css={{ bg: "$colors$darkpurple", mw: "100%"}}>
        <Card css={{ bg: "$colors$darkpurple", mw: "100%"}}>
        <Card.Divider />
       <Card.Body css={{ py: "$10"}}>
        <Avatar
                    css={{ size: "$20", }}
                    src={user.logo}
                    color="gradient"
                    bordered
            />
        {user?.manager ? 
        <>
        <Text css={{ color: "$black" }} h3>
         Your Manager at {user.company}:
        </Text>
        <Text id="modal-title" weight="thin" size={15}> Manager </Text>
        <Text weight="normal" size={20} > Name: {user.manager.split(",")[0]}</Text> 
        <Text weight="normal" size={20} > Email: {user.manager.split(",")[1]}</Text>
        </>
        : <></>}
        <Spacer></Spacer>
        <Text css={{ color: "$black" }} h3>
          Your Account Information

          <Row justify="space-between">
          <Row>
            <Text weight="normal" size={20}>Name</Text> <Spacer></Spacer>
            <Textarea disabled  status="primary" placeholder={fullName} rows={1}/>
          </Row>
          <Spacer></Spacer>
          <Row>
            <Text weight="normal" size={20}>Company</Text> <Spacer></Spacer>
            <Textarea disabled  status="primary" placeholder={user.company} rows={1}/>
          </Row>
          </Row>
          <Spacer></Spacer>
          <Row justify="space-between">
          <Row>
            <Text weight="normal" size={20}>Email</Text> <Spacer></Spacer>
            <Textarea disabled  status="primary" placeholder={user.email} rows={1}/>
          </Row>
          <Spacer></Spacer>
          <Row>
            <Text weight="normal" size={20}>Birthday</Text> <Spacer></Spacer>
            <Textarea disabled  status="primary" placeholder={user.birthday} rows={2}/>
          </Row>
          </Row>


        </Text>
        </Card.Body>
        </Card>
        </Card>
    )
  }

