import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useSearchParams } from "react-router-dom";
import "./App.css";
import axios from "axios";
import * as color from "../../assets/colorPalette";
//Components
import Landing from "../Landing/Landing";
import Login from "../Login/Login";
import Register from "../Register/Register";
import UserDashboard from "../UserDashboard/UserDashboard";
import ContactUs from "../ContactUs/ContactUs";
import ModulePage from "../ModulePage/ModulePagePhishing";
import ResourcePage from "../ResourcePage/ResourcePage";
import AuthRoute from "../AuthRoute/AuthRoute";
import ModulePagePhishing from "../ModulePage/ModulePagePhishing";
import ModulePageTips from "../ModulePage/ModulePageTips";
import Modules from "../Modules/Modules";
import PageNotFound from "../PageNotFound/PageNotFound";
import SimulationPage from "../SimulationPage/SimulationPage";
import TipsPage from "../InternetTips/InternetTips";
import PasswordPage from "../PasswordPage/PasswordPage";
import Skeleton from "../AuthModulePage/Skeleton";
import RegisterNew from "../Register/RegisterNew";
import Skele from "../Skele/Skele";
//Libraries
import { NextUIProvider, createTheme, Progress, Container, Text, Card } from "@nextui-org/react";
import apiClient from "../../services/apiClient";
//Contexts
import { AuthContextProvider } from "../../contexts/auth";
import { ProgressContextProvider } from "../../contexts/progress";
import ManagerDashboard from "../ManagerDashboard/ManagerDashboard";
import { useAuthContext } from "../../contexts/auth";
import { useNavigate } from "react-router-dom";
export default function AppContainer() {
  return (
    <NextUIProvider theme={theme}>
      <AuthContextProvider>
        <ProgressContextProvider>
          <App />
        </ProgressContextProvider>
      </AuthContextProvider>
    </NextUIProvider>
  );
}
function App() {
  function Slack(){
    const navigate = useNavigate();
    const {user, setUser, setInitialized } = useAuthContext()
    const [test, setTest] = useState()
    let [searchParams, setSearchParams] = useSearchParams();
    const [slackCode, setslackCode] = useState()
    let clientID = "3765144863393.3898834395927"
    let clientSecret = "30d55b4db0a30e1bedd5cb6c478b60e9"
    const params = new URLSearchParams({
      client_id: clientID,
      client_secret: clientSecret,
      code: searchParams.get('code'),
      redirect_uri: "https://localhost:5173/slack"
    }).toString();
    
    useEffect(() => {
      setslackCode(searchParams.get('code'))
      const url =
      "https://slack.com/api/openid.connect.token?" +
      params;
      setTest(url)
      async function fetchResponse(){
       const response = await apiClient.fetchSlackExchange(url, location)
       if(response.data !== null){
        console.log(response.data)
        console.log(user)
        setUser(response.data.user);
        apiClient.setToken(response.data.token);
        setInitialized(true)
       }
      }
      fetchResponse()
    }, [setUser])
    if (Object.keys(user).length > 0){
      navigate("/UserDashboard");
    }

    return(
      <Container fluid>
        <Card css={{ background: "white", marginTop: "15vh"}} variant="flat">
        <Text size={35} weight="normal" css={{ textAlign: "center"}}>
          Setting up your account  {`;)`}
        </Text>
        <Progress size="sm" indeterminated value={20} color="gradient"></Progress>
        </Card>
      </Container>
    )
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/UserDashboard/"
            element={<AuthRoute element={<UserDashboard />} />}
          />
          <Route path="/ModulePhishing" element={<ModulePagePhishing />} />
          <Route path="/ModuleTips" element={<ModulePageTips />} />
          <Route path="/Modules" element={<Modules />} />
          <Route path="/Resources" element={<ResourcePage />} />
          <Route path="/Modules/demo" element={<SimulationPage />} />
          <Route path="/Modules/tips" element={<TipsPage />} />
          <Route path="/PasswordPage" element={<PasswordPage />} />
          <Route path="/Contact-Us" element={<ContactUs />} />
          <Route path="*" element={<PageNotFound />} />
		      <Route path="/Skeleton" element={<AuthRoute element={<Skeleton /> } /> } />
		      <Route path="/ManagerDashboard/*" element={<AuthRoute element={<ManagerDashboard />} /> } />
          <Route path="/Slack" element={<Slack /> } />
          <Route path="/Skele" element={<Skele /> } /> 
          {/* <Route path="/Sim2" element={<SimulationPage2 />} />
          <Route path="/Sim3" element={<SimulationPage3 />} /> */}
          <Route path="/RegisterNew" element={<RegisterNew /> } />
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