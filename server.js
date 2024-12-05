const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json()); // Middleware to parse JSON requests

// Example endpoint that eBay might call
app.post('/ebay-webhook', (req, res) => {
    console.log('Received request:', req.body);
    res.status(200).send('Webhook received successfully');
});

// Listen for incoming requests
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
