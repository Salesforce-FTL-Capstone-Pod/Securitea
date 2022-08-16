import React from "react";
import { Link as DomLink } from "react-router-dom";
import { useEffect } from "react";
import { useLoginForm } from "../../hooks/useLoginForm";
import "./Login.css";
import Navbar from "../Navbar/Navbar";
import * as color from "../../assets/colorPalette";
import Logo from "../../assets/Logo.svg";

import Link from "@mui/material/Link";;
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import backgroundImg from '../../assets/SecuriTEA-bg1.svg'
import { Textarea, Card, Row, Spacer, Text, Button, Grid, Input, Loading} from "@nextui-org/react"
import confetti from "canvas-confetti"
import SlackLogo from "../../assets/slack.svg"

const theme = createTheme({
  palette: {
    primary: {
      main: color.blueBell,
    },
    secondary: {
      main: color.platinum,
    },
  },
  space: {},
  fonts: {
    wee: "Roboto",
    mono: "Open Sans",
  },
});

function Login() {
  const { form, errors, isProcessing, handleOnInputChange, handleOnSubmit } =
    useLoginForm();
  console.log(errors.form)
  console.log(isProcessing)
  return (
    <>
    <Navbar />
    <Container disableGutters maxWidth={false} sx={{ display: "flex", justifyContent: 'center', minWidth: "100vw", minHeight: "100vh", backgroundImage: `url(${backgroundImg})`}}>
    <Card css={{ width: "20vw", bg: "white", marginTop: "15vh", marginBottom: "45vh"}} variant="bordered" borderWeight="normal">

			<Card.Header css={{ textAlign: "center" , justifyContent: "center"}}>
				<Text css={{ textAlign: "center", color: "$colors$black" }} weight="thin" size={30} b>
          Sign into <b>SecuriTEA</b>
				</Text>
			</Card.Header>
      <Card.Divider></Card.Divider>
			<Card.Body css={{ py: "$10", marginBottom: "-2vh" }}>

        <Grid.Container justify="center" gap={2}>
          
          <Grid>
            <Input
            width="17vw"
            size="lg"
            clearable
            name="email"
            type="email"
            color="secondary"
            label="Email"
            placeholder="Enter your email"
            onChange={handleOnInputChange}

          />
          </Grid>
          
          <Grid>
            <Input.Password
            width="17vw"
            clearable
            size="lg"
            type="password"
            name="password"
            color="secondary"
            label="Password"
            placeholder="Enter your password"
            onChange={handleOnInputChange}
          />

          </Grid>

          <Grid>
            <Button color="secondary" onClick={handleOnSubmit} css={{ marginTop: "0.5vw", height: "2vw", width: "15vw", marginBottom: "0.3vw" }}>
              {isProcessing == false ? <>Login</> : <><Loading type="default" /></>}
            </Button>
          </Grid>

          {errors?.form ? <>
          <Grid css={{ marginTop: "-1vh"}}>
          <Text color="error">
            {errors.form}
          </Text>
          </Grid>
          </> : <></>}
          <Card.Divider></Card.Divider>

          <Grid>
          <Link color="inherit" href="https://slack.com/openid/connect/authorize?scope=openid%20profile%20email&amp;response_type=code&amp;redirect_uri=https%3A%2F%2Flocalhost%3A5173%2Fslack&amp;client_id=3765144863393.3898834395927" target="_blank">
            <Button color="secondary" css={{ height: "2vw", marginTop: "0.3vw", width: "15vw", background: "#4A154B" }} disabled={isProcessing == true ? true : false}>
              <img src={SlackLogo} width="20vw" style={{ marginRight: "0.5vw" }} />
              Sign in with Slack
            </Button>
          </Link>
          </Grid>
          <Grid>
            <Text css={{ textAlign: "right", marginTop: "-1.5vh"}} size={15} weight="">Don't have an account? 
            <DomLink to="/Register" >
                {' '}Sign Up
            </DomLink>
            </Text>
            
          </Grid>
        </Grid.Container>
			</Card.Body>

		</Card>
    </Container>
    </>
  );
}

function Footer(props) {
  return (
    <Typography variant="body2" align="center" {...props}>
      {"Made with ♡ by "}
      <Link color="inherit" href="https://github.com/">
        NEPL
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default Login;


export const handleConfetti = () => {
  confetti({
    particleCount: 150,
    spread: 360,
    origin: {
      x: Math.random(),
      // since they fall down, start a bit higher than random
      y: Math.random() - 0.2,
    },
  });
}
