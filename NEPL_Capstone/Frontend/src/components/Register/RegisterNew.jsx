import React from "react";
import { useState, useEffect } from "react";
import { Link as DomLink, useLocation } from "react-router-dom";
import { useRegistrationForm } from "../../hooks/useRegistrationForm";
import "./Register.css";
import SampleLogo from "../../assets/SampleLogo.svg";
import Logo from "../../assets/Logo.svg";
import * as color from "../../assets/colorPalette";
import Navbar from "../Navbar/Navbar";

//MUI Components
import { Textarea, Card, Row, Spacer, Text, Button, Grid, Input, Loading, Checkbox, Dropdown, Container as NextContainer} from "@nextui-org/react"
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Link from "@mui/material/Link";;
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import { InputLabel } from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import SlackLogo from "../../assets/slack.svg"

import backgroundImg from '../../assets/SecuriTEA-bg1.svg'
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

function RegisterNew() {
	const { form, setForm, errors, isProcessing, handleOnInputChange, handleOnSubmit } =
		useRegistrationForm();


	const [managerForm, setmanagerForm] = useState(false)
	return (
		<>
		<Navbar />
		<Container disableGutters maxWidth={false} sx={{ display: "flex", justifyContent: 'center', minWidth: "100vw", minHeight: "100vh", backgroundImage: `url(${backgroundImg})`}}>
 		<Card css={{ width: "40vw", minHeight: "60vh",bg: "white", marginTop: "15vh", marginBottom: "45vh"}} variant="bordered" borderWeight="normal">

			<Card.Header css={{ textAlign: "center" , justifyContent: "center"}}>
				<Text css={{ textAlign: "center", color: "$colors$black" }} weight="thin" size={30} b>
          Create an account for <b>SecuriTEA</b> 🍵 
				</Text>
			</Card.Header>
      	<Card.Divider></Card.Divider>
				<Card.Body css={{ py: "$10", marginBottom: "-2vh" }}>

        <Grid.Container gap={2}>
          
          <Grid>
            <Input
            width="17vw"
            size="lg"
            clearable
            name="first_name"
            color="secondary"
            label="First Name"
            placeholder="Enter your first name"
            onChange={handleOnInputChange}
          	/>
          </Grid>

		  <Grid>
            <Input
            width="17vw"
            size="lg"
            clearable
            name="last_name"
            color="secondary"
            label="Last Name"
            placeholder="Enter your last name"
            onChange={handleOnInputChange}
          	/>
          </Grid>

		  <Grid>
            <Input
            width="35.5vw"
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
            size="lg"
            clearable
            name="password"
            color="secondary"
            label="Password"
            placeholder="Create a password"
            onChange={handleOnInputChange}
          	/>
          </Grid>
		  
          
		  <Grid>
            <Input.Password
			disabled={form.password?.length == 0}
			name="passwordConfirm"
            width="17vw"
            size="lg"
            clearable
            color="secondary"
            label="Confirm Password"
            placeholder="Confirm your password"
            onChange={handleOnInputChange}
          />
          </Grid>

		  <Grid>
				<Input 
				width="16vw" 
				color="secondary"
				name="birthday"
				label="Select your birth date" 
				type="date" 
				onChange={(e) => handleOnInputChange(e)}
				/>
		  </Grid>

		  <Grid>
		 	 <TitleSelection label="Select your preferred title" />
		  </Grid>


		  <Grid>
			<Checkbox css={{ width: "17vw"}} defaultSelected={false} color="gradient" name="isManagerName" size="sm" onChange={(e) => { setmanagerForm(e); }}>
					I am a manager
			</Checkbox>
		  </Grid>

		  <Grid>
			{managerForm == true ? <CompanySelection /> : <>
			<Input.Password
			css={{ marginLeft: "0.5vh"}}
			name="token"
            width="17vw"
            size="lg"
            clearable
            color="secondary"
            label="Manager Token"
            placeholder="Enter your token (optional)"
            onChange={handleOnInputChange}
          />
			</>}
          </Grid>
		  
		  <Grid >
            <Button color="secondary" onClick={handleOnSubmit} css={{ marginTop: "0.5vw", height: "2vw", width: "15vw", marginBottom: "0.3vw", marginLeft: "10vw"}}>
              {isProcessing == false ? <>Register</> : <><Loading type="default" /></>}
            </Button>
          </Grid>

		  <Card.Divider></Card.Divider>

		<Grid>
		<Link color="inherit" href="https://slack.com/openid/connect/authorize?scope=openid%20profile%20email&amp;response_type=code&amp;redirect_uri=https%3A%2F%2Flocalhost%3A5173%2Fslack&amp;client_id=3765144863393.3898834395927" target="_blank">
		<Button color="secondary" css={{ height: "2vw", marginTop: "0.3vw", width: "15vw", background: "#4A154B", marginLeft: "10vw"}} disabled={isProcessing == true ? true : false}>
			<img src={SlackLogo} width="20vw" style={{ marginRight: "0.5vw" }} />
			Sign in with Slack
		</Button>
		</Link>
		</Grid>

        </Grid.Container>
		</Card.Body>
     	<Card.Footer css={{ marginTop: "-1vh", justifyContent: "center", opacity: "0.4"}}>
		
        <CredFooter />
        </Card.Footer>
		</Card>
		</Container>
		</>
	);
}

export default RegisterNew;


function CredFooter(props) {
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


function CompanySelection(){
	const [selected, setSelected] = React.useState(new Set(["Select Company"]));
	const { handleOnInputChange } = useRegistrationForm()
	const [selectedValue, setselectedValue] = useState("Select Company")

	const handleChange = (e) => {
		setselectedValue(e.anchorKey)
		handleOnInputChange(e)
	}

	return (
	<>
	  <Dropdown>
		<Dropdown.Button flat color="secondary" css={{ tt: "capitalize", width: "17vw", marginLeft: "0.5vh" }}>
		  {selectedValue}
		</Dropdown.Button>
		<Dropdown.Menu
		  aria-label="Company Selection"
		  color="secondary"
		  name="company"
		  disallowEmptySelection
		  selectionMode="single"
		  selectedKeys={selected}
		  onSelectionChange={(e) => handleChange(e)}
		>
		  <Dropdown.Item key="salesforce">Salesforce</Dropdown.Item>
		  <Dropdown.Item key="codepath">Codepath</Dropdown.Item>
		  <Dropdown.Item key="workday">Workday</Dropdown.Item>
		</Dropdown.Menu>
	  </Dropdown>
	</>
	);
}



function TitleSelection({ label }){
	const [selected, setSelected] = React.useState(new Set(["Preferred Title"]));
	const { handleOnInputChange } = useRegistrationForm()
	const selectedValue = React.useMemo(
	  () => Array.from(selected).join(", ").replaceAll("_", " "),
	  [selected]
	);

  
	return (
	<NextContainer>
	<Text size={15} color="secondary">
	{label}
  	</Text>
	  <Dropdown>
		<Dropdown.Button flat color="secondary" css={{ tt: "capitalize", width: "17vw" }}>
		  {selectedValue}
		</Dropdown.Button>
		<Dropdown.Menu
		  aria-label="Title selection"
		  color="secondary"
		  name="title"
		  disallowEmptySelection
		  selectionMode="single"
		  selectedKeys={selected}
		  onSelectionChange={setSelected}
		>
		  <Dropdown.Item key="Mr.">Mr.</Dropdown.Item>
		  <Dropdown.Item key="Ms.">Ms.</Dropdown.Item>
		  <Dropdown.Item key="Mx.">Mx.</Dropdown.Item>
		  <Dropdown.Item key="Mrs.">Mrs.</Dropdown.Item>
		  <Dropdown.Item key="Miss">Miss</Dropdown.Item>
		</Dropdown.Menu>
	  </Dropdown>
	</NextContainer>
	);
}
