const express = require('express');
const app = express();
const port = 8808;

app.get('/', (req, res) => {
	res.send('Hello!');
});

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});