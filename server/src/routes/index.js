const { Router } = require("express");
const router = Router();
const drivers = require('./getDrivers');

router.use('/drivers', drivers);




module.exports = router;
