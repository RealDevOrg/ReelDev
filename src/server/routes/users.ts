import express from "express";
const feedController = require('../controllers/feedController');
const { createUser, setSSIDCookie, verifyUser, verifySSIDCookie } = require('../controllers/authController');
const router = express.Router();

router.post('/signup', 
  createUser, 
  setSSIDCookie,
  (req, res) => {
    res.sendStatus(200);
  }
);
router.post('/signin', 
  verifyUser,
  setSSIDCookie,
  (req, res) => {
    res.sendStatus(200);
  }
);
router.get('/feed', (req, res) => {
  res.sendStatus(200);
});

router.use((req, res) => res.sendStatus(404));

module.exports = router;