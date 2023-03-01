const { Pool } = require('pg');
require('dotenv').config(); 


const pool = new Pool({
  connectionString: process.env.PG_URI
})

module.exports = {
  query: (text: string, params: Array<string>, callback: any) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
}

/**
 * CREATE TABLE Users (_id serial PRIMARY KEY, username varchar NOT NULL, password varchar NOT NULL, profile_picture varchar, has_posted_today boolean NOT NULL DEFAULT 'false');
 */
