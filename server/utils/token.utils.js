const jwt = require('jsonwebtoken');
var createToken = function (auth) {
  return jwt.sign({
    id: auth.id
  }, 'my-secret',
    {
      expiresIn: 60 * 120
    });
};

module.exports = {
  generateToken: function (req, res, next) {
    console.log('req.auth', req.auth);
    console.log()
    const token = createToken(req.auth);
    req.token = token;
    req.user.token = token;
    return next();
  },
  sendToken: function (req, res) {
    console.log('req.token', req.token);
    res.setHeader('x-auth-token', req.token);
    return res.status(200).send(JSON.stringify(req.user));
  }
};