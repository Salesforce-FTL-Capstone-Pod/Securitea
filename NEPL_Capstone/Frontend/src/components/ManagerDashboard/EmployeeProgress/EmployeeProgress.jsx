import React from "react";
import Navbar from "../../Navbar/Navbar";
import { useState } from 'react';
import { Container, Box} from "@mui/material";
import { Link } from "react-router-dom";
import * as color from "../../../assets/colorPalette"
import Footer from "../../Footer/Footer"
import { Text, Button, Progress, Collapse, Row, Grid, Card, Table} from "@nextui-org/react"
import apiClient from "../../../services/apiClient"

const sizeBox = "65vw";


export default function EmployeeProgress() {
  return (
    <Container maxWidth={false} disableGutters>
      <Navbar />
      <Overview />
      <Content />
      <Footer />
    </Container>
  );
}

function Overview() {


  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        backgroundColor: color.richBlackFogra,
        display: "flex",
        justifyContent: "center",
    }}
    >
      <Container
        style={{ marginBottom: "4vw", marginTop: "1vw", width: sizeBox }}
      >

      </Container>
    </Container>
  );
}

function Content() {
  const [employees, setEmployees] = useState()
  const [valid, setValid] = useState(false)
  async function fetchEmployees(){
    const { data } = await apiClient.fetchEmployees()
    setEmployees(data)
    setValid(true)
}

  return (
    <Container sx={{ display: "flex", minHeight: "100vh", marginBottom: "10vh"}} disableGutters>
      <Container>

      <Button onClick={fetchEmployees}>Fetch Employees</Button>
      <Tayble employees={employees} valid={valid} />
      </Container>
    </Container>
  );
}

export function Tayble({ employees, valid }) {
  const columns = [
    {
      key: "name",
      label: "NAME",
    },
    {
      key: "email",
      label: "EMAIL",
    },
    {
      key: "status",
      label: "PING STATUS",
    },
  ];
  const rows = []
  console.log(employees)
  console.log(rows)
  if (valid == true){
  for (const employee in employees.info.podProgress){
    rows.push({
      key: employee,
      name: employees.info.podProgress[employee].name,
      email: employees.info.podProgress[employee].email,
      status: "Not Pinged"
      // status: employees.info.podProgress[employee].wasPinged.waspinged
    })
  }
  }
  return (

    <Table
      aria-label="Example table with dynamic content"
      css={{
        height: "auto",
        minWidth: "100%",
      }}
    >
      <Table.Header columns={columns}>
        {(column) => (
          <Table.Column key={column.key}>{column.label}</Table.Column>
        )}
      </Table.Header>
      <Table.Body items={rows}>
        {(item) => (
          <Table.Row key={item.key}>
            {(columnKey) => <Table.Cell>{item[columnKey]}</Table.Cell>}
          </Table.Row>
        )}
      </Table.Body>
    </Table>

  );
}
