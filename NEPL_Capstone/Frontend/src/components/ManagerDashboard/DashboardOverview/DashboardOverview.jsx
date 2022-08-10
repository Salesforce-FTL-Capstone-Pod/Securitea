import React from 'react'
import { useState } from 'react'
import { Grid, Card, Text, Container, Tooltip } from "@nextui-org/react"
import RepTable from '../EmployeeTable/RepTable.jsx';
function DashboardOverview({ employees, token, company}) {
  let employeeCount = 0
  if (employees){
    employeeCount = employees.info.totalMembers
  }
    const OverviewCard = ({ header, content, type }) => {
      const [tokenText, settokenText] = useState("View Token")
      function changeText(e){
        settokenText(content)
        navigator.clipboard.writeText(content)
        if (tokenText == content){
          settokenText("View Token")
        }
      }
      //navigator.clipboard.writeText(this.state.textToCopy)
        return (
          <Card css={{ minHeight: "$24", $$cardColor: '$colors$white', minWidth: "30vh" }}>
            
            <Card.Body>
              <Text color="black" weight="normal" h6 size={18} css={{ mt: 0, textAlign: "center" }}>
                {header}
                <br></br>
                {type == "hidden" ? <Text h5 size={18} color="navy" css={{cursor: "pointer"}} onClick={(e) => changeText(e)}>{tokenText}</Text> : <Text h5 size={18} color="black">{content}</Text>}
              </Text>
            </Card.Body>
          </Card>
        );
      };

  return (
    <Container css={{marginBototm: "10vh", marginLeft: "10vh"}} fluid>
    <Grid.Container gap={2} justify="space-between">
    <Grid xs={4}>
      <OverviewCard header="Total Employees Under You" content={employeeCount} />
    </Grid>
    <Grid xs={4}>
      <OverviewCard header="Your Token" content={token} type="hidden" />
    </Grid>
    <Grid xs={4}>
      <OverviewCard header="Company" content={company} />
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