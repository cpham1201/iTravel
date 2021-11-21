const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose
    .connect(process.env.MONGO_URL, { 
        useNewUrlParser: true,
        useUnifiedTopology : true
    })
    .then(() => {
        console.log("MongoDB CONNECTED");
    })
    .catch((err) => console.log(err));

    

app.listen(8000, ()=> {
    console.log("Backend server is running")
})