require('dotenv').config();
const express = require('express')

const app = express()
const port = process.env.PORT || 3000;
const path = require('path');                               // for referencing the file system

// set up static asset directories 
app.use(express.static(path.resolve(__dirname, '..', '..', './angular/dist/angular')));

app.get('/', (req: any, res: any) => {
	res.sendFile(express.static(path.resolve(__dirname, '..', '..', './angular/dist/angular/index.html')))
});

app.listen(port, () => {
	console.log(`App listening on port ${port}`)
});