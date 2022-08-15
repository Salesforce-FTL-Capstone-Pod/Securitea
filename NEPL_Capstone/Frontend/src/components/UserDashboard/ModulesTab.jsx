import React from "react";
import {
	Container as NextContainer,
	Card,
	Row,
	Text,
	Table,
	Spacer,
	Progress,
	Button,
	Checkbox,
	Textarea,
	Loading,
	Avatar,
	Grid,
} from "@nextui-org/react";
import { useProgressContext } from "../../contexts/progress";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function ModulesTab() {
	const descriptionPhishing = `Phishing is a type of social engineering where an attacker send s a
  fradulent message designed to trick a person into revealing sensitive
  information to the attacker or to deploy malicious software on the
  victim's machine.`;
	const descriptionTips = `In this module you will find basic tips on how to keep your data and
  your companies data safe and secure on the internet! Using these tips
  will make it easier for you to keep your and your companies data
  private and secure!`;
	const progress = useProgressContext();
	const progressVal = progress || 0;
	const oneDone = progressVal.percentOne === 100;
	const twoDone = progressVal.percentTwo === 100;
	const navigate = useNavigate();
	const handleContinuePhish = () => {
		if (progress?.progress?.progress["1"].progress === 0) {
			navigate("/modules/demo");
		} else if (progress?.progress?.progress["1"].progress === 1) {
			navigate("../Sim2");
		} else if (progress?.progress?.progress["1"].progress === 2) {
			navigate("../Sim3");
		}
	};
	const handleContinueTips = () => {
		if (progress?.progress?.progress["2"].progress === 0) {
			navigate("/modules/tips");
		} else if (progress?.progress?.progress["2"].progress === 1) {
			navigate("../PasswordPage");
		}
	};

	return (
		<>
			<Grid>
				<ModuleDisplay
					oneDone={oneDone}
					twoDone={twoDone}
					progressVal={progressVal}
					descriptionPhishing={descriptionPhishing}
					descriptionTips={descriptionTips}
					continueHandlerPhish={handleContinuePhish}
					continueHandlerTips={handleContinueTips}
				/>
			</Grid>
			<Grid>
				<ModulesComplete
					oneDone={oneDone}
					twoDone={twoDone}
					progressVal={progressVal}
					descriptionPhishing={descriptionPhishing}
					descriptionTips={descriptionTips}
					continueHandlerPhish={handleContinuePhish}
					continueHandlerTips={handleContinueTips}
				/>
			</Grid>
		</>
	);
}

export function ModuleDisplay({
	oneDone,
	twoDone,
	progressVal,
	descriptionPhishing,
	descriptionTips,
	continueHandlerPhish,
	continueHandlerTips,
}) {
	return (
		<NextContainer fluid>
			<Text h1 b>
				My Modules
			</Text>
			<Grid.Container gap={2}>
				{!oneDone ? (
					<Grid>
						<AuthModuleCard
							moduleName="Phishing"
							progressPercent={progressVal?.percentOne}
							progress={progressVal?.progress?.progress["1"]}
							description={descriptionPhishing}
							continueHandler={continueHandlerPhish}
						/>
					</Grid>
				) : null}
				{!twoDone ? (
					<Grid>
						<AuthModuleCard
							moduleName="Internet Safety Tips"
							progressPercent={progressVal?.percentTwo}
							progress={progressVal?.progress?.progress["2"]}
							description={descriptionTips}
							continueHandler={continueHandlerTips}
						/>
					</Grid>
				) : null}
			</Grid.Container>
		</NextContainer>
	);
}

function ModulesComplete({
	oneDone,
	twoDone,
	progressVal,
	descriptionPhishing,
	descriptionTips,
	continueHandlerPhish,
	continueHandlerTips,
}) {
	return (
		<NextContainer fluid>
			<Text h1 b>
				Modules completed
			</Text>
			<Grid.Container gap={2}>
				{oneDone ? (
					<Grid>
						<AuthModuleCard
							moduleName="Phishing"
							progressPercent={progressVal?.percentOne}
							progress={progressVal?.progress?.progress["1"]}
							description={descriptionPhishing}
							continueHandler={continueHandlerPhish}
						/>
					</Grid>
				) : null}
				{twoDone ? (
					<Grid>
						<AuthModuleCard
							moduleName="Internet Safety Tips"
							progressPercent={progressVal?.percentTwo}
							progress={progressVal?.progress?.progress["2"]}
							description={descriptionTips}
							continueHandler={continueHandlerTips}
						/>
					</Grid>
				) : null}
				{!twoDone && !oneDone ? (
					<>
						<Grid>
							<Text>None completed yet.</Text>
						</Grid>
					</>
				) : (
					<></>
				)}
			</Grid.Container>
		</NextContainer>
	);
}

function AuthModuleCard({
	moduleName,
	progress,
	progressPercent,
	description,
	continueHandler,
}) {
	return (
		<Card isHoverable css={{ mw: "350px", bg: "$black" }}>
			<Card.Header css={{ textAlign: "center" }}>
				<Text css={{ textAlign: "center", color: "$white" }} size={30} b>
					{moduleName}
				</Text>
			</Card.Header>
			<Card.Divider />
			<Card.Body css={{ py: "$10" }}>
				<Text css={{ color: "$white" }}>{description}</Text>
				<Spacer></Spacer>
				<Progress color="gradient" value={progressPercent} />
				<Text css={{ color: "$white" }}>
					{progress?.progress}/{progress?.steps} Steps Complete
				</Text>
			</Card.Body>

			<Card.Divider />

			<Card.Footer>
				<Row justify="flex-end">
					<Button size="sm" bordered color="secondary">
						Learn More
					</Button>
					<Spacer></Spacer>]
					<Button size="sm" color="secondary" onClick={continueHandler}>
						Continue
					</Button>
				</Row>
			</Card.Footer>
		</Card>
	);
}

export default ModulesTab;
