exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

exports.userBoard = (req, res) => {
  res.status(200).send("User Content.");
};

exports.fournisseurBoard = (req, res) => {
  res.status(200).send("Fournisseur Content.");
};

exports.clientBoard = (req, res) => {
  res.status(200).send("Client Content.");
};
