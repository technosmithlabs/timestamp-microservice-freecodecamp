var log = {
  info: function (info) {
    console.log("INFO: " + info);
  },
  warning: function (warning) {
    console.log("WARN: " + warning);
  },
  error: function (error) {
    console.log("ERROR: " + error);
  },
};

// the log object can be used as a module across the applcation
// for logging purposes.
module.exports = log;
