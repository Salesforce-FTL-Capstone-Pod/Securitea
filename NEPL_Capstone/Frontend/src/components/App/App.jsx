import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import * as color from "../../assets/colorPalette";

//Components
import Landing from "../Landing/Landing";
import Login from "../Login/Login";
import Register from "../Register/Register";
import UserDashboard from "../UserDashboard/UserDashboard";

import ModulePage from "../ModulePage/ModulePagePhishing";
import AuthRoute from "../AuthRoute/AuthRoute";

import ModulePagePhishing from "../ModulePage/ModulePagePhishing";
import ModulePageTips from "../ModulePage/ModulePageTips";
import Modules from "../Modules/Modules";
import PageNotFound from "../PageNotFound/PageNotFound";
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
					<Route path="/ModuleTips" element={<ModulePageTips />} />
					<Route path="/Modules" element={<Modules />} />
					<Route path="*" element={<PageNotFound />} />
				</Routes>
			</BrowserRouter>
		</div>
	);

}

const theme = createTheme({
	type: "light",
	theme: {
		colors: {
			platinum: color.platinum,
			black: color.richBlackFogra,
			lightpurple: color.languidLavender,
			medpurple: color.blueBell,
			darkpurple: color.maximumBluePurple,
		},
		space: {},
		fonts: {
			wee: "Roboto",
			mono: "Open Sans",
		},
	},
});
