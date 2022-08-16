import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import axios from "axios";
import PropTypes from "prop-types";
import { Container } from "@mui/system";
import { mapVoicesToDropdownItems } from "./utils";
import Speaker from "../../assets/Speaker.svg";
const VOICES_ENDPOINT = "/tts/api/voices";

export const ControlContainer = ({ onSynthesize, inputText }) => {
  const [voices, setVoices] = useState([]);
  const [selectedVoice, setSelectedVoice] = useState();
  const [text, setText] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const name = "Nana";

  //FIX AXIOS REQ
  useEffect(() => {
    axios("http://localhost:3001/tts/api/voices")
      .then(({ data }) => setVoices(data.voices))
      .catch((err) => {})
      .finally(setIsLoading(false));
  }, []);

  useEffect(() => {
    if (voices[1]) {
      onSelectVoice(mapVoicesToDropdownItems(voices)[1]);
    }
  }, [voices]);

  const onSelectVoice = (voice) => {
    setSelectedVoice(voice);
    setText(inputText);
  };

  return (
    <Container
      maxWidth={false}
      style={{
        display: "flex",
        justifyContent: "right",
        display: "flex",
      }}
    >
      <Button
        style={{ width: "10px", marginRight: "-2vw" }}
        onClick={() => {
          // console.log("text: ", text);
          // console.log("voice: ", selectedVoice);
          onSynthesize(text, selectedVoice);
        }}
      >
        <img src={Speaker} />
      </Button>
    </Container>
  );
};

ControlContainer.propTypes = {
  onSynthesize: PropTypes.func,
};

ControlContainer.defaultProps = {
  onSynthesize: () => {},
};

export default ControlContainer;
