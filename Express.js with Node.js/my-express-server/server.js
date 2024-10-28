const express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.send('<h1>Hello, world</h1>');
});

app.get('/contact', (req, res) => {
	res.send('Contact me at: raph@gmail.com');
});

app.get('/about', (req, res) => {
	res.send('My name is Raph and I love code.');
});

app.listen(3000, () => {
	console.log('Server started on port 3000');
});
