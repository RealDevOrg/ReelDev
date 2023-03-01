import { NextFunction, Request, Response, RequestHandler } from "express";
import bcrypt from 'bcrypt';

const db = require('../database.ts');

interface MiddlewareArgs {
  req: Request, 
  res: Response, 
  next: NextFunction
}
type AuthController = {
  createUser: RequestHandler,
  verifyUser: RequestHandler,
  setSSIDCookie: RequestHandler,
  verifySSIDCookie: RequestHandler,
  setHasPostedCookie: RequestHandler,
  verifyHasPostedCookie: RequestHandler
}

const SALT_WORK_FACTOR = 10;
const authController: AuthController = {

  createUser: async (req: Request, res: Response, next: NextFunction) => {
    // TODO
    const { username, password } = req.body;
    try {
      const hashedPassword = await bcrypt.hash(password, SALT_WORK_FACTOR);
      const queryStr = `
        INSERT INTO users (username, password, profile_picture, has_posted_today)
        VALUES ($1, $2, $3, $4)
        RETURNING _id;
      `
      const values = [username, hashedPassword, null, false];
      const response = await db.query(queryStr, values);
      // res.locals.userID = response.rows
      console.log('db response: ', response.rows[0]._id);
      res.locals.userID = response.rows[0]._id;
      console.log('creating user account');
      return next();
    } catch (err) {
      // todo
      return next({
        log: `Middleware error in authController.createUser: ${err}`,
        status: 400,
      })
    }
  },

  verifyUser: async (req: Request, res: Response, next: NextFunction) => {
    // TODO
    console.log('verifying user');
    const { username, password } = req.body;
    try {
      const queryUser = `
      SELECT _id, password FROM users 
      WHERE username=$1;
      `
      const values = [username];
      const response = await db.query(queryUser, values);

      const pwsMatch = bcrypt.compare(password, response.rows[0].password);
      // res.locals.userID = response.rows
      if (!pwsMatch) throw new Error("passwords don't match")
      console.log('db response: ', response.rows[0]._id);
      res.locals.userID = response.rows[0]._id;
      return next();
    } catch (err) {
      // todo
      return next({
        log: `Middleware error in authController.verifyUser: ${err}`,
        status: 400,
      })
    }
  },


  setSSIDCookie: (req: Request, res: Response, next: NextFunction) => {
    // TODO:
    try {
      console.log('setting SSID cookie');
      res.cookie('SSID', res.locals.userID, { httpOnly: true });
      return next();
    } catch (e) {
      return next({
        log: `Middleware error in authController.setSSIDCookie: ${e}`,
        status: 400
      });
    }
  },

  verifySSIDCookie: (req: Request, res: Response, next: NextFunction) => {
    // TODO:
  },

  setHasPostedCookie: (req: Request, res: Response, next: NextFunction) => {
    // TODO:
  },

  verifyHasPostedCookie: (req: Request, res: Response, next: NextFunction) => {
    // TODO:
  }
};

module.exports = authController;

