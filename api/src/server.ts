import express, { Request, Response } from "express";
import mysql from "mysql";
import { Product } from "./types/Product";

// Create connection pool instead of single connection
const pool = mysql.createPool({
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "password",
    database: process.env.DB_NAME || "products",
    connectionLimit: 10,
    acquireTimeout: 60000,
    timeout: 60000
});

const app = express();

// Enable CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    
    if (req.method === 'OPTIONS') {
        res.sendStatus(200);
    } else {
        next();
    }
});

app.get("/products", (req: Request, res: Response) => {
    pool.query("SELECT * FROM products", (err: mysql.MysqlError | null, results: any) => {
        if (err) {
            console.error('Database error:', err);
            res.status(500).json({ error: err.message });
        } else {
            const products: Product[] = results.map((result: any) => ({
                id: result.id,
                name: result.name,
                price: result.price,
                image: result.image
            }));
            res.json(products);
        }
    });
});

app.listen(8000, () => {
    console.log("Server is running on port 8000");
});