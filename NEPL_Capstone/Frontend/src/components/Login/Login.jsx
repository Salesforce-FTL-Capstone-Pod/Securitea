import React from 'react'
import { Link as DomLink } from "react-router-dom"
import { useLoginForm } from "../../hooks/useLoginForm"
import "./Login.css"
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

function Login() {
  const { form, errors, isProcessing, handleOnInputChange, handleOnSubmit } = useLoginForm()

  return (
    <ThemeProvider theme={theme}>
    <Container component="main" maxWidth="xs">
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
          <Avatar sx={{ m: 1}}>
          </Avatar>
        </DomLink>
        <Typography component="h1" variant="h5">
          Sign into NEPL
        </Typography>
        <Box noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            label="Enter your email"
            name="email"
            autoFocus
            onChange={handleOnInputChange}
            color= "secondary"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Enter your password"
            type="password"
            onChange={handleOnInputChange}
            color= "secondary"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            disableRipple
            color= "secondary"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleOnSubmit}
          >
            <b>Sign In</b>
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
              <Link href="/Register" variant="body2">
                {" Sign Up"}
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

export default Login