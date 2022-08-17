import React from "react";
import {
  Button,
  Container,
  Radio,
  FormControlLabel,
  FormControl,
  RadioGroup,
  Typography,
} from "@mui/material";
import {
  Text,
  Progress,
  Collapse,
  Row,
  Grid,
  Card,
  Spacer,
  Container as NextContainer,
} from "@nextui-org/react";
import { Modal } from "@nextui-org/react";
import Right from "../../assets/Right.svg";
import Wrong from "../../assets/Wrong.svg";
import * as color from "../../assets/colorPalette";
import { useAuthContext } from "../../contexts/auth";
import API from "../../services/apiClient";
import backgroundImg from "../../assets/SecuriTEA-bg2.svg";

import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import ControlContainer from "../ControlContainer/ControlContainer";
import OutputContainer from "../OutputContainer/OutputContainer";
import { Link, useNavigate } from "react-router-dom";

import {
  canPlayAudioFormat,
  getSearchParams,
} from "../../../../Backend/utils/ttsUtils";
import { useLoginForm } from "../../hooks/useLoginForm";
import right from "../../assets/right.png";
import wrong from "../../assets/wrong.png";

import { useState, useRef } from "react";
import { Box } from "@mui/system";

export default function TipsPage() {
  return (
    <>
      <Navbar />
      <InternetTips />
      <Footer />
    </>
  );
}

export function InternetTips({ progressPercent, progress }) {
  const sizeBox = "65vw";
  const { form, errors, isProcessing, handleOnInputChange, handleOnSubmit } =
    useLoginForm();

  const [isRight, setIsRight] = useState();

  const [answer, setAnswer] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const navigate = useNavigate();
  const [visible, setVisible] = React.useState(false);
  const [visible2, setVisible2] = React.useState(false);
  const handler = () => setVisible(true);

  const tipsText =
    "Internet Tips. The best way to keep your companies and your personal data secure is by  following these tips :. Do not step away from your workstation without locking it. Make sure websites you visit have 'https and a lock beside it. NEVER open weird or out of the ordinary links and attachments. Create strong passwords with help from the next module!";

  function handleSubmit() {
    if (answer === "right") {
      setIsRight(true);
      setVisible2(true);
      setVisible(false);
      setSuccessMessage("");
    } else if (answer === "wrong") {
      setIsRight(false);
      setVisible2(false);
      setVisible(true);
      setSuccessMessage("Try Again!");
    }
  }

  //Text-To-Speech functions
  let audioElementRef = useRef(null);

  const getSynthesizeUrl = (text, voice) => {
    try {
      const params = getSearchParams();

      params.set("text", text);
      params.set("voice", voice.id);

      let accept;
      if (canPlayAudioFormat("audio/mp3", audioElementRef.current)) {
        accept = "audio/mp3";
      } else if (
        canPlayAudioFormat("audio/ogg;codec=opus", audioElementRef.current)
      ) {
        accept = "audio/ogg;codec=opus";
      } else if (canPlayAudioFormat("audio/wav", audioElementRef.current)) {
        accept = "audio/wav";
      }
      if (accept) {
        params.set("accept", accept);
      }

      //CHANGE LOCAL HOST
      console.log(params.toString());
      return `http://localhost:3001/tts/api/synthesize?${params.toString()}`;
    } catch (err) {}
  };

  const onSynthesize = async (text, voice) => {
    try {
      audioElementRef.current.setAttribute(
        "src",
        getSynthesizeUrl(text, voice)
      );

      await audioElementRef.current.play();
    } catch (err) {}
  };

  return (
    <>
      <Container
        maxWidth={false}
        disableGutters
        sx={{
          minWidth: "100vh",
          minHeight: "100vh",
          backgroundImage: `url(${backgroundImg})`,
        }}
      >
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
            maxWidth={false}
            style={{
              marginBottom: "4vw",
              marginTop: "1vw",

              width: "77.1%",
            }}
          >
            <Text
              h3
              weight="light"
              css={{
                color: color.platinum,
                marginBottom: "0vw",
              }}
            >
              Module
            </Text>
            <Text
              h1
              css={{
                color: color.platinum,
                marginTop: "-0.5vw",
                marginBottom: "0vw",
              }}
            >
              INTERNET SAFETY TIPS
            </Text>

            <Text
              h3
              css={{
                color: color.platinum,
                marginTop: "1vw",
                marginBottom: "1vw",
              }}
              weight="light"
            >
              Learn how to protect yourself on the internet!
            </Text>
          </Container>
        </Container>

        {/* DROPDOWN */}

        <CurrUnit />
        <Container
          maxWidth={false}
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Card
            maxWidth={false}
            style={{
              display: "flex ",
              backgroundColor: color.platinum,
              height: "100%",
              width: "74.3%",
              marginTop: "100px",
              borderRadius: "15px 15px 0px 0px",
            }}
          >
            <ControlContainer
              onSynthesize={onSynthesize}
              inputText={tipsText}
            />
            <OutputContainer audioElementRef={audioElementRef} />
          </Card>
        </Container>

        <Container
          maxWidth={false}
          style={{
            width: "75%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Card
            maxWidth={false}
            style={{
              display: "flex ",
              flexDirection: "column",
              backgroundColor: color.platinum,
              height: "100%",
              borderRadius: "0px 0px 15px 15px",
              marginBottom: "100px",
            }}
            className="service-container"
          >
            {/* FIX THIS  */}

            <Text h2>How can you stay safe on the internet?</Text>
            <Text h3>
              Following these simple tips will better your chances of staying
              safe online!
            </Text>
            <Container
              maxWidth={false}
              style={{
                display: "flex",
                width: "100%",
                marginLeft: "-1.8vh",
                marginTop: "-3vh",
              }}
            >
              <Row gap={1}>
                <Collapse css={{ width: "25%" }} shadow title="Tip 1">
                  Do not step away from your workstation without locking it
                </Collapse>
                <Spacer></Spacer>
                <Collapse css={{ width: "25%" }} shadow title="Tip 2">
                  NEVER open weird or out of the ordinary links and attachments
                </Collapse>
                <Spacer></Spacer>
                <Collapse css={{ width: "25%" }} shadow title="Tip 3">
                  Make sure websites you visit have "https" and a lock beside it
                </Collapse>
                <Spacer></Spacer>
                <Collapse css={{ width: "25%" }} shadow title="Tip 4">
                  Create strong passwords with the next steps
                </Collapse>
              </Row>
            </Container>

            <Container
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <FormControl>
                <RadioGroup>
                  <Container
                    style={{
                      opacity: "0.8",
                      justifyContent: "center",
                      display: "flex",
                    }}
                  >
                    <img src={right} width={"400vh"} height={"50vh"} />
                  </Container>
                  <FormControlLabel
                    control={<Radio onChange={() => setAnswer("right")} />}
                    value="right"
                    style={{ display: "flex", justifyContent: "center" }}
                  />

                  <Container
                    style={{
                      opacity: "0.8",
                      justifyContent: "center",
                      display: "flex",
                    }}
                  >
                    <img src={wrong} width={"400vh"} height={"50vh"} />
                  </Container>
                  <FormControlLabel
                    control={<Radio onChange={() => setAnswer("wrong")} />}
                    value="wrong"
                    style={{ display: "flex", justifyContent: "center" }}
                  />
                </RadioGroup>
              </FormControl>

              <Button
                onClick={handleSubmit}
                style={{ background: color.blueBell, color: "black" }}
              >
                Submit
              </Button>
            </Container>

            <br></br>
            <br></br>

            <RightAnswer
              handler={handler}
              visible={visible2}
              setVisible={setVisible2}
              style={{ width: "10%" }}
            />

            <WrongPopUp
              handler={handler}
              visible={visible}
              setVisible={setVisible}
              style={{ width: "10%" }}
            />
          </Card>
        </Container>
      </Container>
    </>
  );
}

export function CurrUnit({ progressOne }) {
  return (
    <Container maxWidth={false} style={{ width: "77.1%" }}>
      <Text h1 css={{ marginTop: "1vw" }}>
        Overview
      </Text>
      <Collapse.Group splitted>
        <Collapse title="Summary" shadow sx={{}}>
          <Text>
            Web security is important to keeping hackers and cyber-thieves from
            accessing sensitive information. Without a proactive security
            strategy, businesses risk the spread and escalation of malware,
            attacks on other websites, networks, and other IT infrastructures.
            If a hacker is successful, attacks can spread from computer to
            computer, making it difficult to find the origin.
          </Text>
        </Collapse>
      </Collapse.Group>
    </Container>
  );
}

export function WrongPopUp({ handler, visible, setVisible }) {
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
              Not Quite right, try again! :)
            </h1>
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
export function RightAnswer({ handler, visible, setVisible }) {
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
              Correct! Making sure the lock and the "https" is included in the
              link will help you stay on safe internet pages!
            </p>
          </Text>
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat onClick={nextHandler}>
            <Link to="/PasswordPage">Next</Link>
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
