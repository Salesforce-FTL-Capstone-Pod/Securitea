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
  TextField,
  InputAdornment,
  IconButton,
  Radio,
  FormControlLabel,
  FormControl,
  RadioGroup,
} from "@mui/material";
import { Modal, Dropdown, Text } from "@nextui-org/react";
import * as color from "../../assets/colorPalette";
import Wrong from "../../assets/Wrong.svg";
import Right from "../../assets/Right.svg";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import CheckIcon from "@mui/icons-material/TaskAlt";

import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";

import Speaker from "../../assets/Speaker.svg";
import { useLoginForm } from "../../hooks/useLoginForm";
import right from "../../assets/right.png";
import wrong from "../../assets/wrong.png";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Spacer } from "@nextui-org/react";

export default function TipsPage() {
  return (
    <>
      <Navbar />
      <InternetTips />
      <Footer />
    </>
  );
}

// const speak = (evt) => {
//   //Add tts functionality here
//   console.log("here");
// };

export function InternetTips() {
  const { form, errors, isProcessing, handleOnInputChange, handleOnSubmit } =
    useLoginForm();

  const [isRight, setIsRight] = useState();

  const [answer, setAnswer] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const handler = () => setVisible(true);
  const [isFinished, setIsFinished] = useState(false);

  const navigate = useNavigate();

  function handleSubmit() {
    if (answer === "right") {
      setIsRight(true);
      setSuccessMessage("");
      setVisible2(true);
      setIsFinished(true);
    } else if (answer === "wrong") {
      setIsRight(false);
      setSuccessMessage("Try Again!");
      setVisible(true);
    }
  }

  return (
    <Container
      maxWidth={false}
      style={{
        display: "flex ",
        flexDirection: "column",
        backgroundColor: color.platinum,
        height: "100%",
        width: "75%",
        marginTop: "100px",
        marginBottom: "100px",
        borderRadius: "15px",
      }}
    >
      <Container
        maxWidth={false}
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "right",
          paddingTop: "2vh",
          marginBottom: "25px",
        }}
      >
        {isFinished ? (
          <CheckIcon fontSize={"large"} style={{ color: color.blueBell }} />
        ) : (
          <></>
        )}
      </Container>
      <h1>Internet Tips</h1>
      <p>
        The best way to keep your companies and your personal data secure is by
        following these following tips:
      </p>
      <Container>
        <li>Do not step away from your workstation without locking it</li>
        <li>Make sure websites you visit have "https" and a lock beside it</li>
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

        <Button
          onClick={handleSubmit}
          style={{ background: "#B7B5E4", color: "#0E131F" }}
        >
          Submit
        </Button>
      </Container>

      <br></br>
      <br></br>

      {isRight ? (
        <RightAnswer
          handler={handler}
          visible={visible2}
          setVisible={setVisible2}
          style={{ width: "10%" }}
        />
      ) : (
        <WrongPopUp
          handler={handler}
          visible={visible}
          setVisible={setVisible}
          style={{ width: "10%" }}
        />
      )}
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
          <Button>
            <Link to="/PasswordPage">
              <ArrowCircleRightIcon style={{ color: "#D3CFE2" }} />
            </Link>
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
