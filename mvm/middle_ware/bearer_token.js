const jwt = require('jsonwebtoken');

const bearToken = async (req, res, next) => {
  let token;
  let auth = req.headers.authorization || req.headers.Authorization;

  if (auth && auth.startsWith("Bearer")) {
    token = auth.split(" ")[1];

    // jwt.verify(token, process.env.JWT_SECRET, function(err, decoded) {
        jwt.verify(token, "MoniBag", function(err, decoded) {


    //  console.log(decoded);

      if (typeof decoded === "undefined") {
        res.json({
            message:"undefined users",
        }) ;      }
    });
  }

  next();
};

module.exports = bearToken;