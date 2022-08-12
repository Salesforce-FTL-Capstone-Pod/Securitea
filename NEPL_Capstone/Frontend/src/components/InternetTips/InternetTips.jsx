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
import * as color from "../../assets/colorPalette";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

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

  const navigate = useNavigate();

  useEffect(() => {
    console.log("Answer", answer);
  }, [answer]);

  function handleSubmit() {
    if (answer === "right") {
      setIsRight(true);
      setSuccessMessage("");
    } else if (answer === "wrong") {
      setIsRight(false);
      setSuccessMessage("Try Again!");
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
      }}
    >
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

        <Button onClick={handleSubmit}>Submit</Button>
      </Container>

      <br></br>
      <br></br>

      {isRight ? (
        <>
          <Container
            maxWidth={false}
            style={{
              background: "#C1E1C1",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              flexWrap: "row",
              height: "100%",
              width: "100%",
            }}
          >
            <Typography>
              Correct! Please click the button to continue!
            </Typography>
            <Spacer />

            <Button>
              <Link to="/PasswordPage">
                <ArrowCircleRightIcon />
              </Link>
            </Button>
          </Container>
        </>
      ) : (
        <Typography>{successMessage}</Typography>
      )}
    </Container>
  );
}
