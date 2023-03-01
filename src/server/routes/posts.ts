import express from 'express';
const { getFeed, handlePost } = require('../controllers/feedController');
const authController = require('../controllers/authController');
const router = express.Router();


router.post('/', handlePost, (req, res) => res.sendStatus(200))

router.get('/feed', getFeed, (req, res) => res.status(200).json(res.locals.feed));


router.get('getcomments', (req, res) => {
  // TODO: fill out route
  res.sendStatus(200);
});

router.post('comment', (req, res) => {
  // TODO: fill out route
  res.sendStatus(200);
});

router.use((req, res) => res.sendStatus(404));


module.exports = router;

