import React from "react";
import { Link as DomLink } from "react-router-dom";

import { useLoginForm } from "../../hooks/useLoginForm";
import "./Login.css";
import SampleLogo from "../../assets/SampleLogo.svg";
import Logo from "../../assets/Logo.svg";
import Navbar from "../Navbar/Navbar";
import * as color from "../../assets/colorPalette";

//MUI Components
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

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

  return (
    <Container disableGutters maxWidth={false}>
      <Navbar />
      <ThemeProvider theme={theme}>
        <Container
          disableGutters
          maxWidth={false}
          sx={{
            alignItems: "center",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <CssBaseline />
          <Box
            sx={{
              marginTop: 15,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: color.platinum,
              padding: "1vw",
              borderRadius: "10px",
              height: "40vh",
              width: "40vw",
            }}
          >
            <DomLink to="/">
              <Avatar sx={{ m: 1 }}></Avatar>
            </DomLink>
            <Typography component="h1" variant="h5">
              Sign into SecuriTEA
            </Typography>
            <Box noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                label="Enter your email"
                type="email"
                name="email"
                autoFocus
                onChange={handleOnInputChange}
                color="primary"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Enter your password"
                type="password"
                onChange={handleOnInputChange}
                color="primary"
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                disableRipple
                color="primary"
                sx={{ mt: 3, mb: 2 }}
                onClick={handleOnSubmit}
              >
                <b style={{ color: color.platinum }}>Login</b>
              </Button>

              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Typography variant="body2">
                    Don't have an account?
                  </Typography>
                  <DomLink
                    to="/Register"
                    style={{
                      color: color.blueBell,
                      fontSize: 14,
                    }}
                  >
                    {" Sign Up"}
                  </DomLink>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Footer />
        </Container>
      </ThemeProvider>
    </Container>
  );
}

function Footer(props) {
  return (
    <Typography variant="body2" align="center" {...props}>
      {"Made with ❤️ by "}
      <Link color="inherit" href="https://github.com/">
        NEPL
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default Login;
