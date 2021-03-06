// server.js
// where this node app starts

// init project
var express = require("express");
var app = express();
var bGround = require("fcc-express-background");
const logger = require("./log");
const apis = require("./api");

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require("cors");
app.use(cors({ optionSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// listen for requests
const port = /*process.env.PORT*/ 3000;
var listener = app.listen(port, function () {
  logger.info("Your app is listening on port " + listener.address().port);
});

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

// plugging-in the get timestamp service into the server.
apis.getWebService(app);
