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
      const result = await client.query("SELECT * FROM users;");
      return result.rows;
    } catch (error) {
      console.error("Error fetching users:", error);
      throw error; // Re-throw the error for proper handling in the route
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
      const { rows } = await client.query(
        "SELECT * FROM users WHERE username ILIKE $1 OR fullname ILIKE $2 OR role ILIKE $3 OR activeYn = $4",
        [
          `%${queryParams.username}%`,
          `%${queryParams.fullname}%`,
          `%${queryParams.role}%`,
          queryParams.activeYn,
        ]
      );
      return rows;
    } finally {
      client.release();
    }
  }

  static async getUserByUsername(username) {
    const client = await pool.connect();
    try {
      const { rows } = await client.query(
        "SELECT * FROM users WHERE username = $1",
        [username]
      );
      return rows[0];
    } finally {
      client.release();
    }
  }

  // Implement other CRUD operations (create, read by ID, update, delete)
}

module.exports = UserModel;
