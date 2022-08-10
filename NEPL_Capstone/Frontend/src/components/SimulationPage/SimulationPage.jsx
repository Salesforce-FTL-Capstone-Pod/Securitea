import React from "react";
import {
  Button,
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

import Question from "../../assets/Question.svg";
import EmailSim from "../../assets/EmailSim.svg";
import PhishingImg from "../../assets/PhishingImg.svg";
import EmailButton from "../../assets/EmailButton.svg";
import LinkButton from "../../assets/LinkButton.svg";
import Wrong from "../../assets/Wrong.svg";
import ReportButton from "../../assets/ReportButton.svg";
import RightCard from "../../assets/RightCard.svg";
import dots from "../../assets/dots.svg";

import { StyledBadge } from "../ManagerDashboard/EmployeeTable/StyledBadge";
import {
  Modal,
  Dropdown,
  Text,
} from "@nextui-org/react";

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
        height: "125vh",
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
          position: "relative",
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

          <img
            src={Question}
            style={{
              position: "absolute",
              width: "2vw",
              bottom: "2%",
              right: "5%",
            }}
          />
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
    const handler = () => setVisible(true);
  return (
    <Container>
      <Button
        onClick={() => setIsClicked(!isClicked)}
        style={{ width: "76.4%", background: "none" }}
        sx={{
          position: "relative",
          top: " 25.5%",
          left: "11.2%",
        }}
      >
        {!isClicked ? (
          <img src={EmailButton} style={{ display: "flex", width: "100%" }} />
        ) : null}
      </Button>
      {isClicked ? (
        <img src={PhishingImg} style={{ width: "100%" }} />
      ) : (
        <img src={EmailSim} style={{ display: "flex", width: "100%" }} />
      )}
      <Button
        onClick={() => setVisible(!visible)}
        sx={{
          position: "relative",
          bottom: "44.5%",
          left: "8%",
          width: "28%",
        }}
        style={{ background: "none" }}
      >
        {isClicked ? (
          <img src={LinkButton} style={{ display: "flex", size: "100%" }} />
        ) : null}
      </Button>
      <Button
        onClick={() => setIsToggled(!isToggled)}
        style={{ background: "none" }}
        sx={{
          position: "relative",
          bottom: "68.4%",
          left: "29%",
          width: "1%",
        }}
      >
        {isClicked ? (
          <RightAnswer
            handler={handler}
            visible={visible}
            setVisible={setVisible}
          />
        ) : null}
      </Button>
      {/* {isClicked ? (
        isToggled ? (
          <Button
            onClick={() => setIsRight(!isRight)}
            style={{
              position: "absolute",
              bottom: "64%",
              left: "86%",
              width: "5%",
            }}
          >
            <img src={ReportButton} style={{ width: "100%" }} />
            {isRight ? <img src={RightCard} /> : null}
          </Button> */}
        {/* ) : null
      ) : null} */}
      <WrongPopUp
        handler={handler}
        visible={visible}
        setVisible={setVisible}
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
       css={{display: 'flex', justifyContent: 'center'}}
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
          <Button>Next</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
function RightAnswer(){
  const [report, setReport] = useState(false);
  return (
    <Dropdown>
      <Dropdown.Button size="xs" css={{ position: "relative", top: "22%" }}>
        <img
          src={dots}
          style={{ display: "flex", fontSize: "100%", width: "100%" }}
        />
      </Dropdown.Button>
      <Dropdown.Menu aria-label="Static Actions">
        <Dropdown.Item onClick={() => setReport(!report)} key="new">
          Report
        </Dropdown.Item>
        {report ? (
          <img src={RightCard} style={{ display: "flex", size: "100%" }} />
        ) : null}
      </Dropdown.Menu>
    </Dropdown>
  );
}