const express = require('express');
const app= express();
const dotenv = require('dotenv').config();
const PORT= process.env.PORT;
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const mySchemaTemplate = require('./models/student')
app.use(express.json());

mongoose.connect(process.env.MONGODB_CONN_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then( () => console.log('MongoDB Connected'))


const token =
    {
        username: "Mahesh", //req.body.username,
        password: "password" //req.body.password
    }

const jwtcode = jwt.sign(token, process.env.SECRET_TOKEN)

app.get('/', (req, res) => {    
    res.send(token)
} )

app.get('/code', (req, res) => { 
    const token2 = jwt.verify(jwtcode, process.env.SECRET_TOKEN, (err, user) =>
    {   const NewSchema = new mySchemaTemplate ({
        username: user.username, 
        password: user.password 
        })
       
    NewSchema.save()
    .then(data =>{
    res.json(data)
    })

       // res.send(token2)
     //  res.send(user.username)
    })   
    
} )

app.post('/login', (req, res) =>{

})


app.listen(PORT, () => console.log(`Server Running @ http://localhost:${PORT}`) );
