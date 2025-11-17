import express from "express";
import mysql from "mysql2";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.use('/images', express.static('images'));


const db = mysql.createConnection({
    host: "localhost",
    user: "root", 
    password: "password",
    database: "product_data", 

});

db.connect((err) => {
    if (err) {
        console.error("Database connection failed", err);
    } else {
        console.log("Connected to database");
    }
});

app.get("/api/products", (req, res) => {
    const query = "SELECT * FROM products ORDER BY id ASC";
    db.query(query, (err, results) => {
        if (err) {
            console.error("Error fetching products", err);
            res.status(500).json({ error: "Database query failed"});
        } else {
            res.json(results);
        }
    });
});

app.listen(5000, () => {
    console.log("Backend running");
});