import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
	Dropdown,
	Grid,
	Card,
	Row,
	Button,
	Spacer,
	Text,
	Container,
	Modal,
	User,
	Table,
	Loading,
	Progress,
} from "@nextui-org/react";
import apiClient from "../../../services/apiClient";
import { Tayble } from "../EmployeeDisplay/EmployeeDisplay";
function AssignedModules({ employees, valid, logo }) {
	return (
		<>
			<Grid>
				<Display employees={employees} valid={valid} logo={logo} />
			</Grid>
		</>
	);
}

export default AssignedModules;

export function AssignDropdown({ employees, valid, logo, moduleId }) {
	const [visible, setVisible] = React.useState(false);
	const [selectedTab, setselectedTab] = useState("");
	const [selectAll, setselectAll] = useState(false);
	function setTab(e) {
		setselectedTab(e.currentKey);
		if (e.currentKey == "assignAll") {
			setVisible(true);
		}
		if (e.currentKey == "selectAssign" && employees !== null) {
			setselectAll(true);
		}
	}
	return (
		<>
			<Dropdown>
				<Dropdown.Button color="secondary" flat>
					Assign Module
				</Dropdown.Button>
				<Dropdown.Menu
					disabledKeys={[]}
					aria-label="AssignDropdown"
					selectionMode="single"
					onSelectionChange={(e) => setTab(e)}
				>
					<Dropdown.Item key="assignAll">
						<Text>Assign to All Employees</Text>
					</Dropdown.Item>
					<Dropdown.Item key="selectAssign">
						<Text>Select Employees to Assign</Text>
					</Dropdown.Item>
					<Dropdown.Item key="4" withDivider color="error">
						Exit
					</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
			<ConfirmModal
				visible={visible}
				setVisible={setVisible}
				moduleId={moduleId}
			/>
			<SelectionModal
				visible={selectAll}
				setVisible={setselectAll}
				employees={employees}
				valid={valid}
				logo={logo}
				moduleId={moduleId}
			/>
		</>
	);
}

function Display({ employees, valid, logo }) {
	return (
		<Container fluid>
			<Text h2 weight="normal">
				Modules Assigned
			</Text>
			<Grid.Container gap={2}>
				<Grid>
					<ModuleCard
						moduleName="Phishing"
						moduleId={1}
						employees={employees}
						valid={valid}
						logo={logo}
					/>
				</Grid>
				<Grid>
					<ModuleCard
						moduleName="Internet Safety Tips"
						moduleId={2}
						employees={employees}
						valid={valid}
						logo={logo}
					/>
				</Grid>
			</Grid.Container>
		</Container>
	);
}

function ModuleCard({ moduleName, employees, valid, logo, moduleId }) {
	return (
		<Card isHoverable css={{ mw: "350px", bg: "$colors$medpurple" }}>
			<Card.Header css={{ textAlign: "center" }}>
				<Text css={{ textAlign: "center", color: "$colors$black" }} size={30} b>
					{moduleName}
				</Text>
			</Card.Header>
			<Card.Divider />
			<Card.Body css={{ py: "$10" }}>
				<Text css={{ color: "$colors$black" }}>
					Something about the module. Something about the module. Something
					about the module. Something about the module. Something about the
					module. Something about the module. Something about the module.
					Something about the module. Something about the module.
				</Text>
				<Spacer></Spacer>
			</Card.Body>

			<Card.Divider />

			<Card.Footer>
				<Row justify="flex-end">
					<AssignDropdown
						employees={employees}
						valid={valid}
						logo={logo}
						moduleId={moduleId}
					/>
				</Row>
			</Card.Footer>
		</Card>
	);
}

function ConfirmModal({ visible, setVisible, moduleId }) {
	const delay = (ms) => new Promise((res) => setTimeout(res, ms));

	const [loading, setLoading] = useState(false);
	const [confirmation, setConfirmation] = useState(false);
	const closeHandler = () => {
		setVisible(false);
	};

	const pressed = (e, moduleId) => {
		if (e == "cancel") {
			setVisible(false);
		}
		if (e == "confirm") {
			async function ping() {
				setLoading(true);
				const res = await apiClient.pingAllEmployees(moduleId);
				await delay(2000);
				setLoading(false);
				setConfirmation(true);
			}
			ping();
		}
	};

	return (
		<div>
			<Modal
				closeButton
				aria-labelledby="modal-title"
				open={visible}
				onClose={closeHandler}
			>
				<Modal.Body>
					{loading == false && confirmation == false ? (
						<>
							<Row justify="center" align="center">
								<Text b>Confirm Action</Text>
							</Row>
							<Row>
								<Text css={{ textAlign: "center" }}>
									Are you sure you want assign this module to all your
									employees? By doing this, they will receieve a notification to
									complete the module by a certain time.
								</Text>
							</Row>
							<Row justify="space-between" align="center">
								<Button
									auto
									color="error"
									key="cancel"
									onClick={() => pressed("cancel", moduleId)}
								>
									Cancel
								</Button>
								<Button
									auto
									css={{ background: "green" }}
									key="confirm"
									onClick={() => pressed("confirm", moduleId)}
								>
									Confirm
								</Button>
							</Row>
						</>
					) : (
						<>
							{confirmation == true ? (
								<></>
							) : (
								<Loading>Pinging all employees</Loading>
							)}
						</>
					)}
					{confirmation == true && loading == false ? (
						<>
							<Row justify="center" align="center">
								<Text css={{ marginBottom: "0vh" }} b>
									All employees were successfully pinged!
								</Text>
							</Row>
						</>
					) : (
						<></>
					)}
				</Modal.Body>
				<Modal.Footer></Modal.Footer>
			</Modal>
		</div>
	);
}

function SelectionModal({
	visible,
	setVisible,
	employees,
	valid,
	logo,
	moduleId,
}) {
	const [selectedEmployee, setselectedEmployee] = useState([]);
	const [loading, setLoading] = useState(false);
	const [confirmation, setConfirmation] = useState(false);
	const delay = (ms) => new Promise((res) => setTimeout(res, ms));

	const closeHandler = () => {
		setVisible(false);
	};

	const pingEmployees = async (selectedEmployee) => {
		setLoading(true);
		async function pingEmployee(employee, modules) {
			const res = await apiClient.pingEmployee(employee, modules);
		}

		for (const employees in selectedEmployee){
			const employeeArr = selectedEmployee[employees].split(",")
			pingEmployee(employeeArr[0], employeeArr[1])
		}
		await delay(2000);
		setLoading(false);
		setConfirmation(true);
	};

	return (
		<>
			{loading == false && confirmation == false ? (
				<>
					<Modal
						closeButton
						scroll={false}
						aria-labelledby="selection-modal"
						open={visible}
						onClose={closeHandler}
						css={{ marginLeft: "-30vh", minWidth: "100vh" }}
					>
						<Modal.Header>
							<Text size={20}>
								Select Employees to Ping for Module -{" "}
								<b>
									{moduleId == 1 ? <>Phishing</> : <>Internet Safety Tips</>}
								</b>
							</Text>
						</Modal.Header>
						<Modal.Body css={{ minWidth: "100vh", marginTop: "-2vh" }}>
							<EmployeeSelection
								employees={employees}
								valid={true}
								logo={logo}
								showBox={true}
								moduleId={moduleId}
								setselectedEmployee={setselectedEmployee}
							/>
						</Modal.Body>
						<Modal.Footer justify="center">
							<Button
								color="gradient"
								onClick={() => pingEmployees(selectedEmployee)}
							>
								Send Pings
							</Button>
						</Modal.Footer>
					</Modal>
				</>
			) : (
				<>
					{confirmation == true ? (
						<></>
					) : (
						<Modal
							closeButton
							scroll={false}
							aria-labelledby="selection-modal"
							open={visible}
							onClose={closeHandler}
							css={{ minWidth: "50vh" }}
						>
							<Modal.Header></Modal.Header>
							<Text size={20} weight="normal">
								Sending Request
							</Text>
							<Spacer></Spacer>
							<Container>
								<Progress
									indeterminated
									value={50}
									color="secondary"
									status="secondary"
								/>
							</Container>
							<Modal.Footer></Modal.Footer>
						</Modal>
					)}
				</>
			)}
			{confirmation == true && loading == false ? (
				<>
					<Modal
						closeButton
						scroll={false}
						aria-labelledby="selection-modal"
						open={visible}
						onClose={closeHandler}
						css={{ minWidth: "50vh" }}
					>
						<Modal.Header></Modal.Header>
						<Row justify="center" align="center">
							<Text css={{ marginBottom: "0vh" }} b>
								All employees were successfully pinged!
							</Text>
						</Row>
						<Modal.Footer></Modal.Footer>
					</Modal>
				</>
			) : (
				<></>
			)}
		</>
	);
}

export function EmployeeSelection({
	employees,
	valid,
	logo,
	showBox,
	moduleId,
	setselectedEmployee,
}) {
	const columns = [
		{
			key: "name",
			label: "NAME",
		},
		{
			key: "email",
			label: "EMAIL",
		},
		{
			key: "status",
			label: "PING STATUS",
		},
	];
	const rows = [];
	if (valid == true) {
		for (const employee in employees.info.podProgress) {
			let pingStatus = "Not Pinged";
			if (employees.info.podProgress[employee].wasPinged.waspinged == true) {
				pingStatus = "Pinged";
			}
			rows.push({
				key: employee,
				progress: employees.info.podProgress[employee],
				name: (
					<User
						bordered
						color="success"
						src={logo}
						name={employees.info.podProgress[employee].name}
						css={{ p: 0 }}
					></User>
				),
				email: employees.info.podProgress[employee].email,
				status: pingStatus,
			});
		}
	}
	const [visible, setVisible] = useState(false);

	//Spread of Module and Email Pair
	function employeeSelect(e) {
		setselectedEmployee([...e]);
	}

	return (
		<>
			<Table
				aria-label="Example table with dynamic content"
				css={{
					height: "auto",
					minWidth: "90vh",
					background: "white",
				}}
				selectionMode="multiple"
				onSelectionChange={(e) => employeeSelect(e)}
				showSelectionCheckboxes={showBox}
			>
				<Table.Header columns={columns}>
					{(column) => (
						<Table.Column key={column.key}>{column.label}</Table.Column>
					)}
				</Table.Header>
				<Table.Body items={rows}>
					{(item) => (
						<Table.Row key={[item.email, moduleId]}>
							{(columnKey) => <Table.Cell>{item[columnKey]}</Table.Cell>}
						</Table.Row>
					)}
				</Table.Body>
			</Table>
		</>
	);
}
