import React from "react";
import {
	Button,
	Grid,
	Container,
	Box,
	AppBar,
	Toolbar,
	Typography,
	Stack,
	colors,
	TextField,
	InputAdornment,
	IconButton,
	Radio,
	FormControlLabel,
	FormControl,
	RadioGroup,
} from "@mui/material";
import * as color from "../../assets/colorPalette";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

import Speaker from "../../assets/Speaker.svg";
import { useLoginForm } from "../../hooks/useLoginForm";
import PasswordStrengthBar from "react-password-strength-bar";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import right from "../../assets/right.png";
import wrong from "../../assets/wrong.png";

import Question from "../../assets/Question.svg";
import { borderRadius } from "@mui/system";
import { useState } from "react";
import { useEffect } from "react";
import { Spacer } from "@nextui-org/react";
import { useAuthContext } from "../../contexts/auth";
import API from "../../services/apiClient";

export default function TipsPage() {
	return (
		<>
			<Navbar />
			<PasswordPage />
			<Footer />
		</>
	);
}

// const speak = (evt) => {
//   //Add tts functionality here
//   console.log("here");
// };

function PasswordPage() {
	const { form, errors, isProcessing, handleOnInputChange, handleOnSubmit } =
		useLoginForm();
	const [password, setPassword] = useState("");
	const [showPassword, setShowPassword] = useState(false);
	const handleClickShowPassword = () => setShowPassword(!showPassword);
	const handleMouseDownPassword = () => setShowPassword(!showPassword);
	const [generatedPassword, setGeneratedPassword] = useState("");

	const Allowed = {
		Uppers: "QWERTYUIOPASDFGHJKLZXCVBNM",
		Lowers: "qwertyuiopasdfghjklzxcvbnm",
		Numbers: "1234567890",
		Symbols: "!@#$%^&*",
	};

	const getRandomChar = (str) =>
		str.charAt(Math.floor(Math.random() * str.length));

	const generatePassword = (length = 12) => {
		let pwd = "";
		pwd += getRandomChar(Allowed.Uppers);
		pwd += getRandomChar(Allowed.Lowers);
		pwd += getRandomChar(Allowed.Numbers);
		pwd += getRandomChar(Allowed.Symbols);

		for (let i = pwd.length; i < 12; i++) {
			pwd += getRandomChar(Object.values(Allowed).join(""));
		}

		setGeneratedPassword(pwd);
	};

	const nextHandler = async () => {
		//TODO: call this on the win condition
		const respo = await API.addProgress("2");
		setUser({ ...user, refresh: true });
		delete user.refresh;

		navigate("../PasswordPage");
	};

	return (
		<Container
			maxWidth={false}
			style={{
				display: "flex ",
				flexDirection: "column",
				backgroundColor: color.platinum,
				height: "100%",
				width: "75%",
				marginTop: "100px",
				marginBottom: "100px",
			}}
		>
			<h2>Tips to create a strong password:</h2>
			<Container style={{ display: "flex", justifyContent: "center" }}>
				<Container style={{ backgroundColor: "#C1E1C1", opacity: "0.8" }}>
					<p style={{ color: "green" }}>DO:</p>
					<li>Make sure it is AT LEAST 12 characters long</li>
					<li>Use a lyric</li>
					<li>Use a quote</li>
					<li>Use a passage from a book</li>
					<li>Use an abbreviation of a phrase or setence</li>
					<li>Use a random string generator</li>
				</Container>

				<Container style={{ width: "25%" }}></Container>

				<Container style={{ backgroundColor: "#FAA0A0", opacity: "0.8" }}>
					<p style={{ color: "red" }}>DONT</p>
					<li>Use words that are easy to guess</li>
					<li>Use nicknames or initials</li>
					<li>Use names of family/friends</li>
					<li>Use pet names</li>
					<li>Use your birthday</li>
					<li>Use any easily accesible information</li>
				</Container>
			</Container>
			<h3>Try it Out!</h3>
			<Container>
				<TextField
					margin="normal"
					required
					fullWidth
					label="Enter your password"
					type={showPassword ? "text" : "password"}
					name="password"
					autoFocus
					onChange={(e) => setPassword(e.target.value)}
					InputProps={{
						endAdornment: (
							<InputAdornment position="end">
								<IconButton
									aria-label="toggle password visibility"
									onClick={handleClickShowPassword}
									onMouseDown={handleMouseDownPassword}
								>
									{showPassword ? <Visibility /> : <VisibilityOff />}
								</IconButton>
							</InputAdornment>
						),
					}}
				></TextField>
				<PasswordStrengthBar password={password} />
			</Container>
			<h3>Or let us create one for you!</h3>
			<Container
				style={{
					display: "flex",
					justifyContent: "center",
					flexDirection: "column",
				}}
			>
				<Button
					type="submit"
					fullWidth
					variant="contained"
					disableRipple
					color="primary"
					sx={{ mt: 3, mb: 2 }}
					onClick={generatePassword}
				>
					Create!
				</Button>
				<Spacer></Spacer>
				<Container
					style={{
						display: "flex",
						justifyContent: "center",
						flexDirection: "row",
					}}
				>
					<Typography
						style={{
							display: "flex",
							justifyContent: "space-between",
							fontSize: "20px",
						}}
					>
						{generatedPassword}
					</Typography>
				</Container>
				<Button
					onClick={() => navigator.clipboard.writeText(generatedPassword)}
				>
					Copy to Clipboard
				</Button>
			</Container>
		</Container>
	);
}
