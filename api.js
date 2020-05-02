var getWebService = function (app) {
  app.get("/api/timestamp/", (req, res, next) => {
    var reqDate = new Date();
    res.json({ unix: reqDate.getTime(), utc: reqDate.toUTCString() });
    next();
  });
  app.get("/api/timestamp/:date_string", (req, res, next) => {
    var reqDateString = req.params.date_string;
    var reqDate = null;
    if (isNaN(reqDateString)) {
      reqDate = new Date(reqDateString);
    } else {
      reqDate = new Date(parseInt(reqDateString));
    }
    if (reqDateString == null || reqDateString == "") {
      reqDate = new Date();
      res.json({ unix: reqDate.getTime(), utc: reqDate.toUTCString() });
    } else if (isNaN(reqDate.getTime())) {
      console.log(reqDate);
      res.json({ error: "Invalid Date" });
    } else {
      res.json({ unix: reqDate.getTime(), utc: reqDate.toUTCString() });
    }
    next();
  });
};

exports.getWebService = getWebService;
