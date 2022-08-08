import React from 'react'
import { Grid, Card, Text, Container } from "@nextui-org/react"
import RepTable from './RepTable.jsx';
function DashboardOverview() {
    const OverviewCard = ({ header, content}) => {
        return (
          <Card css={{ minHeight: "$24", $$cardColor: '$colors$medpurple', minWidth: "30vh" }}>
            <Card.Body>
              <Text color="white" weight="normal" h6 size={18} css={{ mt: 0, textAlign: "center" }}>
                {header}
                <br></br>
                <Text h5 size={20} color="white">{content}</Text>
              </Text>
            </Card.Body>
          </Card>
        );
      };

  return (
    <Container css={{marginBototm: "10vh"}} fluid>
    <Grid.Container gap={2} justify="space-between">
    <Grid xs={4}>
      <OverviewCard header="Total Employees Under Your" content="6 Employees"/>
    </Grid>
    <Grid xs={4}>
      <OverviewCard header="Your Token" content="View Token" />
    </Grid>
    <Grid xs={4}>
      <OverviewCard header="Placeholder" content="Placeholder" />
    </Grid>
   </Grid.Container>
   <Grid.Container justify='center'>
    <Grid>
          <Card css={{ minHeight: "40vh", $$cardColor: '$colors$medpurple', minWidth: "100vh" }}>
            <Card.Body>
              <Text color="white" weight="normal" h6 size={18} css={{ mt: 0, textAlign: "center" }}>
                Placeholder
              </Text>
            </Card.Body>
          </Card>
    </Grid>
   </Grid.Container>
   <Grid.Container justify='space-between'>
    <Grid>
          <Text h3 weight="light" css={{marginTop: "2vh", marginLeft: "1vh"}}>Inactive Employees</Text>
          <RepTable />
    </Grid>
    <Grid>
          <Text h3 weight="light" css={{marginTop: "2vh", marginLeft: "1vh"}}>Placeholder</Text>
          <Card css={{ minHeight: "40vh", $$cardColor: '$colors$medpurple', minWidth: "40vh" }}>
            <Card.Body>
              <Text color="white" weight="normal" h6 size={18} css={{ mt: 0, textAlign: "center" }}>
                Placeholder
              </Text>
            </Card.Body>
          </Card>
    </Grid>
   </Grid.Container>
   </Container>
  )
}

export default DashboardOverview