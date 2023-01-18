const express = require('express');

const app = express(); 
app.use(express.json()); // read JSON BODY
app.use(express.urlencoded({ extended: true })); // read URL encoded body

const PORT = 3000;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});

app.post('/chatbot', (req, res) => {
	// Handle incoming request 
    console.log("RECIEVED!")
    const message = req.body.message;
    const number = message.match(/\d+/);
    res.header('Access-Control-Allow-Origin', '*');
    if (number) {
		fetch(`http://numbersapi.com/${number}?type=trivia`).then(response => response.text()).then(data => {
			res.json({
				text: data
			});
		}).catch(error => {
			res.json({
				text: "Sorry, I couldn't find any information about that number."
			});
		});
	} else {
		res.json({
			text: "I'm sorry, I didn't understand your question. Please provide a number for me to give you information about."
		});
	}
});

