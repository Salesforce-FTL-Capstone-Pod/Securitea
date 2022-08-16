const express = require("express");
const { appendFile } = require("fs");
const TextToSpeechV1 = require("ibm-watson/text-to-speech/v1.js");
const security = require("../middleware/security");

const router = express.Router();

const apiKey = process.env.TEXT_TO_SPEECH_APIKEY;
console.log(process.env.TEXT_TO_SPEECH_APIKEY);
const url =
  "https://api.us-south.text-to-speech.watson.cloud.ibm.com/instances/c3b8b3c2-7209-43cb-ac1c-2cd5ccdf7f74";

if (apiKey) {
  process.env.TEXT_TO_SPEECH_APIKEY = apiKey;
}

if (url) {
  process.env.TEXT_TO_SPEECH_URL = url;
}

let client;
try {
  client = new TextToSpeechV1({ vesion: "2020-06-02" });
} catch (err) {
  console.error("error creating service client", err);
}

var options = {
  etag: false,
  maxAge: "0",
  setHeaders: function (res, _path, _stat) {
    res.set("Cache-Control", "private, no-cache, no-store, must-revalidate");
    res.header("Pragma", "no-cache");
    res.header("Expires", "0");
  },
};

router.get("/api/voices", async (_, res, next) => {
  try {
    if (client) {
      const { result } = await client.listVoices();
      return res.json(result);
    } else {
      return res.json({
        voices: [
          {
            name: "en-US_AllisonV3Voice",
            description:
              "Allison: American English female voice. Dnn technology",
          },
        ],
      });
    }
  } catch (err) {
    console.error(err);
    if (!client) {
      err.statusCode = 401;
      err.description =
        "Could not find valid credentials for the Text to Speech service";
      err.title = "Invalid credentials";
    }
    next(err);
  }
});

router.get("/api/synthesize", async (req, res, next) => {
  try {
    const { result } = await client.synthesize(req.query);
    result.pipe(res);
  } catch (err) {
    console.error(err);
    if (!client) {
      err.statusCode = 401;
      err.description =
        "Could not find valid credentials for the Text to Speech service.";
      err.title = "Invalid credentials";
    }
    next(err);
  }
});

module.exports = router;
