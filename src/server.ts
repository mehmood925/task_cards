import express from 'express';
import bodyParser from 'body-parser'
import env from 'dotenv'
import startup from './startup/index.js'
import connection from './database/index.js'
import cors from 'cors'
env.config();

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(bodyParser.json());

startup(app);

connection()
app.listen(port, () => {
  console.log(`Server started at https://localhost:${port}`);
});
