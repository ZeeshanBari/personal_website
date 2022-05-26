import dotenv from 'dotenv';
import path from 'path';                               // for referencing the file system
import express from 'express';
import type { Request, Response } from 'express';

dotenv.config();
const port = process.env.PORT || 3000;
const app = express()

// set up static asset directories 
app.use(express.static(path.resolve(__dirname, '..', '..', './angular/dist/angular')));

app.get('/', async (req: Request, res: Response) => {
	return res.send(express.static(path.resolve(__dirname, '..', '..', './angular/dist/angular/index.html')));
});

app.listen(port, () => {
	// eslint-disable-next-line no-console
	console.log(`App listening on port ${port}`);
});