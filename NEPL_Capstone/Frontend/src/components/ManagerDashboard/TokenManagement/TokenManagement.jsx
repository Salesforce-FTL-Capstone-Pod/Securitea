import React from 'react'
import { useAuthContext } from "../../../contexts/auth"
import { Container as NextContainer, Card, Text, Spacer, Progress, Grid, Collapse, Tooltip } from "@nextui-org/react";

function TokenManagement() {
    const {managerToken} = useAuthContext()
  return (
          <Grid>
          <NextContainer fluid>
          <Text h1 b>
            Token Management
          </Text>
          
          <Card css={{ bg: "$colors$darkpurple", mw: "100%"}}>
            <Card.Divider />
            <Card.Body css={{ py: "$10"}}>
              <Spacer></Spacer>
              <Text h4 b>Your Token</Text>
              <Text h2 b>{managerToken}</Text>
              <Spacer></Spacer>
    

              <Spacer></Spacer>
              
              <Collapse.Group splitted>
              <Collapse title="Something about your token">
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat.
                </Text>
              </Collapse>
            </Collapse.Group>
            </Card.Body>
           </Card>
        
            
          </NextContainer>
          </Grid>
      )
      
}

export default TokenManagement