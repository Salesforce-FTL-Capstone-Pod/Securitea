import React from 'react'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { Modal, Button, Text, Input, Row, Checkbox, Switch } from "@nextui-org/react";
import { useState } from 'react'
function SettingsModal({ handler, visible, setVisible }) {
    const [checked, setChecked] = useState(false)
    const closeHandler = () => {
      setVisible(false);
    };

    function testCheck(){
        setChecked(!checked)
        console.log(checked)
    }
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
              Change your settings
            </Text>
          </Modal.Header>
          <Modal.Body>
            <Row justify='space-between'>
                <Text>Dark Mode </Text><Switch color="secondary" checked={checked} onChange={testCheck}/>
            </Row>
            <Row justify='space-between'>
                <Text>Some setting again </Text><Switch color="secondary" checked={true} />
            </Row>
            <Row justify='space-between'>
                <Text>Some other setting</Text><Switch color="secondary" checked={false} />
            </Row>
            <Row justify='space-between'>
                <Text>Some setting </Text><Switch color="secondary" checked={false} />
            </Row>
          </Modal.Body>
          <Modal.Footer>
          </Modal.Footer>
        </Modal>
      </div>
  )
}

export default SettingsModal