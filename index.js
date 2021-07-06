const express = require('express');
const app= express();
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 5000;
const mongoose = require('mongoose');
const mySchema = require('./dbmodel/student');

app.use(express.json());

mongoose.connect(process.env.MONGODB_CON_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => console.log('MongoDB connected'))



app.get('/', (req, res) => {
      
    res.send('Hello')
})

app.post('/reg', (req, res) => {

    const datajwt = new mySchema({
        username: req.body.username,
        password: req.body.password
     })
     datajwt.save().then(data =>{
        res.json(data)
        })
    
})

app.listen(PORT, () => console.log(`Server starting/running @ http://localhost:${PORT}`))