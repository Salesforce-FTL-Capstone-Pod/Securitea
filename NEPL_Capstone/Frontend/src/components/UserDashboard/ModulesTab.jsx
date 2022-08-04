import React from 'react'
import { Container as NextContainer, Card, Row, Text, Table, Spacer, Progress, Button, Checkbox, Textarea, Loading, Avatar, Grid } from "@nextui-org/react";
import { useProgressContext } from '../../contexts/progress';

function ModulesTab() {
  return (
    <>
      <Grid>
        <ModuleDisplay />
      </Grid>
      <Grid>
        <ModulesComplete />
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
  const {progress} = useProgressContext()
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
          <Progress color="primary" value={progress.progress} />
          <Text css={{ color: "$white" }} > 0/4 Simulations Complete</Text>
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


export default ModulesTab