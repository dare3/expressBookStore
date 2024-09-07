const { Client } = require("pg");
const { DB_URI } = require("./config");

let db = new Client({
  connectionString: DB_URI,
});

async function connectToDatabase() {
  try {
    await db.connect();
    console.log("Successfully connected to the database.");
  } catch (err) {
    console.error("Database connection error:", err.stack);
  }
}

async function disconnectFromDatabase() {
  try {
    await db.end();
    console.log("Database connection closed.");
  } catch (err) {
    console.error("Error closing database connection:", err.stack);
  }
}

process.on('SIGINT', async () => {
  await disconnectFromDatabase();
  process.exit(0);
});

process.on('SIGTERM', async () => {
  await disconnectFromDatabase();
  process.exit(0);
});

connectToDatabase();

module.exports = db;
