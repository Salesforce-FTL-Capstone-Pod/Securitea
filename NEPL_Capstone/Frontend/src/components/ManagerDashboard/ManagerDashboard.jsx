import React from "react";
import Navbar from "../Navbar/Navbar.jsx";
import { Container, Box} from "@mui/material";
import { Link } from "react-router-dom";
import * as color from "../../assets/colorPalette";
import Footer from "../Footer/Footer.jsx";
import { Text, Button, Progress, Collapse, Row, Grid, Card } from "@nextui-org/react"
import { useAuthContext } from "../../contexts/auth.jsx";
import EmployeeTable from "./EmployeeTable/EmployeeTable.jsx";

const sizeBox = "65vw";


export default function ManagerDashboard() {
    const {user} = useAuthContext()

  return (
    <Container maxWidth={false} disableGutters>
      <Navbar />
      <Overview user={user}/>
      <Content user={user}/>
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

function Content({ user }) {
    //Capitalizing Company Name ( salesforce -> Salesforce )
    function capitalizeFirstLetter(string) {
        return string[0].toUpperCase() + string.slice(1);
    }
    const company = capitalizeFirstLetter(user.company)

  return (

    <Container sx={{ display: "flex", minHeight: "100vh", marginBottom: "10vh"}} disableGutters>
      <Container>
        <EmployeeTable company={company} />

      </Container>
    </Container>

  );
}

{/* <Collapse.Group splitted>
<Collapse  title="Intro to Phishing" subtitle="2 Lessons, 1 Quiz, 2 Additional Resources">
  <Text>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
    enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat.
  </Text>
</Collapse>
</Collapse.Group> */}

// <Collapse css={{ backgroundColor: "#ECEBEB"}} title={<><Text h3 b css={{ marginLeft: "1vw" }}>Intro to Phishing</Text></>} 
// subtitle={<><Text h4 css={{ marginLeft: "1vw" }}>2 Lessons 1 Quiz, 2 Additional Resources</Text></>} >
//     <Text css={{ marginLeft: "1vw"}}>
//       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//       eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
//       enim ad minim veniam, quis nostrud exercitation ullamco laboris
//       nisi ut aliquip ex ea commodo consequat.
//     </Text>
//   </Collapse>