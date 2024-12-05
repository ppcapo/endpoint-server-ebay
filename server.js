const express = require('express');
const app = express();

app.use(express.json());

app.post('/account-deletion-notification', (req, res) => {
    console.log('Received notification:', req.body);
    res.status(200).send('Notification received');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
