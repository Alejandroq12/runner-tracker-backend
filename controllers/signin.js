const handleSignin = (req, res, db, bcrypt, jwt) => {
  db.select('email', 'hash').from('login').where('email', '=', req.body.email)
    .then(data => {
      const isValid = bcrypt.compareSync(req.body.password, data[0].hash);
      if (isValid) {
        return db.select('*').from('users').where('email', '=', req.body.email)
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