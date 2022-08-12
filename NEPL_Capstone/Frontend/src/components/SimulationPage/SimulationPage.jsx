import React from "react";
import {
  Grid,
  Container,
  Box,
  AppBar,
  Toolbar,
  Typography,
  Stack,
  colors,
  TextareaAutosize,
} from "@mui/material";
import * as color from "../../assets/colorPalette";
import { Link, renderMatches } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { useState } from "react";

import RealEmailPage from "../../assets/RealEmail.svg";
import RealEmail from "../../assets/PhishingImg.svg";
import RealEmailButton from "../../assets/RealEmailButton.svg";
import Wrong from "../../assets/Wrong.svg";
import Right from "../../assets/Right.svg";
import dots from "../../assets/dots.svg";
import YesButton from "../../assets/YesButton.svg";

import { StyledBadge } from "../ManagerDashboard/EmployeeTable/StyledBadge";
import { Modal, Dropdown, Text, Button } from "@nextui-org/react";

export default function SimulationPage() {
  return (
    <>
      <Navbar />
      <Simulation />
      <Footer />
    </>
  );
}

function Simulation() {
  const [isStarted, setIsStarted] = useState(false);
  return (
    <Container
      maxWidth={false}
      style={{
        display: "flex ",
        flexDirection: "column",
        backgroundColor: color.platinum,
        height: "145vh",
        width: "75%",
        marginTop: "100px",
        marginBottom: "100px",
      }}
    >
      <h1>Email Phishing</h1>
      <Container style={{ display: "flex", flexDirection: "row" }}>
        <Container sx={{ margin: "0" }}>
          <p style={{ fontWeight: "bold", color: "green" }}>Do's</p>
          <li>something</li>
          <li>something</li>
          <li>something</li>
        </Container>
        <Container style={{ marginLeft: "0vw" }}>
          <p style={{ fontWeight: "bold", color: "red" }}>Don'ts</p>
          <li>something</li>
          <li>something</li>
          <li>something</li>
        </Container>
      </Container>
      <p>What you wil be doing :</p>
      <p style={{ marginTop: "0vw" }}>
        SOMETHING SOMETHINGSOMETHING SOMETHINGSOMETHING SOMETHINGSOMETHING
        SOMETSOMETHING SOMETHINGSOMETHING SOMETHINGSOMETHING SOMETHINGSOMETHING
        SOMETSOMETHING SOMETHINGSOMETHING SOMETHINGSOMETHING SOMETHINGSOMETHING
        SOMET
      </p>
      <Container
        maxWidth={false}
        sx={{
          display: "flex",
          backgroundColor: color.languidLavender,
          height: "89vh",
          borderRadius: "2vw",
          width: "100%",
        }}
      >
        <Container
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            alignItems: "center",
            height: "86vh",
          }}
        >
          {!isStarted ? (
            <Button
              style={{
                display: "flex",
                backgroundColor: "black",
                color: "white",
                height: "6vh",
                width: "7vw",
                borderLeft: "4px solid white",
                borderBottom: "4px solid white",
              }}
              onClick={() => {
                setIsStarted(!isStarted);
              }}
            >
              Start Simulation
            </Button>
          ) : null}
          {isStarted ? <RealEmail2 /> : null}
        </Container>
      </Container>
    </Container>
  );
}

function RealEmail2() {
  const [isClicked, setIsClicked] = useState(false);
  const [isRight, setIsRight] = useState(false);
  const [isWrong, setIsWrong] = useState(false);
  const [isToggled, setIsToggled] = useState(false);
  const [visible, setVisible] = React.useState(false);
  const [visible2, setVisible2] = React.useState(false);
  const handler = () => setVisible(true);
  return (
    <Container>
      {!isClicked ? (
        <Button
          onClick={() => setIsClicked(!isClicked)}
          css={{
            position: "relative",
            top: "26.4%",
            left: "16.2%",
            background: "none",
            width: "90%",
          }}
          size="xl"
        >
          <img
            src={RealEmailButton}
            style={{ display: "flex", height: "auto", width: "2%" }}
          />
        </Button>
      ) : null}
      {isClicked ? (
        <img src={RealEmail} style={{ width: "100%" }} />
      ) : (
        <img src={RealEmailPage} style={{ display: "flex", width: "100%" }} />
      )}
      {isClicked ? (
        <Button
          onClick={() => setVisible(!visible)}
          css={{
            position: "relative",
            bottom: "46%",
            left: "40%",
            width: "30%",
          }}
          style={{ background: "none" }}
        >
          <img src={YesButton} style={{ display: "flex", size: "100%" }} />
        </Button>
      ) : null}

      {isClicked ? (
        <Dropdown>
          <Dropdown.Button
            size="xs"
            color={color.platinum}
            style={{ position: "relative", left: "94%", bottom: "72.2%" }}
          >
            <img src={dots} style={{ display: "flex" }} />
          </Dropdown.Button>
          <Dropdown.Menu aria-label="Static Actions">
            <Dropdown.Item>
              <Button
                auto
                color="transparent"
                onClick={() => setVisible2(true)}
                css={{ width: "100%", background: "none" }}
              >
                Report
              </Button>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      ) : null}

      <WrongPopUp
        handler={handler}
        visible={visible}
        setVisible={setVisible}
        style={{ width: "10%" }}
      />
      <RightAnswer
        handler={handler}
        visible={visible2}
        setVisible={setVisible2}
        style={{ width: "10%" }}
      />
    </Container>
  );
}

function WrongPopUp({ handler, visible, setVisible }) {
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
        width="35%"
        css={{ display: "flex", justifyContent: "center" }}
      >
        <Modal.Header></Modal.Header>
        <Modal.Body>
          <img
            src={Wrong}
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onClick={closeHandler}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
function RightAnswer({ handler, visible, setVisible }) {
  const closeHandler = () => {
    setVisible(false);
    console.log(".log");
  };
  return (
    <div>
      <Modal
        closeButton
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
        width="35%"
        css={{ display: "flex", justifyContent: "center" }}
      >
        <Modal.Header></Modal.Header>
        <Modal.Body>
          <img
            src={Right}
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onClick={closeHandler}>
            Close
          </Button>
          <Button auto flat color={color.languidLavender}>
            Next
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
