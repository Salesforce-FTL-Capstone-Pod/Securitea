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
    return(
        <Card css={{ bg: "$colors$lightpurple", mw: "100%"}}>
          <Row justify="left" css={{ marginLeft: "2vh"}}>
          <Avatar
                    css={{ size: "$20",}}
                    src={user.logo}
                    color="gradient"
                    bordered
            />
          </Row>
          <Row css={{ marginLeft: "1vh"}}>

           <Text id="modal-title" weight="thin" size={15}>
              Name <Text weight="semibold"  size={20} >{user.first}{user.lastName}</Text>
            </Text>
  
            <Text id="modal-title" weight="thin" size={15}>
              Email <Text weight="semibold"  size={20} >{user.email}</Text>
            </Text>
            {user.birthday}
          </Row>

          <Row>
            {user.company}
            <br></br>
            {user.manager}
          </Row>
        </Card>
    )
  }

