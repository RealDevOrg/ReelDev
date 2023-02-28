import express from "express";
const router = express.Router();

router.post('/signup', (req, res) => {
  res.sendStatus(200);
});
router.post('/signin', (req, res) => {
  res.sendStatus(200);
});
router.get('/feed', (req, res) => {
  res.sendStatus(200);
});

router.use((req, res) => res.sendStatus(404));

module.exports = router;