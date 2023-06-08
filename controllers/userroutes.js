const auth = require('../utils/auth');
const router = require('express').Router();
const { User, Memory } = require('../models');

// Route to grab user's information
router.get('/', auth, async (req, res) => {
  try {
    
    const hardDriveData = await Memory.findAll({
      where: {
        id: req.session.user_id
      }
    });

    const userData = await User.findOne({
      where: {
        id: req.session.user_id
      },
    });

    const hardDrives = hardDriveData.map((project) => project.get({ plain: true }));

    const items = {
      hardDriveData: hardDrives,
      userData: userData,
    };
    console.log(userData)
    console.log(items)
    res.render('profile', { name: userData.name, email: userData.email, items });
  } catch (err) {
    console.error(err);
    res.redirect('/login');
  }
});

module.exports = router;
