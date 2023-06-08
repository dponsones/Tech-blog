const router = require('express').Router();

const homeRoutes = require('./homeRoutes.js');
const postRoutes = require('./postRoutes.js');
const loginRoutes = require('./loginRoutes.js');
const userRoutes = require('./userroutes.js');

router.use('/', homeRoutes);
router.use('/post', postRoutes);
router.use('/login', loginRoutes);
router.use('/profile', userRoutes);


module.exports = router;