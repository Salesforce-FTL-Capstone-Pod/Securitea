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

import ScammerEmail from "../../assets/ScammerEmail.svg";
import ScammerEmailButton from "../../assets/ScammerEmailButton.svg";
import ScammerEmailPage from "../../assets/ScammerEmailPage.svg";
import Wrong from "../../assets/Wrong.svg";
import Right from "../../assets/Right.svg";
import dots from "../../assets/dots.svg";
import replyButton from "../../assets/replyButton.svg";
import Certificate from "../../assets/Certificate.jpg";

import { StyledBadge } from "../ManagerDashboard/EmployeeTable/StyledBadge";
import { Modal, Dropdown, Text, Button } from "@nextui-org/react";
import API from "../../services/apiClient";
import { useAuthContext } from "../../contexts/auth";

  import { saveAs } from "file-saver";

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
      <h1>Quiz 3</h1>
      <h2>What is going on :</h2>
      <p style={{ marginTop: "0vw" }}>
        - You have been sent an email by someone who claims your laptop will
        shut down, and in order for this to not happen, you password needs to be
        sent to them through a replied meessage.
      </p>
      <h2>What are you doing :</h2>
      <p style={{ marginTop: "0%" }}>
        - In order to complete this quiz you need to click on the unread email,
        read the content, and make the decision if this is a good email, or a
        phishing email
      </p>
      <p style={{marginTop:"-1%"}}>
        Your answer choices for this simulation consist of:
        <li style={{ fontWeight: "bold" }}>
          A reply button ={" "}
          <img src={replyButton} style={{ marginLeft: "1%", width: "6%" }} />
        </li>
        <li style={{ fontWeight: "bold" }}>
          A report button located on the dropdown menu =
          <img src={dots} style={{ marginLeft: "1%" }} />
        </li>
      </p>
      <p style={{ marginTop: "0%" }}>
        Click the NEXT button once the question is correctly answered
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
          {isStarted ? <EmailRender /> : null}
        </Container>
      </Container>
    </Container>
  );
}

function EmailRender() {
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
            src={ScammerEmailButton}
            style={{ display: "flex", height: "auto", width: "2%" }}
          />
        </Button>
      ) : null}
      {isClicked ? (
        <img src={ScammerEmail} style={{ width: "100%" }} />
      ) : (
        <img
          src={ScammerEmailPage}
          style={{ display: "flex", width: "100%" }}
        />
      )}
      {isClicked ? (
        <Button
          onClick={() => setVisible(!visible)}
          css={{
            position: "relative",
            left:"22%",
            bottom: "38%",
            width: "1%",
          }}
          style={{ background: "none" }}
        >
          <img src={replyButton} style={{ display: "flex", width: "60%" }} />
        </Button>
      ) : null}

      {isClicked ? (
        <Dropdown>
          <Dropdown.Button
            size="xs"
            color={color.platinum}
            style={{ position: "relative", left: "89.7%", bottom: "72%" }}
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
          <Text
            css={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <h1 style={{ fontSize: "200%", color: color.errorRed }}>
              Not Quite right
            </h1>
            <p>Woah there, this is not the way to go </p>
            <p style={{ fontWeight: "bold" }}>
              There are many signs this is a Phising email:
            </p>
            <Text css={{ marginTop: "-5%" }}>
              <p>- The subject of the email is very agressive </p>
              <p>- The email address is not a salesforce address </p>
              <p>- There are some grammer and spelling mistakes </p>
            </Text>
          </Text>
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
  const { user, setUser } = useAuthContext();

  const closeHandler = () => {
    setVisible(false);
  };

  const nextHandler = async () => {
    const respo = await API.addProgress("1");
    setUser({ ...user, refresh: true });
    delete user.refresh;
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
          <Text
            css={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <h1 style={{ fontSize: "200%", color: "green" }}>Good Job</h1>
            <p>
             This is your cup of tea. No one can catch you lacking!!!
            </p>
          </Text>
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onClick={closeHandler}>
            Close
          </Button>
          <Button auto flat color={color.languidLavender} onClick={nextHandler}>
            <Link to="/Sim3">Next</Link>
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
