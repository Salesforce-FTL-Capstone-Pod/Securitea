import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

//Components
import Landing from "../Landing/Landing";
import Login from "../Login/Login";
import Register from "../Register/Register";
import UserDashboard from "../UserDashboard/UserDashboard";
import ModulePagePhishing from "../ModulePage/ModulePagePhishing";
import Modules from "../Modules/Modules";
import * as color from "../../assets/colorPalette";
//Libraries
import { NextUIProvider, createTheme } from "@nextui-org/react";

//Contexts
import { AuthContextProvider } from "../../contexts/auth";
import { useAuthContext } from "../../contexts/auth";

export default function AppContainer() {
	return (
		<NextUIProvider theme={theme}>
			<AuthContextProvider>
				<App />
			</AuthContextProvider>
		</NextUIProvider>
	);
}
function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Landing />} />
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
					<Route path="/UserDashboard/" element={<UserDashboard />} />
					<Route path="/ModulePhishing" element={<ModulePagePhishing />} />
					<Route path="/Modules" element={<Modules />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

const theme = createTheme({
	type: "light",
	theme: {
		colors: {
			platinum: "#ECEBEB",
			black: "#0E131F",
			lightpurple: "#D3CFE2",
			medpurple: "#BEBAE0",
			darkpurple: "3E3B62",
		},
		space: {},
		fonts: {
			wee: "Roboto",
			mono: "Open Sans",
		},
	},
});
