import { NextFunction, Request, Response, RequestHandler } from "express";
const db = require('../database/database.ts');


type FeedController = {
  getFeed: RequestHandler,
  // getPost: RequestHandler,
  handlePost: RequestHandler,
}
// get all items in feed

// /userId/postId
const feedController = {
  getFeed: async (req: Request, res: Response, next: NextFunction) => {
    console.log('getting feed');
    const query = `
      SELECT * 
      FROM posts
      ORDER BY timestamp DESC; 
    `;

    const getAllPostsWithUsername = `
      SELECT users.username, posts.*
      FROM posts
      LEFT JOIN users 
      ON users._id = posts._userID
      ORDER BY timestamp DESC; 
    `;
    // res.locals.feed = [{_id: int, username: string, caption: string, screenImg: filepath, userImg: filepath, timestamp: Date()}]

    // In theory we also need to send back the username of the user who posted the string
    try {
      const result = (await db.query(getAllPostsWithUsername)).rows;
      // res.locals.feed = result;
      console.log("result from database ", result);
      res.locals.feed = result;
      
      return next();

    } catch (err) {
      return next({
        log: `Middleware error in feedController.getFeed: ${err}`,
        status: 400,
      })
    }
  },

  handlePost: async (req: Request, res: Response, next: NextFunction) => {
    // body will have userImage, screenImage, username, userid, caption
    // insert into posts 
    try {
      const { SSID } = req.cookies;
      if (!SSID) throw new Error("ERROR! you don't have a cookie!");
      const {userImage, screenImage, caption} = req.body;
      // can be auto generated from db
      // const timestamp = Date.now();
      const addPostToDB = `
        INSERT INTO posts (userImage, screenImage, caption, _userID) 
        VALUES($1, $2, $3, $4);
      `;
      const values = [userImage, screenImage, caption, SSID];
      await db.query(addPostToDB, values);
      return next();
    } catch (err) {
      return next({
        log: `Middleware error in feedController.handlePost: ${err}`,
        status: 400,
      })
    }
    // query db
    // insert into posts
    

  },
}




module.exports = feedController;


