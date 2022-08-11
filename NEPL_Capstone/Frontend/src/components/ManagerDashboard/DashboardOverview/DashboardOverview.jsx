import React from 'react'
import { useState } from 'react'
import { Grid, Card, Text, Container, Tooltip } from "@nextui-org/react"
import RepTable from '../EmployeeTable/RepTable.jsx';
import EmployeeDisplay from '../EmployeeDisplay/EmployeeDisplay.jsx';
function DashboardOverview({ employees, token, company, logo}) {
  console.log(employees)
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
   </Grid.Container>
   <Grid.Container justify='center'>
    <Grid>
      {employeeCount > 0 ? <><EmployeeDisplay employees={employees} token={token} company={company} logo={logo} /></> : <></>}
    </Grid>
   </Grid.Container>
   </Container>
  )
}

export default DashboardOverview