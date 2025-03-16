const mysql = require("mysql2");

async function db(){
    const database = mysql.createConnection({
        host: "localhost",
        user: "root", // Change if needed
        password: "11819", // Change if needed
        database: "sandg",
    });
    
    await database.connect((err) => {
        if (err) {
            console.error("Database connection failed: " + err.stack);
            return;
        }
        console.log("Connected to MySQL database");
    });

    return database;
}


module.exports = db;
