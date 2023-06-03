const router = require('express').Router();

const homeRoutes = require('./homeRoutes.js');
const postRoutes = require('./postRoutes.js');
const loginRoutes = require('./loginRoutes.js');


router.use('/', homeRoutes);
router.use('/post', postRoutes);
router.use('/login', loginRoutes);



module.exports = router;