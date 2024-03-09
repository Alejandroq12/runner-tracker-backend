const handleRunData = (req, res, db) => {
  const { user_id } = req.params;
  db.select('*')
    .from('run_data')
    .where({ user_id })
    .then((data) => res.json(data))
    .catch((err) => res.status(400).json('Error retrieving run data'));
};

module.exports = {
  handleRunData: handleRunData,
};
