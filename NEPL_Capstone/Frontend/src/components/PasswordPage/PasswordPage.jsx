import React from "react";
import {
  Button,
  Container,
  Typography,
  TextField,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Card, Collapse, Text } from "@nextui-org/react";
import { Link } from "react-router-dom";
import * as color from "../../assets/colorPalette";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import backgroundImg from "../../assets/SecuriTEA-bg2.svg";
import Speaker from "../../assets/Speaker.svg";
import { useLoginForm } from "../../hooks/useLoginForm";
import PasswordStrengthBar from "react-password-strength-bar";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useState, useRef } from "react";
import { Spacer } from "@nextui-org/react";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";

import {
  canPlayAudioFormat,
  getSearchParams,
} from "../../../../Backend/utils/ttsUtils";
import ControlContainer from "../ControlContainer/ControlContainer";
import OutputContainer from "../OutputContainer/OutputContainer";

export default function TipsPage() {
  return (
    <>
      <Navbar />
      <PasswordPage />
      <Footer />
    </>
  );
}

function PasswordPage() {
  const { form, errors, isProcessing, handleOnInputChange, handleOnSubmit } =
    useLoginForm();
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);
  const [generatedPassword, setGeneratedPassword] = useState("");

  const Allowed = {
    Uppers: "QWERTYUIOPASDFGHJKLZXCVBNM",
    Lowers: "qwertyuiopasdfghjklzxcvbnm",
    Numbers: "1234567890",
    Symbols: "!@#$%^&*",
  };

  const getRandomChar = (str) =>
    str.charAt(Math.floor(Math.random() * str.length));

  const generatePassword = (length = 12) => {
    let pwd = "";
    pwd += getRandomChar(Allowed.Uppers);
    pwd += getRandomChar(Allowed.Lowers);
    pwd += getRandomChar(Allowed.Numbers);
    pwd += getRandomChar(Allowed.Symbols);

    for (let i = pwd.length; i < 12; i++) {
      pwd += getRandomChar(Object.values(Allowed).join(""));
    }

    setGeneratedPassword(pwd);
  };

  const tipsText =
    "Tips to create a strong password: Do Make sure it is AT LEAST 12 characters long, Use a lyric, Use a quote, Use a passage from a book, Use an abbreviation of a phrase or setence, Use a random string generator, DONT, Use words that are easy to guess, Use nicknames or initials, Use names of family/friends, Use pet names, Use your birthday, Use any easily accesible information";

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
              PASSWORD CREATION TIPS
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
              Create a secure password!
            </Text>
          </Container>
        </Container>
        <Container
          maxWidth={false}
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Container
            maxWidth={false}
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "100px",
              flexDirection: "column",
              alignItems: "center",
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
            <Card
              maxWidth={false}
              style={{
                display: "flex ",
                flexDirection: "column",
                backgroundColor: color.platinum,
                height: "100%",
                width: "74.3%",
                borderRadius: "0px 0px 15px 15px",
              }}
              className="service-container"
            >
              <h2>Tips to create a strong password:</h2>
              <Container style={{ display: "flex", justifyContent: "center" }}>
                <Container
                  style={{ backgroundColor: "#C1E1C1", opacity: "0.8" }}
                >
                  <p style={{ color: "green" }}>DO:</p>
                  <li>Make sure it is AT LEAST 12 characters long</li>
                  <li>Use a lyric</li>
                  <li>Use a quote</li>
                  <li>Use a passage from a book</li>
                  <li>Use an abbreviation of a phrase or setence</li>
                  <li>Use a random string generator</li>
                </Container>

                <Container style={{ width: "25%" }}></Container>

                <Container
                  style={{ backgroundColor: "#FAA0A0", opacity: "0.8" }}
                >
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
                  type={showPassword ? "text" : "password"}
                  name="password"
                  autoFocus
                  onChange={(e) => setPassword(e.target.value)}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                        >
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                ></TextField>
                <PasswordStrengthBar password={password} />
              </Container>
              <h3>Or let us create one for you!</h3>
              <Container
                style={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  disableRipple
                  color="primary"
                  sx={{
                    mt: 3,
                    mb: 2,
                    background: color.blueBell,
                    color: "black",
                  }}
                  onClick={generatePassword}
                >
                  Create!
                </Button>
                <Spacer></Spacer>
                <Container
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "row",
                  }}
                >
                  <Typography
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      fontSize: "20px",
                    }}
                  >
                    {generatedPassword}
                  </Typography>
                </Container>
                <Button
                  onClick={() =>
                    navigator.clipboard.writeText(generatedPassword)
                  }
                  style={{ color: color.richBlackFogra }}
                >
                  <ContentPasteIcon />
                  <Spacer></Spacer>
                  Copy to Clipboard
                </Button>
                <Container
                  style={{ justifyContent: "center", display: "flex" }}
                >
                  <Link to="/UserDashboard">
                    <Button
                      sx={{
                        color: color.blueBell,
                        width: "10%",
                      }}
                    >
                      <ArrowForwardIosIcon />
                    </Button>
                  </Link>
                </Container>
              </Container>
            </Card>
          </Container>
        </Container>
      </Container>
    </>
  );
}
