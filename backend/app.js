const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const cookieParser = require('cookie-parser');

mongoose.connect('mongodb://localhost:27017/blog-app',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("DB Connected"))
    .catch((err) => console.log(err));


const authRoutes = require('./routes/authRoutes');


app.use(express.json());
app.use(cookieParser());

app.use(authRoutes);







app.listen(3005, () => {
    console.log('server running at port 3005');
})