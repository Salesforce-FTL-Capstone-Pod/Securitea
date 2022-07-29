import React from "react";
import {
	Modal,
	Button,
	Text,
	Input,
	Row,
	Checkbox,
	Spacer,
	createTheme,
	NextUIProvider,
} from "@nextui-org/react";
import { Mail } from "./Mail";
import { Password } from "./Password";
import { useLoginForm } from "../../hooks/useLoginForm";
import { Link } from "react-router-dom";
import * as color from "../../assets/colorPalette";

// 2. Call `createTheme` and pass your custom values
const theme = createTheme({
	type: "light", // it could be "light" or "dark"
	theme: {
		colors: {
			// brand colors
			primaryLight: color.languidLavender,
			primaryLightHover: color.blueBell,
			primaryLightActive: color.blueBell,
			primaryLightContrast: color.blueBell,
			primary: color.languidLavender,
			primaryBorder: "$green500",
			primaryBorderHover: "$green600",
			primarySolidHover: "$green700",
			primarySolidContrast: "$white",
			primaryShadow: "$green500",

			gradient:
				"linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)",
			link: "#5E1DAD",

			// you can also create your own color
			myColor: "#ff4ecd",

			// ...  more colors
		},
		space: {},
		fonts: {},
	},
});

export default function SignInModal({
	handler,
	visible,
	setVisible,
	handleOnInputChange,
	handleOnSubmit,
}) {
	const closeHandler = () => {
		setVisible(false);
	};
	console.log(visible);
	const submitForm = () => {
		handleOnSubmit();
		setVisible(false);
	};

	return (
		<NextUIProvider theme={theme}>
			<div>
				<Modal
					closeButton
					aria-labelledby="modal-title"
					open={visible}
					onClose={closeHandler}
				>
					<Modal.Header>
						<Text id="modal-title" size={18}>
							Sign into SecuriTEA
						</Text>
					</Modal.Header>
					<Modal.Body>
						<Input
							clearable
							bordered
							fullWidth
							color="primary"
							size="lg"
							type="email"
							name="email"
							onChange={handleOnInputChange}
							placeholder="Email"
							contentLeft={<Mail fill="currentColor" />}
						/>
						<Input
							clearable
							bordered
							fullWidth
							color="primary"
							size="lg"
							name="password"
							type="password"
							onChange={handleOnInputChange}
							placeholder="Password"
							contentLeft={<Password fill="currentColor" />}
						/>
						<Row justify="space-between">
							<Text size={14}>
								<Link to="/register">Don't have an account?</Link>
							</Text>
						</Row>
					</Modal.Body>
					<Modal.Footer>
						<Button auto flat color="error" onClick={closeHandler}>
							Close
						</Button>
						<Button auto onClick={submitForm}>
							Sign in
						</Button>
					</Modal.Footer>
				</Modal>
			</div>
		</NextUIProvider>
	);
}
