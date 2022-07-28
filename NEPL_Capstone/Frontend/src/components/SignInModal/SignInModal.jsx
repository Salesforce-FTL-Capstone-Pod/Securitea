import React from "react";
import { Modal, Button, Text, Input, Row, Checkbox, Spacer } from "@nextui-org/react";
import { Mail } from "./Mail";
import { Password } from "./Password";
import { useLoginForm } from "../../hooks/useLoginForm"
import { Link } from 'react-router-dom';

export default function SignInModal({ handler, closeHandler, submitForm, visible, setVisible, handleOnInputChange }) {
  return (
    <div>
      <Modal
        closeButton
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Sign into NEPL
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
            <Text size={14}><Link to="/register">Don't have an account?</Link></Text>
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
  );
}
