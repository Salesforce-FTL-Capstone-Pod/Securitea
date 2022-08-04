import React from "react";
import { useState } from "react";
import { Link as DomLink } from "react-router-dom";
import { useRegistrationForm } from "../../hooks/useRegistrationForm";
import "./Register.css";
import SampleLogo from "../../assets/SampleLogo.svg";
import Logo from "../../assets/Logo.svg";
import * as color from "../../assets/colorPalette";
import Navbar from "../Navbar/Navbar";

//MUI Components
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import { InputLabel } from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

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

function Register() {
	const { form, errors, isProcessing, handleOnInputChange, handleOnSubmit } =
		useRegistrationForm();

	return (
		<Container disableGutters maxWidth={false}>
			<Navbar />
			<ThemeProvider theme={theme}>
				<Container
					component="main"
					sx={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "center",
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
							padding: "5vw",
							borderRadius: "10px",
							height: "50vh",
							width: "40vw",
						}}
					>
						<DomLink to="/">
							<Avatar sx={{ m: 2 }}></Avatar>
						</DomLink>
						<Typography component="h1" variant="h5">
							Create an account for SecuritTEA
						</Typography>
						<Box noValidate sx={{ mt: 1 }}>
							<Grid container spacing={2}>
								<Grid item xs={12} sm={6}>
									<TextField
										name="first_name"
										required
										fullWidth
										label="First Name"
										color="primary"
										autoFocus
										onChange={handleOnInputChange}
									/>
								</Grid>
								<Grid item xs={12} sm={6}>
									<TextField
										required
										fullWidth
										color="primary"
										label="Last Name"
										name="last_name"
										onChange={handleOnInputChange}
									/>
								</Grid>
								<Grid item xs={12}>
									<TextField
										required
										fullWidth
										color="primary"
										id="email"
										label="Email Address"
										name="email"
										onChange={handleOnInputChange}
										error={Boolean(errors?.email)}
										helperText={errors?.email}
									/>
								</Grid>
								<Grid item xs={12} sm={6}>
									<TextField
										name="password"
										required
										fullWidth
										color="primary"
										label="Password"
										onChange={handleOnInputChange}
										error={Boolean(errors?.passwordConfirm)}
										type="password"
									/>
								</Grid>
								<Grid item xs={12} sm={6}>
									<TextField
										required
										color="primary"
										fullWidth
										label="Confirm Password"
										name="passwordConfirm"
										disabled={form.password.length == 0}
										onChange={handleOnInputChange}
										type="password"
										error={Boolean(errors?.passwordConfirm)}
										helperText={errors?.passwordConfirm}
									/>
								</Grid>

								<Grid item xs={12} sm={6}>
									<FormControl required fullWidth>
										<LocalizationProvider dateAdapter={AdapterDateFns}>
											<DatePicker
												label="Birthday"
												name="birthday"
												value={form.birthday || null}
												disableFuture
												mask="__/__/____"
												onChange={(evt) => {
													handleOnInputChange(evt);
												}}
												renderInput={(params) => <TextField {...params} />}
											/>
										</LocalizationProvider>
									</FormControl>
								</Grid>
								<Grid item xs={6}>
									<FormControl required fullWidth>
										<InputLabel id="pref-title">Preferred Title</InputLabel>
										<Select
											labelId="pref-title"
											id="title"
											name="title"
											value={form.title || ""}
											label="Preferred Title"
											onChange={handleOnInputChange}
										>
											<MenuItem value={"Mr."}>Mr.</MenuItem>
											<MenuItem value={"Ms."}>Ms.</MenuItem>
											<MenuItem value={"Mx."}>Mx.</MenuItem>
											<MenuItem value={"Mrs."}>Mrs.</MenuItem>
											<MenuItem value={"Miss"}>Miss</MenuItem>
										</Select>
									</FormControl>
								</Grid>
								<Grid item xs={6}>
									<FormControlLabel
										control={
											<Checkbox
												color="primary"
												name="isManagerName"
												onChange={handleOnInputChange}
											/>
										}
										label="I am a manager"
									/>
								</Grid>
								<Grid item xs={12} sm={6}>
									{form.isManager ? (
										<ManagerRegisterExtra
											form={form}
											handleOnInputChange={handleOnInputChange}
										/>
									) : (
										<RegularRegisterExtra
											handleOnInputChange={handleOnInputChange}
										/>
									)}
								</Grid>
							</Grid>
							<Button
								type="submit"
								fullWidth
								variant="contained"
								disableRipple
								color="primary"
								sx={{ mt: 3, mb: 2 }}
								onClick={handleOnSubmit}
								disabled={Object.keys(errors).length > 0}
							>
								<b style={{ color: color.platinum }}>Sign Up</b>
							</Button>
							<Grid container>
								<Grid item>
									<Typography variant="body2">Have an account?</Typography>
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
		</Container>
	);
}

export default Register;

function ManagerRegisterExtra(props) {
	return (
		<FormControl required fullWidth>
			<InputLabel id="company-name">Company Name</InputLabel>
			<Select
				labelId="company-name"
				id="company"
				name="company"
				value={props.form.company || ""}
				label="Company Name"
				onChange={props.handleOnInputChange}
			>
				<MenuItem value={"salesforce"}>Salesforce</MenuItem>
				<MenuItem value={"codepath"}>Codepath</MenuItem>
				<MenuItem value={"workday"}>Workday</MenuItem>
			</Select>
		</FormControl>
	);
}

function RegularRegisterExtra(props) {
	return (
		<TextField
			fullWidth
			color="primary"
			label="Manager Token (optional)"
			name="token"
			onChange={props.handleOnInputChange}
		/>
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
