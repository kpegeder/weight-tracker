exports.getDefault = function (req, res) {
  res.send("Your are on the root route");
};

exports.aboutUs = function (req, res) {
  res.send("Your are on the about us route");
};

exports.addEmployee = function (req, res) {
  let empName = req.body.empName;
  let empPass = req.body.empPass;
  res.end(`Post was successful, we got ${empName} and ${empPass}`);
};

exports.getEmployee = function (req, res) {
  res.send("Your are on the get employees route");
};
