import React from "react";
import {
	Card,
	Grid,
	Text,
	Button,
	Row,
	Spacer,
	Progress,
	User,
	NextUIProvider,
	createTheme,
	Image,
} from "@nextui-org/react";
import SignInModal from "../SignInModal/SignInModal";
import Navbar from "../Navbar/Navbar";
import { useLoginForm } from "../../hooks/useLoginForm";
import { Link } from "react-router-dom";
import { Container, width } from "@mui/system";
import Footer from "../Footer/Footer";
import { useAuthContext } from "../../contexts/auth";
import "./Modules.css";
import * as color from "../../assets/colorPalette";
import AuthRoute from "../AuthRoute/AuthRoute";
import Lock from "../../assets/Lock.svg";
import { useProgressContext } from "../../contexts/progress";

const theme = createTheme({
	type: "light",
	theme: {
		colors: {
			platinum: color.platinum,
			black: color.richBlackFogra,
			lightpurple: color.languidLavender,
			medpurple: color.blueBell,
			darkpurple: color.maximumBluePurple,
			success: color.success,
		},
		space: {},
		fonts: {
			wee: "Roboto",
			mono: "Open Sans",
		},
	},
});

export default function Modules() {
	const { user, handleLogout } = useAuthContext();
	return (
		<>
			<Navbar />
			<Hero user={user} />
			<CardContainer />
			<Footer />
		</>
	);
}

export function Hero({ user }) {
	const funFacts = [
		"that there are around 3,000 different types of tea",
		"that tea has more caffeine than coffee",
		"that you should never use boiling water for tea as you'll burn the leaf",
		"that Earl Grey tea was named after the actual Earl Grey",
		"that there are over 3000 varieties of tea",
		"that if the Internet were weighed, it would weigh about 2 ounces",
		"that the current estimate of internet users is roughly 3.26 billion worldwide, or less than half of Earth’s population",
		"that the phrase “internet surfing” was coined by a librarian named Jean Armour Polly in 1992",
		"87% of people have not heard the term ‘Internet of Things’",
		"that it is estimated that by 2020, a quarter of a billion vehicles will have internet connection",
		"that the first spam email that ever went out was from a computer salesman named Gary Thuerk in 1978",
		"that so far in 2022 $4,731,900 have been lost due to phishing scams",
		"that in the US, one in ten adults will fall victim to a scam or fraud every year",
		"1.3 Million children have their identities stolen every year",
	];
	return (
		<>
			<Container
				sx={{
					display: "flex",
					marginTop: "3.5vw",
					justifyContent: "space-around",
					background: "#D3CFE2",
					height: "240px",
					width: "90%",
					textAlign: "center",
				}}
				maxWidth={false}
			>
				<Container>
					<h1
						style={{
							marginTop: "3vw",
							fontSize: "200%",
						}}
					>
						Welcome Back {user.firstName}!
					</h1>
					<h3>
						{" "}
						Did you know {funFacts[Math.floor(Math.random() * funFacts.length)]}
						?
					</h3>
				</Container>
			</Container>
			<br></br>
		</>
	);
}

export function CardContainer() {
	const { user, handleLogout } = useAuthContext();
	const progress = useProgressContext();
	return (
		<div className="cont">
			<Container
				maxWidth={"xl"}
				sx={{
					p: 3,
					display: "flex",
					flexWrap: "wrap",
					justifyContent: "center",
				}}
			>
				<PhishingModuleCard progress={progress} />
				<TipsModuleCard progress={progress} />
				<LockedCard />
				<LockedCard />
			</Container>
		</div>
	);
}

export function LockedCard() {
	return (
		<Card
			isHoverable
			css={{
				bg: "#A39EDA",
				width: " var(--container-width)",
				margin: "1em",
				display: "flex",
				height: "320px",
			}}
		>
			<Card.Header css={{ textAlign: "center" }}>
				<Text
					css={{ textAlign: "center", color: "$black", opacity: "0.5" }}
					size={30}
					b
				>
					{" "}
					Coming Soon!{" "}
				</Text>
			</Card.Header>
			<Card.Divider />
			<Card.Image src={Lock} width="100%" css={{ opacity: "0.5" }} />

			<Card.Body css={{ py: "$10" }}></Card.Body>
		</Card>
	);
}

export function PhishingModuleCard({ progress }) {
	const { user, handleLogout } = useAuthContext();
	const { form, errors, isProcessing, handleOnInputChange, handleOnSubmit } =
		useLoginForm();
	const [visible, setVisible] = React.useState(false);
	const handler = () => setVisible(true);
	return (
		<Card
			isHoverable
			css={{
				bg: "#A39EDA",
				width: " var(--container-width)",
				margin: "1em",
				display: "flex",
			}}
		>
			<Card.Header css={{ textAlign: "center" }}>
				<Text css={{ textAlign: "center", color: "$black" }} size={30} b>
					{" "}
					Phishing{" "}
				</Text>
			</Card.Header>
			<Card.Divider />
			<Card.Body css={{ py: "$10" }}>
				<Text css={{ color: "$black" }}>
					Phishing is a type of social engineering where an attacker send s a
					fradulent message designed to trick a person into revealing sensitive
					information to the attacker or to deploy malicious software on the
					victim's machine.
				</Text>
				<Spacer></Spacer>
				{user?.email ? (
					<div>
						<Progress color="secondary" value={progress.percentOne} />
						<Text css={{ color: "$black" }}>
							{progress?.progress?.progress["1"].progress}/
							{progress?.progress?.progress["1"].steps} Steps Complete
						</Text>
					</div>
				) : (
					<div></div>
				)}
			</Card.Body>

			<Card.Divider />

			{user?.email ? (
				<Card.Footer>
					<Row justify="flex-end">
						<Link to="/ModulePhishing">
							<Button size="sm" bordered color="secondary">
								Learn More
							</Button>
						</Link>

						<Spacer></Spacer>
						<Link to="/Modules/demo">
							<Button size="sm" color="secondary">
								Continue
							</Button>
						</Link>
					</Row>
				</Card.Footer>
			) : (
				<div>
					<Card.Footer>
						<Row justify="flex-end">
							<Link to="/ModulePhishing">
								<Button size="sm" bordered color="secondary">
									Learn More
								</Button>
							</Link>
							<Spacer></Spacer>
							<Button size="sm" color="secondary" onClick={handler}>
								Sign In
							</Button>
						</Row>
					</Card.Footer>
					<SignInModal
						handler={handler}
						visible={visible}
						setVisible={setVisible}
						handleOnInputChange={handleOnInputChange}
						handleOnSubmit={handleOnSubmit}
					/>
				</div>
			)}
		</Card>
	);
}

export function TipsModuleCard({ progress }) {
	const { user, handleLogout } = useAuthContext();
	const { form, errors, isProcessing, handleOnInputChange, handleOnSubmit } =
		useLoginForm();
	const [visible, setVisible] = React.useState(false);
	const handler = () => setVisible(true);

	return (
		<Card
			isHoverable
			css={{
				bg: "#A39EDA",
				width: " var(--container-width)",
				margin: "1em",
				display: "flex",
			}}
		>
			<Card.Header css={{ textAlign: "center" }}>
				<Text css={{ textAlign: "center", color: "$black" }} size={30} b>
					{" "}
					Safety Tips{" "}
				</Text>
			</Card.Header>
			<Card.Divider />
			<Card.Body css={{ py: "$10" }}>
				<Text css={{ color: "$black" }}>
					In this module you will find basic tips on how to keep your data and
					your companies data safe and secure on the internet! Using these tips
					will make it easier for you to keep your and your companies data
					private and secure!
				</Text>
				<Spacer></Spacer>

				{user?.email ? (
					<div>
						<Progress color="secondary" value={progress.percentTwo} />
						<Text css={{ color: "$black" }}>
							{progress?.progress?.progress["2"].progress}/
							{progress?.progress?.progress["2"].steps} Steps Complete
						</Text>
					</div>
				) : (
					<div></div>
				)}
			</Card.Body>

			<Card.Divider />

			{user?.email ? (
				<Card.Footer>
					<Row justify="flex-end">
						<Link to="/ModuleTips">
							<Button size="sm" bordered color="secondary">
								Learn More
							</Button>
						</Link>

						<Spacer></Spacer>
						<Link to="/Modules/tips">
							{" "}
							<Button size="sm" color="secondary">
								Continue{" "}
							</Button>{" "}
						</Link>
					</Row>
				</Card.Footer>
			) : (
				<div>
					<Card.Footer>
						<Row justify="flex-end">
							<Link to="/ModuleTips">
								<Button size="sm" bordered color="secondary">
									Learn More
								</Button>
							</Link>
							<Spacer></Spacer>
							<Button size="sm" color="secondary" onClick={handler}>
								Sign In
							</Button>
						</Row>
					</Card.Footer>
					<SignInModal
						handler={handler}
						visible={visible}
						setVisible={setVisible}
						handleOnInputChange={handleOnInputChange}
						handleOnSubmit={handleOnSubmit}
					/>
				</div>
			)}
		</Card>
	);
}
