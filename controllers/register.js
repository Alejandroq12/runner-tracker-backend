const handleRegister = (req, res, db, bcrypt, jwt) => {
  const { email, name, password } = req.body;
  const hash = bcrypt.hashSync(password);
  db.transaction(trx => {
      trx.insert({
              hash: hash,
              email: email
          })
          .into('login')
          .returning('email')
          .then(loginEmail => {
              return trx('users')
                  .returning('*')
                  .insert({
                      email: loginEmail[0].email,
                      name: name,
                      joined: new Date(),
                  })
                  .then(user => {
                      // Generate token here similar to the signin route
                      const token = jwt.sign(user[0], 'YOUR_SECRET_KEY');
                      res.json({ user: user[0], token });
                  });
          })
          .then(trx.commit)
          .catch(trx.rollback);
  }).catch(err => res.status(400).json('unable to register'));
}

module.exports = {
  handleRegister: handleRegister
};