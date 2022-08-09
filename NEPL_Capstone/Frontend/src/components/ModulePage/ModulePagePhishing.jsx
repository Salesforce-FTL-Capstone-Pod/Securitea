// import React from "react";
// import "./ModulePage.css";
// import Navbar from "../Navbar/Navbar.jsx";
// import { Container, Button, Box } from "@mui/material";
// import { Link } from "react-router-dom";
// import * as color from "../../assets/colorPalette";
// import { useLoginForm } from "../../hooks/useLoginForm";
// import SignInModal from "../SignInModal/SignInModal";

// const sizeBox = "65vw";

// export default function ModulePagePhishing() {
// 	return (
// 		<Container maxWidth={false} disableGutters>
// 			<Navbar />
// 			<ModuleOverview />
// 			<Overview />
// 		</Container>
// 	);
// }

// function ModuleOverview() {
// 	const { form, errors, isProcessing, handleOnInputChange, handleOnSubmit } =
// 		useLoginForm();
// 	const [visible, setVisible] = React.useState(false);
// 	const handler = () => setVisible(true);
// 	return (
// 		<Container
// 			maxWidth={false}
// 			disableGutters
// 			sx={{
// 				backgroundColor: color.richBlackFogra,
// 				display: "flex",
// 				justifyContent: "center",
// 			}}
// 		>
// 			<Container
// 				style={{ marginBottom: "4vw", marginTop: "1vw", width: sizeBox }}
// 			>
// 				<h1 style={{ color: color.platinum }}>Phishing</h1>
// 				<h2 style={{ color: color.platinum, marginBottom: "1vw" }}>
// 					Lorem ipsum dolor sit amet, consectetur adipiscing elitsed do eiusmod
// 					tempor incididunt ut labore et dolore
// 				</h2>
// 				<h3 style={{ color: color.platinum, marginBottom: "2vw" }}>
// 					Lorem ipsum dolor sit amet, consectetur adipiscing elitsed do eiusmod
// 					tempor incididunt ut labore et dolore
// 				</h3>
// 				<Button
// 					color="inherit"
// 					onClick={handler}
// 					sx={{
// 						border: `2px solid ${color.languidLavender}`,
// 						marginRight: "1vw",
// 						paddingLeft: "1vw",
// 						paddingRight: "1vw",
// 						color: color.platinum,
// 					}}
// 				>
// 					Login
// 				</Button>
// 				<Button
// 					variant="contained"
// 					to="/Register"
// 					component={Link}
// 					sx={{
// 						backgroundColor: color.languidLavender,
// 						color: color.richBlackFogra,
// 					}}
// 				>
// 					Sign Up
// 				</Button>
// 			</Container>

// 			<SignInModal
// 				handler={handler}
// 				visible={visible}
// 				setVisible={setVisible}
// 				handleOnInputChange={handleOnInputChange}
// 				handleOnSubmit={handleOnSubmit}
// 			/>
// 		</Container>
// 	);
// }

// function Overview() {
// 	const [isOverview, setIsOverview] = React.useState(true);
// 	return (
// 		<Container sx={{ display: "flex" }} disableGutters>
// 			<Container>
// 				<Container
// 					sx={{
// 						display: "flex",
// 						borderBottom: `3px solid ${color.blueBell}`,
// 						width: "fit-content",
// 						marginLeft: "0px",
// 						marginBottom: "1vw",
// 					}}
// 					disableGutters
// 					maxWidth={false}
// 				>
// 					<h1
// 						style={{
// 							marginRight: "3vw",
// 							cursor: "pointer",
// 							marginBottom: "0px",
// 							borderBottom: isOverview ? `solid 2px ${color.blueBell}` : "0px",
// 						}}
// 						onClick={() => {
// 							setIsOverview(true);
// 						}}
// 					>
// 						Overview
// 					</h1>
// 					<h1
// 						style={{
// 							cursor: "pointer",
// 							marginBottom: "0px",
// 							borderBottom: !isOverview ? `solid 2px ${color.blueBell}` : "0px",
// 						}}
// 						onClick={() => setIsOverview(false)}
// 					>
// 						Curriculum
// 					</h1>
// 				</Container>

// 				<div className={isOverview ? "overview" : "overview hidden"}>
// 					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
// 					eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas
// 					sed tempus urna et pharetra pharetra massa. Auctor elit sed vulputate
// 					mi sit amet. Sagittis aliquam malesuada bibendum arcu vitae. Leo urna
// 					molestie at elementum eu facilisis sed. Sollicitudin aliquam ultrices
// 					sagittis orci a scelerisque purus. Feugiat nisl pretium fusce id velit
// 					ut. Amet dictum sit amet justo donec enim diam vulputate. Consectetur
// 					lorem donec massa sapien faucibus. Enim praesent elementum facilisis
// 					leo vel. Eleifend quam adipiscing vitae proin sagittis. Pulvinar
// 					elementum integer enim neque volutpat ac tincidunt vitae semper. Etiam
// 					sit amet nisl purus in. Donec massa sapien faucibus et. Ultrices neque
// 					ornare aenean euismod elementum. Nunc sed blandit libero volutpat sed.
// 					Eleifend donec pretium vulputate sapien nec sagittis. Lectus arcu
// 					bibendum at varius. Urna et pharetra pharetra massa massa ultricies
// 					mi. Ultricies mi eget mauris pharetra. Aliquam sem et tortor consequat
// 					id. In nibh mauris cursus mattis molestie a. Etiam tempor orci eu
// 					lobortis elementum. In nulla posuere sollicitudin aliquam ultrices
// 					sagittis orci a. Etiam dignissim diam quis enim. Dictum varius duis at
// 					consectetur lorem donec massa sapien. Venenatis urna cursus eget nunc
// 					scelerisque viverra. Amet consectetur adipiscing elit ut aliquam purus
// 					sit amet luctus. Molestie a iaculis at erat pellentesque adipiscing
// 					commodo. Tempus imperdiet nulla malesuada pellentesque elit eget
// 					gravida. Pellentesque habitant morbi tristique senectus et. Quisque
// 					non tellus orci ac auctor augue mauris augue. Leo integer malesuada
// 					nunc vel risus. Vitae nunc sed velit dignissim sodales ut eu sem. Mi
// 					bibendum neque egestas congue quisque egestas diam. Dolor purus non
// 					enim praesent elementum facilisis leo. Mauris augue neque gravida in.
// 					Tincidunt tortor aliquam nulla facilisi. Est pellentesque elit
// 					ullamcorper dignissim. Ullamcorper dignissim cras tincidunt lobortis
// 					feugiat vivamus at. Tincidunt eget nullam non nisi. Phasellus egestas
// 					tellus rutrum tellus pellentesque eu. Elit eget gravida cum sociis
// 					natoque. Ipsum a arcu cursus vitae congue mauris rhoncus aenean vel.
// 					Vel pharetra vel turpis nunc eget lorem dolor. Egestas dui id ornare
// 					arcu odio ut sem nulla pharetra. Congue mauris rhoncus aenean vel elit
// 					scelerisque mauris. Enim nunc faucibus a pellentesque sit amet
// 					porttitor eget. Cras fermentum odio eu feugiat pretium nibh ipsum. Ac
// 					orci phasellus egestas tellus rutrum tellus. Consequat ac felis donec
// 					et odio pellentesque diam volutpat. Ultrices neque ornare aenean
// 					euismod. Nec dui nunc mattis enim ut tellus elementum. Sagittis orci a
// 					scelerisque purus semper eget duis at tellus. Elementum nisi quis
// 					eleifend quam adipiscing vitae proin sagittis nisl. Ligula ullamcorper
// 					malesuada proin libero nunc consequat interdum. In egestas erat
// 					imperdiet sed euismod nisi porta. Morbi blandit cursus risus at
// 					ultrices mi tempus imperdiet nulla. Quisque non tellus orci ac auctor
// 					augue mauris augue. Eu scelerisque felis imperdiet proin fermentum.
// 					Volutpat ac tincidunt vitae semper quis lectus nulla at volutpat.
// 					Imperdiet nulla malesuada pellentesque elit eget gravida cum. Velit
// 					scelerisque in dictum non consectetur a erat. Leo urna molestie at
// 					elementum eu facilisis sed odio. Id diam maecenas ultricies mi eget
// 					mauris pharetra et ultrices. Ultrices in iaculis nunc sed augue lacus
// 					viverra vitae congue. Varius duis at consectetur lorem donec massa
// 					sapien faucibus et. Blandit turpis cursus in hac habitasse platea
// 					dictumst quisque. Ipsum dolor sit amet consectetur adipiscing elit
// 					duis tristique. Quis enim lobortis scelerisque fermentum dui. Est
// 					lorem ipsum dolor sit amet. Quisque egestas diam in arcu cursus
// 					euismod quis viverra. Nisl condimentum id venenatis a condimentum
// 					vitae sapien pellentesque habitant. Auctor urna nunc id cursus. Enim
// 					blandit volutpat maecenas volutpat blandit aliquam.
// 				</div>

// 				<div className={isOverview ? "curriculum hidden" : "curriculum"}>
// 					CURRICULUM Lorem ipsum dolor sit amet, consectetur adipiscing elit,
// 					sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
// 					Egestas sed tempus urna et pharetra pharetra massa. Auctor elit sed
// 					vulputate mi sit amet. Sagittis aliquam malesuada bibendum arcu vitae.
// 					Leo urna molestie at elementum eu facilisis sed. Sollicitudin aliquam
// 					ultrices sagittis orci a scelerisque purus. Feugiat nisl pretium fusce
// 					id velit ut. Amet dictum sit amet justo donec enim diam vulputate.
// 					Consectetur lorem donec massa sapien faucibus. Enim praesent elementum
// 					facilisis leo vel. Eleifend quam adipiscing vitae proin sagittis.
// 					Pulvinar elementum integer enim neque volutpat ac tincidunt vitae
// 					semper. Etiam sit amet nisl purus in. Donec massa sapien faucibus et.
// 					Ultrices neque ornare aenean euismod elementum. Nunc sed blandit
// 					libero volutpat sed. Eleifend donec pretium vulputate sapien nec
// 					sagittis. Lectus arcu bibendum at varius. Urna et pharetra pharetra
// 					massa massa ultricies mi. Ultricies mi eget mauris pharetra. Aliquam
// 					sem et tortor consequat id. In nibh mauris cursus mattis molestie a.
// 					Etiam tempor orci eu lobortis elementum. In nulla posuere sollicitudin
// 					aliquam ultrices sagittis orci a. Etiam dignissim diam quis enim.
// 					Dictum varius duis at consectetur lorem donec massa sapien. Venenatis
// 					urna cursus eget nunc scelerisque viverra. Amet consectetur adipiscing
// 					elit ut aliquam purus sit amet luctus. Molestie a iaculis at erat
// 					pellentesque adipiscing commodo. Tempus imperdiet nulla malesuada
// 					pellentesque elit eget gravida. Pellentesque habitant morbi tristique
// 					senectus et. Quisque non tellus orci ac auctor augue mauris augue. Leo
// 					integer malesuada nunc vel risus. Vitae nunc sed velit dignissim
// 					sodales ut eu sem. Mi bibendum neque egestas congue quisque egestas
// 					diam. Dolor purus non enim praesent elementum facilisis leo. Mauris
// 					augue neque gravida in. Tincidunt tortor aliquam nulla facilisi. Est
// 					pellentesque elit ullamcorper dignissim. Ullamcorper dignissim cras
// 					tincidunt lobortis feugiat vivamus at. Tincidunt eget nullam non nisi.
// 					Phasellus egestas tellus rutrum tellus pellentesque eu. Elit eget
// 					gravida cum sociis natoque. Ipsum a arcu cursus vitae congue mauris
// 					rhoncus aenean vel. Vel pharetra vel turpis nunc eget lorem dolor.
// 					Egestas dui id ornare arcu odio ut sem nulla pharetra. Congue mauris
// 					rhoncus aenean vel elit scelerisque mauris. Enim nunc faucibus a
// 					pellentesque sit amet porttitor eget. Cras fermentum odio eu feugiat
// 					pretium nibh ipsum. Ac orci phasellus egestas tellus rutrum tellus.
// 					Consequat ac felis donec et odio pellentesque diam volutpat. Ultrices
// 					neque ornare aenean euismod. Nec dui nunc mattis enim ut tellus
// 					elementum. Sagittis orci a scelerisque purus semper eget duis at
// 					tellus. Elementum nisi quis eleifend quam adipiscing vitae proin
// 					sagittis nisl. Ligula ullamcorper malesuada proin libero nunc
// 					consequat interdum. In egestas erat imperdiet sed euismod nisi porta.
// 					Morbi blandit cursus risus at ultrices mi tempus imperdiet nulla.
// 					Quisque non tellus orci ac auctor augue mauris augue. Eu scelerisque
// 					felis imperdiet proin fermentum. Volutpat ac tincidunt vitae semper
// 					quis lectus nulla at volutpat. Imperdiet nulla malesuada pellentesque
// 					elit eget gravida cum. Velit scelerisque in dictum non consectetur a
// 					erat. Leo urna molestie at elementum eu facilisis sed odio. Id diam
// 					maecenas ultricies mi eget mauris pharetra et ultrices. Ultrices in
// 					iaculis nunc sed augue lacus viverra vitae congue. Varius duis at
// 					consectetur lorem donec massa sapien faucibus et. Blandit turpis
// 					cursus in hac habitasse platea dictumst quisque. Ipsum dolor sit amet
// 					consectetur adipiscing elit duis tristique. Quis enim lobortis
// 					scelerisque fermentum dui. Est lorem ipsum dolor sit amet. Quisque
// 					egestas diam in arcu cursus euismod quis viverra. Nisl condimentum id
// 					venenatis a condimentum vitae sapien pellentesque habitant. Auctor
// 					urna nunc id cursus. Enim blandit volutpat maecenas volutpat blandit
// 					aliquam.
// 				</div>
// 			</Container>
// 			<Box
// 				sx={{
// 					backgroundColor: color.languidLavender,
// 					width: "28vw",
// 					height: "20vw",
// 					position: "relative",
// 					top: "-5vw",
// 					display: "flex",
// 					flexDirection: "column",
// 					textAlign: "center",
// 				}}
// 			>
// 				<Container
// 					sx={{
// 						borderBottom: `2px solid ${color.blueBell}`,
// 						height: "25%",
// 						display: "flex",
// 						flexDirection: "column",
// 						justifyContent: "center",
// 					}}
// 				>
// 					<h3 style={{ marginTop: "5%", marginBottom: "0%" }}>
// 						FACT! FACT! FACT!
// 					</h3>
// 					<h2>Statistic!</h2>
// 				</Container>
// 				<Container
// 					sx={{
// 						borderBottom: `2px solid ${color.blueBell}`,
// 						height: "25%",
// 						display: "flex",
// 						flexDirection: "column",
// 						justifyContent: "center",
// 					}}
// 				>
// 					<h3 style={{ marginTop: "5%", marginBottom: "0%" }}>
// 						FACT! FACT! FACT!
// 					</h3>
// 					<h2>Statistic!</h2>
// 				</Container>
// 				<Container
// 					sx={{
// 						borderBottom: `2px solid ${color.blueBell}`,
// 						height: "25%",
// 						display: "flex",
// 						flexDirection: "column",
// 						justifyContent: "center",
// 					}}
// 				>
// 					<h3 style={{ marginTop: "5%", marginBottom: "0%" }}>
// 						FACT! FACT! FACT!
// 					</h3>
// 					<h2>Statistic!</h2>
// 				</Container>
// 				<Container
// 					sx={{
// 						height: "25%",
// 						display: "flex",
// 						flexDirection: "column",
// 						justifyContent: "center",
// 					}}
// 				>
// 					<h3 style={{ marginTop: "5%", marginBottom: "0%" }}>
// 						FACT! FACT FACT!
// 					</h3>
// 					<h2>Statistic!</h2>
// 				</Container>
// 			</Box>
// 		</Container>
// 	);
// }

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
import { Container as MUIContainer } from "@mui/material";
import { Button as MUIButton } from "@mui/material";
import { useAuthContext } from "../../contexts/auth";
import { useProgressContext } from "../../contexts/progress";

export default function ModulePagePhishing() {
	return (
		<Container maxWidth={false} disableGutters>
			<Navbar />
			<Overview />
			<Content />
			<Footer />
		</Container>
	);
}

function Overview() {
	const navigate = useNavigate();
	const { form, errors, isProcessing, handleOnInputChange, handleOnSubmit } =
		useLoginForm();
	const [visible, setVisible] = React.useState(false);
	const handler = () => setVisible(true);
	const { user, handleLogout } = useAuthContext();
	const { progress } = useProgressContext();
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
				style={{ marginBottom: "4vw", marginTop: "1vw", width: sizeBox }}
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
					Phishing
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
					Learn how to protect yourself from phishing attempts.
				</Text>
				<Progress
					color="gradient"
					size="lg"
					value={progress}
					css={{ width: "50%" }}
				/>
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