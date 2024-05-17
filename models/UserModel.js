const { Pool } = require("pg");
const dotenv = require("dotenv");
dotenv.config();

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

console.log("Connected to database pool!");

class UserModel {
  static async getAllUsers() {
    const client = await pool.connect();
    try {
      const result = await client.query("SELECT * FROM users");
      return result.rows;
    } finally {
      client.release();
    }
  }

  static async createUser(newUser) {
    const client = await pool.connect();
    try {
      const { rows } = await client.query(
        "INSERT INTO users (username, fullname, role, project, activeYn) VALUES ($1, $2, $3, $4, $5) RETURNING *",
        [
          newUser.username,
          newUser.fullname,
          newUser.role,
          newUser.project,
          newUser.activeYn,
        ]
      );
      return rows[0];
    } finally {
      client.release();
    }
  }

  static async updateUser(username, updatedUserData) {
    const client = await pool.connect();
    try {
      const { rows } = await client.query(
        "UPDATE users SET fullname = $1, role = $2, project = $3, activeYn = $4 WHERE username = $5 RETURNING *",
        [
          updatedUserData.fullname,
          updatedUserData.role,
          updatedUserData.project,
          updatedUserData.activeYn,
          username,
        ]
      );
      return rows[0];
    } finally {
      client.release();
    }
  }

  static async deleteUser(username) {
    const client = await pool.connect();
    try {
      await client.query("DELETE FROM users WHERE username = $1", [username]);
    } finally {
      client.release();
    }
  }

  static async searchUsers(queryParams) {
    const client = await pool.connect();
    try {
      let query = "SELECT * FROM users WHERE 1=1";
      let values = [];
      let index = 1;

      if (queryParams.username) {
        query += ` AND username ILIKE $${index}`;
        values.push(`%${queryParams.username}%`);
        index++;
      }
      if (queryParams.fullname) {
        query += ` AND fullname ILIKE $${index}`;
        values.push(`%${queryParams.fullname}%`);
        index++;
      }
      if (queryParams.role) {
        query += ` AND role ILIKE $${index}`;
        values.push(`%${queryParams.role}%`);
        index++;
      }
      if (queryParams.activeYn) {
        query += ` AND activeYn = $${index}`;
        values.push(queryParams.activeYn);
        index++;
      }

      const { rows } = await client.query(query, values);
      return rows;
    } finally {
      client.release();
    }
  }
}

module.exports = UserModel;
