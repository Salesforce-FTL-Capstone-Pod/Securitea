import React from "react";
import Navbar from "../Navbar/Navbar.jsx";
import { Container, Box} from "@mui/material";
import { Link } from "react-router-dom";
import * as color from "../../assets/colorPalette";
import Footer from "../Footer/Footer.jsx";
import { useNavigate } from "react-router-dom";
import { Text, Button, Progress, Collapse, Row, Grid, Card } from "@nextui-org/react"
const sizeBox = "65vw";


export default function ModulePagePhishing() {
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
  const navigate = useNavigate()
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
        <Text h3 weight="light" css={{ color: "$colors$platinum", marginBottom: "0vw"}}>Module</Text>
        <Text h1 css={{ color: "$colors$platinum", marginTop: "-0.5vw", marginBottom: "0vw"}}>Phishing</Text>
        <Button color="secondary" css={{ marginTop: "0.5vw", height: "2vw"}}>
            <Link to="/Modules/demo">
                <Text h4 weight="bold" css={{ color: "$colors$platinum", marginBottom: "0vw"}}>Continue</Text>
            </Link>
        </Button>
        <Text h3 css={{ color: "$colors$platinum", marginTop: "1vw", marginBottom: "1vw"}} weight="light">Learn how to protect yourself from phishing attempts.</Text>
        <Progress color="gradient" size="lg" value={30} css={{ width: "50%"}}/>
      </Container>
    </Container>
  );
}

function Content() {
  return (
    <Container sx={{ display: "flex", minHeight: "100vh", marginBottom: "10vh"}} disableGutters>
      <Container>

        <Text h1 css={{ marginTop: "1vw"}}>Current Unit</Text>
        <Collapse.Group splitted>
          <Collapse  title="Intro to Phishing" subtitle="2 Lessons, 1 Quiz, 2 Additional Resources">
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Text>
          </Collapse>
        </Collapse.Group>


        <Text h1 css={{ marginTop: "1vw"}}>Curriculum</Text>
        <Collapse.Group splitted accordion={false}>
          <Collapse title="Intro to Phishing" subtitle="2 Lessons, 1 Quiz, 2 Additional Resources">
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Text>
          </Collapse>
          <Collapse  title="Something" subtitle="2 Lessons, 1 Quiz, 2 Additional Resources">
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Text>
          </Collapse>
          <Collapse title="Something 2" subtitle="2 Lessons, 1 Quiz, 2 Additional Resources">
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Text>
          </Collapse>
          <Collapse  title="Something 3" subtitle="2 Lessons, 1 Quiz, 2 Additional Resources">
            <Text>
                <Text b>In this course, you will learn about JavaScript data types, built-in methods, and variables.</Text> <br></br>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Text>
          </Collapse>

          <Collapse title="Something 4" subtitle="2 Lessons, 1 Quiz, 2 Additional Resources">
            <Text b>In this course, you will learn about JavaScript data types, built-in methods, and variables.</Text>
            <Grid.Container gap={2} justify="center">
                <Grid>
                    <Card css={{ h: "$20", $$cardColor: '$colors$primary' }}>
                        <Card.Body>
                            <Text>
                                Hello
                            </Text>
                        </Card.Body>
                    </Card>
                </Grid>

                <Grid>
                    <Card css={{ h: "$20", $$cardColor: '$colors$primary' }}>
                        <Card.Body>
                            <Text>
                                Hello
                            </Text>
                        </Card.Body>
                    </Card>
                </Grid>
            </Grid.Container>
          </Collapse>
          
        </Collapse.Group>

        <Text h1 css={{ marginTop: "1vw"}}>Additional Resources</Text>
        <Collapse.Group splitted>
          <Collapse  title="Something" subtitle="*Sources">
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Text>
          </Collapse>
        </Collapse.Group>
      </Container>
    </Container>
  );
}



// <Collapse css={{ backgroundColor: "#ECEBEB"}} title={<><Text h3 b css={{ marginLeft: "1vw" }}>Intro to Phishing</Text></>} 
// subtitle={<><Text h4 css={{ marginLeft: "1vw" }}>2 Lessons 1 Quiz, 2 Additional Resources</Text></>} >
//     <Text css={{ marginLeft: "1vw"}}>
//       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//       eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
//       enim ad minim veniam, quis nostrud exercitation ullamco laboris
//       nisi ut aliquip ex ea commodo consequat.
//     </Text>
//   </Collapse>