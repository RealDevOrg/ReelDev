import express from 'express';
const router = express.Router();


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



// getFeed()

// makePost()