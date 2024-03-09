const handleAddRun = (req, res, db) => {
  const { user_id, date, distance_km, time_minutes } = req.body;
  db('run_data')
    .insert({ user_id, date, distance_km, time_minutes })
    .returning('*')
    .then((data) => res.json(data[0]))
    .catch((err) => res.status(400).json('Unable to add run data'));
};

module.exports = {
  handleAddRun: handleAddRun,
};
