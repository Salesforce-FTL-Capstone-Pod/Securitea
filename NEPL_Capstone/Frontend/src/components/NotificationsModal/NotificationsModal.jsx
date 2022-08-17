import React from "react";
import {
	Modal,
	Button,
	Text,
	Input,
	Row,
	Checkbox,
	Switch,
	css,
    Card,
    Collapse,
    Spacer,
} from "@nextui-org/react";
import { useState } from "react";
import { useAuthContext } from "../../contexts/auth";
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { Link } from "react-router-dom"

function NotificationsModal({ handler, visible, setVisible }) {
	const { user } =  useAuthContext();
	const { mod1ping, mod2ping } = useAuthContext();
	const [checked, setChecked] = useState(false);
	const closeHandler = () => {
		setVisible(false);
	};
	return (
		<div>
			<Modal
				closeButton
				aria-labelledby="modal-title"
				open={visible}
				onClose={closeHandler}
			>
				<Modal.Header>
					<Text id="modal-title" size={20} weight="normal">
						Your Notifications
					</Text>
				</Modal.Header>
				<Modal.Body>
                {mod1ping || mod2ping ? <><Text css={{ textAlign: "center", marginBottom: "1vh"}} size={18} weight="normal">You were pinged to complete:</Text></> : <><Text css={{ textAlign: "center", marginBottom: "1vh"}} size={18} weight="normal">You have no notifications currently.</Text></>}
                <Collapse.Group bordered>
                    {mod1ping ? <><Collapse contentLeft={<ErrorOutlineIcon color="secondary" /> } title="Module 1: Phishing">
                        <Text>
                        You were pinged by your manager <b>{user.manager.split(",")[0]}</b> to complete this <Link to="/ModulePhishing">module.</Link>
                        </Text>
                    </Collapse></> : <></>}
                    {mod2ping ? <><Collapse contentLeft={<ErrorOutlineIcon color="secondary" /> } title="Module 2: Safety Tips">
                        <Text>
                        You were pinged by your manager <b>{user.manager.split(",")[0]}</b> to complete this <Link to="/ModuleTips">module.</Link>
                        </Text>
                    </Collapse></> : <></>}
                </Collapse.Group>
				</Modal.Body>
				<Modal.Footer></Modal.Footer>
			</Modal>
		</div>
	);
}

export default NotificationsModal;
