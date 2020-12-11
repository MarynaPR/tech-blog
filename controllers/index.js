//collecting the packaged group of API endpoints and prefixing them with the path /api
const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');

router.use('/api', apiRoutes);

router.use((req, res) => {
    res.status(404).end();
});
// const dashboardRoutes = require('./dashboard-routes.js');

router.use('/', homeRoutes);
// router.use('/dashboard', dashboardRoutes);



module.exports = router;

