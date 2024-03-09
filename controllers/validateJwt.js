const handleValidateJwt = (req, res, jwt) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json('Unauthorized');
  }
  const token = authorization.split(' ')[1];
  jwt.verify(token, 'YOUR_SECRET_KEY', (err, decoded) => {
    if (err) {
      return res.status(401).json('Unauthorized');
    }
    return res.json(decoded);
  });
};

module.exports = {
  handleValidateJwt: handleValidateJwt,
};
