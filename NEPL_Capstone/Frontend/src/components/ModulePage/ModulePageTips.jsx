import React from "react";
import Navbar from "../Navbar/Navbar.jsx";
import { Container, Box } from "@mui/material";
import { Link } from "react-router-dom";
import * as color from "../../assets/colorPalette";
import Footer from "../Footer/Footer.jsx";
import { useNavigate } from "react-router-dom";
import {
	Text,
	Button,
	Progress,
	Collapse,
	Row,
	Grid,
	Card,
} from "@nextui-org/react";
const sizeBox = "65vw";
import { useLoginForm } from "../../hooks/useLoginForm";
import SignInModal from "../SignInModal/SignInModal";
import { useAuthContext } from "../../contexts/auth";
import { useProgressContext } from "../../contexts/progress";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import backgroundImg from '../../assets/SecuriTEA-bg4.svg'

export default function ModulePageTips() {
	const progress = useProgressContext();

	const progressTwo = progress.progress.progress["2"] || 0;

	return (
		<Container maxWidth={false} disableGutters sx={{backgroundImage: `url(${backgroundImg})`}} >
			<Navbar />
			<Overview progress={progress} />
			<Content />
			<Footer />
		</Container>
	);
}

function Overview({ progress }) {
	const navigate = useNavigate();
	const { form, errors, isProcessing, handleOnInputChange, handleOnSubmit } =
		useLoginForm();
	const [visible, setVisible] = React.useState(false);
	const handler = () => setVisible(true);
	const { user, handleLogout } = useAuthContext();

	return (
		<Container
			maxWidth={false}
			disableGutters
			sx={{
				backgroundColor: color.richBlackFogra,
				display: "flex",
				justifyContent: "center",
			
			}}
		>
			<Container
				style={{ marginBottom: "4vw", marginTop: "1vw", width: sizeBox,}}
			>
				<Text
					h3
					weight="light"
					css={{ color: color.platinum, marginBottom: "0vw" }}
				>
					Module
				</Text>
				<Text
					h1
					css={{
						color: color.platinum,
						marginTop: "-0.5vw",
						marginBottom: "0vw",
					}}
				>
					Internet Safety Tips
				</Text>
				{user?.email ? (
					<Button color="secondary" css={{ marginTop: "0.5vw", height: "2vw" }}>
						<Link to="/Modules/demo">
							<Text
								h4
								weight="bold"
								css={{ color: color.platinum, marginBottom: "0vw" }}
							>
								Continue
							</Text>
						</Link>
					</Button>
				) : (
					<Button
						color="inherit"
						onClick={handler}
						css={{
							marginTop: "0.5vw",
							height: "2vw",
							color: color.richBlackFogra,
						}}
					>
						Login
					</Button>
				)}
				<Text
					h3
					css={{
						color: color.platinum,
						marginTop: "1vw",
						marginBottom: "1vw",
					}}
					weight="light"
				>
					Learn how to surf the web while remaining safe.
				</Text>
				(
				<Container sx={{ display: "flex" }} disableGutters>
					<Progress
						color="gradient"
						size="lg"
						value={progress.percentTwo}
						css={{ width: "50%" }}
					/>

					{progress.percentTwo === 100 ? (
						<TaskAltIcon sx={{ color: color.platinum, marginLeft: "1vw" }} />
					) : null}
				</Container>
				)
			</Container>
			<SignInModal
				handler={handler}
				visible={visible}
				setVisible={setVisible}
				handleOnInputChange={handleOnInputChange}
				handleOnSubmit={handleOnSubmit}
			/>
		</Container>
	);
}

function Content() {
	return (
		<Container
			sx={{ display: "flex", minHeight: "100vh", marginBottom: "10vh" }}
			disableGutters
		>
			<Container>
				<Text h1 css={{ marginTop: "1vw" }}>
					Current Unit
				</Text>
				<Collapse.Group splitted>
					<IntroToPhishing />
				</Collapse.Group>

				<Text h1 css={{ marginTop: "1vw" }}>
					Curriculum
				</Text>
				<Collapse.Group splitted accordion={true}>
					<IntroToPhishing />
					<PhishingFirstSim />
					<PhishingSecondSim />
					<PhishingThirdSim />
				</Collapse.Group>

				<Text h1 css={{ marginTop: "1vw" }}>
					Additional Resources
				</Text>
				<Collapse.Group splitted>
					<Collapse title="Sources">
						<Text>
							We source our content from trusted websites such as{" "}
							<a href="https://www.scamwatch.gov.au/types-of-scams/attempts-to-gain-your-personal-information/phishing">
								The ACCC
							</a>
							,{" "}
							<a href="https://www.ftc.gov/news-events/topics/identity-theft/phishing-scams">
								The Federal Trade Commission{" "}
							</a>
							, and{" "}
							<a href="https://support.microsoft.com/en-us/windows/protect-yourself-from-phishing-0c7ea947-ba98-3bd9-7184-430e1f860a44">
								Microsoft
							</a>
						</Text>
					</Collapse>
				</Collapse.Group>
			</Container>
		</Container>
	);
}

function IntroToPhishing() {
	return (
		<Collapse title="Intro to Phishing">
			<Text>
				This unit will give you a comprehensive explanation of what Phishing is
				and how you detect it so that you may be safe on the internet.
			</Text>
		</Collapse>
	);
}

function PhishingFirstSim() {
	return (
		<Collapse title="Phishing: Quiz 1">
			<Text>
				This quiz will test your knowledge of phishing and how to be safe while
				checking your emails.
			</Text>
		</Collapse>
	);
}

function PhishingSecondSim() {
	return (
		<Collapse title="Phishing: Quiz 2">
			<Text>
				This quiz will test your knowledge of phishing and how to be safe while
				checking your emails.
			</Text>
		</Collapse>
	);
}

function PhishingThirdSim() {
	return (
		<Collapse title="Phishing: Quiz 3">
			<Text>
				This quiz will test your knowledge of phishing and how to be safe while
				checking your emails.
			</Text>
		</Collapse>
	);
}
