import React from "react";
import { useState} from "react";
import Navbar from "../Navbar/Navbar.jsx";
import { Container, Box} from "@mui/material";
import { Link } from "react-router-dom";
import * as color from "../../assets/colorPalette";
import Footer from "../Footer/Footer.jsx";
import { Text, Button, Progress, Collapse, Row, Grid, Card, Container as NextContainer, Table, Spacer } from "@nextui-org/react"
import { useAuthContext } from "../../contexts/auth.jsx";
import DashboardOverview from "./DashboardOverview/DashboardOverview.jsx";
import Sidebar from "./Sidebar.jsx";
import EmployeeTable from "./EmployeeTable/EmployeeTable.jsx";
import { useNavigate } from "react-router-dom";
import AssignedModules from "./AssignedModules/AssignedModules.jsx";
import TokenManagement from "./TokenManagement/TokenManagement.jsx";
import EmployeeDisplay from "./EmployeeDisplay/EmployeeDisplay.jsx";
import apiClient from "../../services/apiClient"
import { useEffect } from "react";
import backgroundImg from '../../assets/SecuriTEA-bg2.svg'
const sizeBox = "65vw";

export default function ManagerDashboard() {
  const {user, managerToken} = useAuthContext()
  const [selectedTab, setselectedTab] = useState("Overview");
  const navigate = useNavigate()
  const [employees, setEmployees] = useState()
  async function fetchEmployees(){
    const { data }  = await apiClient.fetchEmployees()
    setEmployees(data)
}
// silly little function to capitalize first letter in company name for simiplicity on the backend

function capitalizeCompany(company){
  return company.charAt(0).toUpperCase() + company.slice(1);
}
console.log(capitalizeCompany(user.company))

  useEffect(() => {
    fetchEmployees()
  }, [user])
  return (
    <Container maxWidth={false} disableGutters sx={{ backgroundImage: `url(${backgroundImg})` }}>
      <Navbar />
      <Overview user={user}/>
      <Grid.Container css={{flexDirection: "row"}}>
        <Grid>
            <Sidebar selectedTab={selectedTab} setselectedTab={setselectedTab} />
        </Grid>
        <Grid css={{ marginLeft: "1vh"}}>
            <NextContainer css={{ minWidth: "100vh" }} fluid>
                {/* {selectedTab == "Employee Activity" ? <EmployeeDisplay employees={employees} company={capitalizeCompany(user.company)} logo={user.logo} /> : <></>} */}
                {selectedTab == "Overview" ? <DashboardOverview employees={employees} token={managerToken} company={capitalizeCompany(user.company)} logo={user.logo} /> : <></>}
                {selectedTab == "Modules Assigned" ? <AssignedModules employees={employees} logo={user.logo} /> : <></>}
                {/* {selectedTab == "Token Management" ? <TokenManagement /> : <></>} */}
                {selectedTab == "User Dashboard" ? navigate('/UserDashboard') : <></>}
            </NextContainer>
        </Grid>
      </Grid.Container>
      <Footer />
    </Container>
  );
}

function Overview({ user }) {
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
        <Text h3 weight="light" css={{ color: "$colors$platinum", marginBottom: "0.5vw"}}>Manager Dashboard</Text>
        <Text h1 css={{ color: "$colors$platinum", marginTop: "-0.5vw", marginBottom: "-2vw"}}>Welcome, {user.firstName} {user.lastName}</Text>
      </Container>
    </Container>
  );
}

