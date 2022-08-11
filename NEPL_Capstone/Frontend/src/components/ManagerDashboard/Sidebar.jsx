import React from 'react'
import { Text, Button, Progress, Collapse, Row, Grid, Card, Container as NextContainer, Table, Spacer } from "@nextui-org/react"

function Sidebar({ selectedTab, setselectedTab, user }) {

    const rows = [
        {
          key: "Overview",
          name: "Overview",
        },
        // {
        //   key: "Employee Activity",
        //   name: "Employee Activity",
        // },
        {
          key: "Token Management",
          name: "Token Management",
        },
        {
          key: "Modules Assigned",
          name: "Modules Assigned",
        },
        {
            key: "User Dashboard",
            name: "Go Back"
        }
    ]

    function setTab(e){
      setselectedTab(e.currentKey)
    }  
    if (!selectedTab){
      setselectedTab("Overview")
    }
    return (
      <NextContainer css={{ marginLeft: "0px", background: "$colors$darkpurple", minHeight: "100vh", width: "25vh"}} fluid>
      <Table
      
      defaultSelectedKeys={[selectedTab]}
    //   disallowEmptySelection
      selectedKeys={[selectedTab]}
      shadow={false}
      onSelectionChange={(e) => setTab(e)}
      aria-label="Table"
      css={{
        height: "auto",
        minWidth: "20%",
        background: "$colors$medpurple",
      }}
      selectionMode="single"
      >
        <Table.Header>
          <Table.Column><Text h5 weight="normal">Dashboard</Text></Table.Column>
        </Table.Header>
        <Table.Body items={rows}>
        {(item) => (
          <Table.Row key={item.key}>
            {<Table.Cell>{item.name}</Table.Cell>}
          </Table.Row>
        )}
        </Table.Body>
      </Table>
      </NextContainer>
    );
  }
  

export default Sidebar