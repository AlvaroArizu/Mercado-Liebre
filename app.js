const express = require('express');
const app = express();
const PORT = process.env.PORT || 3004;


app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(`server listening on ${PORT}`);
})


app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});

app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});

app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});