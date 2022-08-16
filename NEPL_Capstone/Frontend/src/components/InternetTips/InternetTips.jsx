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
import { Modal } from "@nextui-org/react";
import Right from "../../assets/Right.svg";
import Wrong from "../../assets/Wrong.svg";
import * as color from "../../assets/colorPalette";
import { useAuthContext } from "../../contexts/auth";
import API from "../../services/apiClient";

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

export default function TipsPage() {
  return (
    <>
      <Navbar />
      <InternetTips />
      <Footer />
    </>
  );
}

export function InternetTips() {
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
        style={{
          display: "flex ",
          backgroundColor: color.platinum,
          height: "100%",
          width: "75%",
          marginTop: "100px",
        }}
      >
        <ControlContainer onSynthesize={onSynthesize} inputText={tipsText} />
        <OutputContainer audioElementRef={audioElementRef} />
      </Container>
      <Container
        maxWidth={false}
        style={{
          display: "flex ",
          flexDirection: "column",
          backgroundColor: color.platinum,
          height: "100%",
          width: "75%",
          marginBottom: "100px",
        }}
        className="service-container"
      >
        <h1>Internet Tips</h1>

        {/* FIX THIS  */}

        <p>
          The best way to keep your companies and your personal data secure is
          by following these following tips:
        </p>
        <Container>
          <li>Do not step away from your workstation without locking it</li>
          <li>
            Make sure websites you visit have "https" and a lock beside it
          </li>
          <li>NEVER open weird or out of the ordinary links and attachments</li>
          <li>Create strong passwords with the next steps</li>
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
                }}
              >
                <img src={right} width={"400vh"} height={"50vh"} />
              </Container>
              <FormControlLabel
                control={<Radio onChange={() => setAnswer("right")} />}
                value="right"
              />

              <Container style={{ width: "25%" }}></Container>

              <Container
                style={{
                  opacity: "0.8",
                  justifyContent: "center",
                }}
              >
                <img src={wrong} width={"400vh"} height={"50vh"} />
              </Container>
              <FormControlLabel
                control={<Radio onChange={() => setAnswer("wrong")} />}
                value="wrong"
              />
            </RadioGroup>
          </FormControl>

          <Button onClick={handleSubmit}>Submit</Button>
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
      </Container>
    </>
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
          <img
            src={Right}
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button color="error" onClick={closeHandler}>
            Close
          </Button>
          <Button onClick={nextHandler}>
            <Link to="/PasswordPage">Next</Link>
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
