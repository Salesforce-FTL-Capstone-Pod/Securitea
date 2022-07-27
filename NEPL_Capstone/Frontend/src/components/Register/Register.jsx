import React from 'react'
import { useState } from 'react'
import { Link as DomLink } from "react-router-dom"
import { useRegistrationForm } from '../../hooks/useRegistrationForm'
import "./Register.css"
import SampleLogo from "../../assets/SampleLogo.svg"
import Logo from "../../assets/Logo.svg"


//MUI Components
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Open Sans',
      'Roboto',
    ].join(','),
  },
});


function Register() {
  const { form, errors, isProcessing, handleOnInputChange, handleOnSubmit } = useRegistrationForm()

  return (
    <ThemeProvider theme={theme}>
    <Container component="main" maxWidth="xs" >
      <CssBaseline />
      <Box
        sx={{
          marginTop: 15,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <DomLink to="/">
          <Avatar sx={{ m: 2}}>
          </Avatar>
        </DomLink>
        <Typography component="h1" variant="h5">
          Create an account for NEPL
        </Typography>
        <Box noValidate sx={{ mt: 1 }}>
        <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="first_name"
                  required
                  fullWidth
                  label="First Name"
                  color= "secondary"
                  autoFocus
                  onChange={handleOnInputChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  color= "secondary"
                  label="Last Name"
                  name="last_name"
                  onChange={handleOnInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  color= "secondary"
                  id="email"
                  label="Email Address"
                  name="email"
                  onChange={handleOnInputChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="password"
                  required
                  fullWidth
                  color= "secondary"
                  label="Password"
                  autoFocus
                  onChange={handleOnInputChange}
                  type="password"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  color= "secondary"
                  fullWidth
                  label="Confirm Password"
                  name="passwordConfirm"
                  onChange={handleOnInputChange}
                  type="password"
                />
              </Grid>
              <Grid item xs={6}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I am a manager"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
              <TextField
                  required
                  fullWidth
                  color= "secondary"
                  id="birthday"
                  label="MM/DD/YYYY"
                  name="birthday"
                  onChange={handleOnInputChange}
                />
              </Grid>


            </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            disableRipple
            color= "secondary"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleOnSubmit}
          >
            <b>Sign Up</b>
          </Button>
          <Grid container>
            <Grid item>
              <Typography variant="body2">
                Have an account?
              </Typography>
              <Link href="/Login" variant="body2">
                {" Sign In"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Footer sx={{ mt: 8, mb: 4 }} />
    </Container>
  </ThemeProvider>
  )
}

export default Register

function Footer(props){
  return (
    <Typography variant="body2" align="center" {...props}>
    {'Made with ❤️ by '}
    <Link color="inherit" href="https://github.com/">
      NEPL
    </Link>{' '}
    {new Date().getFullYear()}
    {'.'}
  </Typography>
    );
}
