const { Router } = require("express");
const router = Router();
const drivers = require('./getDrivers');
const getDriversByName = require('./getDriversByName')
const teams = require('./getTeams')


router.use('/drivers', drivers);
router.use('/drivers/name?="..."', getDriversByName);
router.use('/teams', teams);



module.exports = router;
