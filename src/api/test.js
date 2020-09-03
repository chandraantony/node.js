const express = require('express');
const testController = require('../../controller/test')
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message : 'welcome' });
});

router.get('/testing', testController.controllerTest)


module.exports = router;