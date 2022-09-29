const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const request = require("request");

const app = express();
const port = 3000;

app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/schedule-meeting", (req, res) => {
  const playload = req.body;
  const config = {
    token: "zoom JWT token",
    email: "zoom registered email id",
  };
  try {
    var options = {
      url: `https://api.zoom.us/v2/users/${config.email}/meetings`,
      method: "POST",
      auth: {
        bearer: config.token,
      },
      json: true,
      body: {
        start_time: playload.date,
        duration: playload.duration,
        topic: playload.topic,
        type: 2,
      },
    };
    request(options, (error, response, body) => {
      console.log(response.statusCode);
      if (!error && response.statusCode === 201) {
        res.send({ message: "meeting has been successfully created " });
      } else {
        console.log(body);
        res.send({ message: body.message });
      }
    });
  } catch (e) {
    res.status(500).send(e.toString());
  }
});

app.listen(port, () =>
  console.log(`Hello world app listening on port ${port}!`)
);