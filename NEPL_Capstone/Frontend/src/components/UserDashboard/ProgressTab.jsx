import React from "react";
import { Container as NextContainer, Card, Text, Spacer, Progress, Grid, Collapse, Tooltip } from "@nextui-org/react";
import "./UserDashboard.css";
import { useProgressContext } from "../../contexts/progress"

function ProgressTab(){
  const { progress } = useProgressContext()
  return(
    <>
      <Grid>
      <NextContainer fluid>
      <Text h1 b>
        Progress
      </Text>
      
      <Card css={{ bg: "$colors$darkpurple", mw: "100%"}}>
        <Card.Divider />
        <Card.Body css={{ py: "$10"}}>
          <Spacer></Spacer>
          <Text h4 b>Module Progress</Text>
          <Text h2 b>{progress.module_name}</Text>
          <Spacer></Spacer>

          <Progress value={50} shadow color="secondary" status="secondary" />

          <Spacer></Spacer>
          
          <Collapse.Group splitted>
          <Collapse title="Unit 1: WHATEVER">
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Text>
          </Collapse>
          <Collapse title="Unit 2: WHATEVER AGAIN">
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Text>
          </Collapse>
          <Collapse title="Unit 3: WHATEVER AGAIN AGAIN">
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
    </>
  )
  }

export default ProgressTab