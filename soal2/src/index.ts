import express from "express";
import { Request, Response } from "express";
import * as fs from 'fs';

const app = express();
const port = 3000;

const jsonData = JSON.parse(fs.readFileSync('./src/resources/sample.json', 'utf-8'));

app.get('/data', (req: Request, res: Response) => {
    res.json(jsonData);
});

app.listen(port, () => {
    console.log(`Server berjalan di ${port}`);
});