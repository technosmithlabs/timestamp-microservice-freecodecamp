var getWebService = function (app) {
  app.get("/api/timestamp/:date_string", (req, res, next) => {
    var reqDateString = req.params.date_string;
    var reqDate = new Date(reqDateString);
    if (isNaN(reqDate.getTime())) {
      res.json({ error: "Invalid Date" });
    } else {
      res.json({ unix: reqDate.getTime(), utc: reqDate.toUTCString() });
    }
    next();
  });
};

exports.getWebService = getWebService;
