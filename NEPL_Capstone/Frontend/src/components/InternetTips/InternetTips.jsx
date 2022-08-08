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
} from "@mui/material";
import * as color from "../../assets/colorPalette";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Speaker from "../../assets/Speaker.svg";
import { useLoginForm } from "../../hooks/useLoginForm";

import Question from "../../assets/Question.svg";
import { borderRadius } from "@mui/system";
import { useState } from "react";
import { useEffect } from "react";

export default function TipsPage() {
  return (
    <>
      <Navbar />
      <InternetTips />
      <Footer />
    </>
  );
}

const speak = (evt) => {
  //Add tts functionality here
  console.log("here");
};

function InternetTips() {
  const { form, errors, isProcessing, handleOnInputChange, handleOnSubmit } =
    useLoginForm();

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
      <br></br>
      <br></br>
      <h2>Tips to create a strong password:</h2>
      <Container style={{ display: "flex", justifyContent: "center" }}>
        <Container style={{ backgroundColor: "#C1E1C1", opacity: "0.8" }}>
          <p style={{ color: "green" }}>DO:</p>
          <li>Make sure it is AT LEAST 12 characters long</li>
          <li>Use a lyric</li>
          <li>Use a quote</li>
          <li>Use a passage from a book</li>
          <li>Use an abbreviation of a phrase or setence</li>
          <li>Use a random string generator</li>
        </Container>

        <Container style={{ width: "25%" }}></Container>

        <Container style={{ backgroundColor: "#FAA0A0", opacity: "0.8" }}>
          <p style={{ color: "red" }}>DONT</p>
          <li>Use words that are easy to guess</li>
          <li>Use nicknames or initials</li>
          <li>Use names of family/friends</li>
          <li>Use pet names</li>
          <li>Use your birthday</li>
          <li>Use any easily accesible information</li>
        </Container>
      </Container>

      <h3>Try it Out!</h3>

      <Container>
        <TextField
          margin="normal"
          required
          fullWidth
          label="Enter your password"
          type="password"
          name="password"
          id="passwordEx"
          autoFocus
          onChange={handleOnInputChange}
        ></TextField>
        <Button type="submit" fullWidth variant="contained" color="primary">
          Submit
        </Button>
      </Container>
    </Container>
  );
}
