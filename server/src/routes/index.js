const { Router } = require("express");
const router = Router();
const {getDrivers, createDriver} = require('./getDrivers');
const teams = require('./getTeams')
const getById = require('./getById')

router.get('/drivers', getDrivers);
router.get('/drivers/:idDriver', getById);
router.post('/driver', createDriver)
router.use('/teams', teams);



module.exports = router;
