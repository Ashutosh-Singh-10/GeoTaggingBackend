const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const app = express();

dotenv.config({ path: './config.env' });


app.listen(PORT, function (req, res) {
    console.log("server running on port 3000");
});
