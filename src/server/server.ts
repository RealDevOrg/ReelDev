import express from 'express';
const cors = require('cors');
import { Request, Response, NextFunction,  } from 'express';
const cookieParser = require('cookie-parser');

const app = express();

// declare port Number
const PORT = 3030;

const corsOptions = {
  origin: '*',
  credentials: true,
  optionSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(express.json({limit:'50mb'}));
app.use(cookieParser());

app.use('/images', express.static('src/assets'));


//
const userRouter = require('./routes/users');
const postRouter = require('./routes/posts');

////// ROUTES
app.use('/user', userRouter);
app.use('/post', postRouter);


// Catch all ERROR
app.use((req, res) => res.sendStatus(404));

// GLOBAL ERROR

app.use((err: any, req: Request, res: Response, next: NextFunction): Response => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occured' }
  };

  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
})

app.listen(PORT, (): void => console.log(`listening on port ${PORT}`));

