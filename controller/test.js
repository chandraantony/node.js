
const data = require('../constants/index')

exports.controllerTest = (req,res) => {
    res.json(data.status_code)
}