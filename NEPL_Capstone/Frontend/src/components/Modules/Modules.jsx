import React from "react";
import {
	Card,
	Grid,
	Text,
	Button,
	Row,
	Spacer,
	Progress,
} from "@nextui-org/react";
import SignInModal from "../SignInModal/SignInModal";
import Navbar from "../Navbar/Navbar";
import { useLoginForm } from "../../hooks/useLoginForm";
import { Link } from "react-router-dom"

function Modules() {
	return (
		<div>
			<Navbar />
			<h1>Signed Out Module Card</h1>
			<ModuleCard />
			<br></br>
			<h1>Signed In Module Card</h1>
			<AuthModuleCard />
		</div>
	);
}


export default Modules;

function ModuleCard() {
	const { form, errors, isProcessing, handleOnInputChange, handleOnSubmit } =
		useLoginForm();
	const [visible, setVisible] = React.useState(false);
	const handler = () => setVisible(true);

	return (
		<Card isHoverable css={{ mw: "350px", bg: "$black" }}>
			<Card.Header css={{ textAlign: "center" }}>
				<Text css={{ textAlign: "center", color: "$white" }} size={30} b>
					{" "}
					Phishing{" "}
				</Text>
			</Card.Header>
			<Card.Divider />
			<Card.Body css={{ py: "$10" }}>
				<Text css={{ color: "$white" }}>
					Something about the module. Something about the module. Something
					about the module. Something about the module. Something about the
					module. Something about the module. Something about the module.
					Something about the module. Something about the module.
				</Text>
			</Card.Body>
			<Card.Divider />
			<Card.Footer>
				<Row justify="flex-end">
					<Button size="sm" bordered color="secondary">
						Learn More
					</Button>
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
		</Card>
	);
}

function AuthModuleCard() {
	return (
		<Card isHoverable css={{ mw: "350px", bg: "$black" }}>
			<Card.Header css={{ textAlign: "center" }}>
				<Text css={{ textAlign: "center", color: "$white" }} size={30} b>
					{" "}
					Phishing{" "}
				</Text>
			</Card.Header>
			<Card.Divider />
			<Card.Body css={{ py: "$10" }}>
				<Text css={{ color: "$white" }}>
					Something about the module. Something about the module. Something
					about the module. Something about the module. Something about the
					module. Something about the module. Something about the module.
					Something about the module. Something about the module.
				</Text>
				<Spacer></Spacer>
				<Progress color="primary" value={75} />
				<Text css={{ color: "$white" }}> 3/4 Simulations Complete</Text>
			</Card.Body>

			<Card.Divider />


    return(
        <Card isHoverable css={{ mw: "350px", bg: "$black" }}>
          <Card.Header css={{ textAlign: "center" }} >
            <Text css={{ textAlign: "center", color: "$white"}} size={30} b> Phishing </Text> 
          </Card.Header>
          <Card.Divider />
          <Card.Body css={{ py: "$10"}}>
            <Text css={{ color: "$white" }}>
              Something about the module. Something about the module.  Something about the module. 
              Something about the module. Something about the module. Something about the module. 
              Something about the module. Something about the module. Something about the module.  
            </Text>
          </Card.Body>
          <Card.Divider />
          <Card.Footer>
            <Row justify="flex-end">
					    <Button size="sm" bordered color="secondary">
						    Learn More
					    </Button>
					    <Spacer></Spacer>
					    <Button size="sm" color="secondary">
						    Continue
					    </Button>
				    </Row>
			    </Card.Footer>
          <SignInModal handler={handler} visible={visible} setVisible={setVisible} handleOnInputChange={handleOnInputChange} handleOnSubmit={handleOnSubmit} />
        </Card>
    );
}
