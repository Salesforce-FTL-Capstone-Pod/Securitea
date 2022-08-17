import React from "react";
import {
  Container
} from "@mui/material";
import * as color from "../../assets/colorPalette";
import { Link, renderMatches } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { useState } from "react";


import RealEmailPage from "../../assets/RealEmailPage.svg";
import RealEmail from "../../assets/RealEmail.svg";
import EmailButton from "../../assets/EmailButton.svg";
import LinkButton from "../../assets/LinkButton.svg";
import Wrong from "../../assets/Wrong.svg";
import Right from "../../assets/Right.svg";
import dots from "../../assets/dots.svg";
import YesButton from "../../assets/yesButton.svg";

import { StyledBadge } from "../ManagerDashboard/EmployeeTable/StyledBadge";
import { Modal, Dropdown } from "@nextui-org/react";
import API from "../../services/apiClient";
import { useAuthContext } from "../../contexts/auth";

import { Text, Button, Progress, Collapse, Row, Grid, Card, Container as NextContainer } from "@nextui-org/react"
import backgroundImg from '../../assets/SecuriTEA-bg2.svg'


const sizeBox = "65vw";

export default function SimulationPage() {
	return (
		<>
		<Navbar />
		<Container maxWidth={false} disableGutters sx={{ minWidth: "100vh", minHeight: "100vh", backgroundImage: `url(${backgroundImg})`}}>
			<Overview />
			<Content />
		</Container>
		<Footer />
		</>
	);
}



function Overview() {
	return (
	  <Container
		maxWidth={false}
		disableGutters
		sx={{
		  backgroundColor: color.richBlackFogra,
		  display: "flex",
		  justifyContent: "center",
	  }}
	  >
		<Container
		  style={{ marginBottom: "2vw", marginTop: "1vw", width: sizeBox }}
		>
			<Text h3 weight="light" css={{ color: "$colors$platinum", marginBottom: "0vw"}}><Link style={{ color: '#FFF'}} to="/ModulePhishing">Module: Phishing</Link></Text>
			<Text h1 css={{ color: "$colors$platinum", marginTop: "-0.5vw", marginBottom: "0vw"}}>Email Simulation</Text>
		</Container>
	  </Container>
	);
  }


function Content() {
	return (
	  <Container sx={{ display: "flex", minHeight: "100vh", marginBottom: "10vh"}} disableGutters>
		<Container>
            <Simulation />
	    </Container>
	  </Container>
)
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
        marginTop: "50px",
      }}
    >
      <h1>Quiz 2</h1>
      <h2>What is going on :</h2>
      <p style={{ marginTop: "0vw" }}>
        - You have been sent an email invitation to a google meet to prep for
        Demo Day
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
          A button that accepts invite ={" "}
          <img src={YesButton} style={{ marginLeft: "1%", width: "6%" }} />
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
            src={EmailButton}
            style={{ display: "flex", height: "auto", width: "2%" }}
          />
        </Button>
      ) : null}
      {isClicked ? (
        <img src={RealEmail} style={{ width: "100%", display: "flex",}} />
      ) : (
        <img src={RealEmailPage} style={{ display: "flex", width: "100%" }} />
      )}
      {isClicked ? (
        <Button
      
          size="xxs"
          onClick={() => setVisible(!visible)}
          style={{
            display:"flex",
            background: "none",
            // position: "relative",
            left: "30%",
            bottom: "48.9%",
          }}
        >
          <img src={YesButton} style={{ display: "flex", width: "55.2%" }} />
        </Button>
      ) : null}

      {isClicked ? (
        <Dropdown>
          <Dropdown.Button
            size="xs"
            color={color.platinum}
            style={{ position: "relative", left: "89.7%", bottom: "71.5%" }}
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

      <RightAnswer
        handler={handler}
        visible={visible}
        setVisible={setVisible}
        style={{ width: "10%" }}
      />
      <WrongPopUp
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
            <p>There is nothing wrong with this email, please try again</p>
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
            <p>YOU GOT IT!!</p>
            <p>
              There is nothing wrong with this email. The individual sending the
              email has the correct salesforce email address and other keen
              detials such as specificity of the email make this legit. ✅
            </p>
          </Text>
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color={color.languidLavender} onClick={nextHandler}>
            <Link to="/Sim3">Next</Link>
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
