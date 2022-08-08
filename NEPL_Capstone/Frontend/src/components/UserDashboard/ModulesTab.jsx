import React from 'react'
import { Container as NextContainer, Card, Row, Text, Table, Spacer, Progress, Button, Checkbox, Textarea, Loading, Avatar, Grid } from "@nextui-org/react";
import { useProgressContext } from '../../contexts/progress';
import { Link } from 'react-router-dom';

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

export function ModuleDisplay() {
  const {progress} = useProgressContext()
  const progressVal = progress.progress
  return (
    <NextContainer fluid>
      <Text h1 b>
        My Modules
      </Text>
      <Grid.Container gap={2}>
        <Grid>
          <AuthModuleCard moduleName="Phishing" progress={progressVal}/>
        </Grid>
        <Grid>
          <AuthModuleCard moduleName="Phishing" progress={progressVal}/>
        </Grid>
        <Grid>
          <AuthModuleCard moduleName="Internet Safety Tips" progress={progressVal}/>
        </Grid>
      </Grid.Container>
    </NextContainer>
  );
}

function ModulesComplete() {
  return (
    <NextContainer fluid >
      <Text h1 b>
        Modules completed
      </Text>
      <Grid.Container justify="left">
        <Grid css={{ marginBottom: "5vw"}}>
          <AuthModuleCard moduleName="Internet Safety Tips" progress="100"/>
        </Grid>
      </Grid.Container>
    </NextContainer>
  );
}

function AuthModuleCard({moduleName, progress}){
  return(
      <Card isHoverable css={{ mw: "350px", bg: "$black" }}>
        <Card.Header css={{ textAlign: "center" }} >
          <Text css={{ textAlign: "center", color: "$white"}} size={30} b>{moduleName}</Text> 
        </Card.Header>
        <Card.Divider />
        <Card.Body css={{ py: "$10"}}>
          <Text css={{ color: "$white" }}>
            Something about the module. Something about the module.  Something about the module. 
            Something about the module. Something about the module. Something about the module. 
            Something about the module. Something about the module. Something about the module.  
          </Text>
          <Spacer></Spacer>
          <Progress color="gradient" value={progress} />
          <Text css={{ color: "$white" }} > 0/4 Simulations Complete</Text>
        </Card.Body>

        <Card.Divider />

        <Card.Footer>
          <Row justify="flex-end">
          <Button size="sm" bordered color="secondary">Learn More</Button>
          <Spacer></Spacer>
            <Link to="/Skeleton" style={{ color: '#FFF' }}>
            <Button size="sm" color="secondary">Continue</Button>
            </Link>
          </Row>
        </Card.Footer>
      </Card>
  )
}



export default ModulesTab