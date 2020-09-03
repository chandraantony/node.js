const express = require('express');
const test = require('./test')
const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'api/v1'
  });
});

router.use('/testAPI', test)
// add new group route here

module.exports = router;
