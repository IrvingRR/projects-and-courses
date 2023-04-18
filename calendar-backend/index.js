require('dotenv').config();
const express = require('express');

const app = express();

// Public directory
app.use(express.static('./public'));

// Read and parse of body
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/auth'));

app.listen(process.env.PORT, () => {
    console.log(`Listen at port ${process.env.PORT}`);
});