const handleSignin = (req, res, db, bcrypt, jwt) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json('Incorrect form submision')
  }
  db.select('email', 'hash').from('login').where('email', '=', email)
    .then(data => {
      const isValid = bcrypt.compareSync(password, data[0].hash);
      if (isValid) {
        return db.select('*').from('users').where('email', '=', email)
          .then(user => {
            const token = jwt.sign(user[0], 'YOUR_SECRET_KEY');
            res.json({user: user[0], token});
          })
          .catch(err => res.status(400).json('Unable to get user'));
      } else {
        res.status(400).json('Wrong credentials');
      }
    })
    .catch(err => res.status(400).json('Wrong credentials'));
}

module.exports = {
  handleSignin: handleSignin
};