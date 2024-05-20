import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import db from "./db.js";
import routes from "./routes/index.js";

db;

const { json,urlencoded } = bodyParser; 

const app = express();
app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));

app.use("/api",routes);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});


// POST: http://localhost:3000/api/auth/login -> login
// POST: http://localhost:300/api/auth/signup -> signin 
