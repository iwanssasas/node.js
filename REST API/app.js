const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

const userRoutes = require('./routes/routes');
const bookRoutes = require('./routes/bookRoute');
const shelfRoutes = require('./routes/shelfRoute');

app.use((req,res,next)=>{
    res.setHeader('content-type','text/html');
    next(); // telling express untuk move on ke next middlewares
})

app.use(bodyParser.json());

const url = "mongodb://localhost:27017/REFACTORY";
////
main()
.then(()=>{console.log("successfully connect to MongoDB")})
.catch(err => console.error("Connection error", err));

async function main() {
    await mongoose.connect(url,
        {useNewUrlParser: true, useUnifiedTopology:true})
}

app.get('/', function(req, res){
    res.send("Express is running successfully!");
});

app.use(userRoutes);
app.use(bookRoutes);
app.use(shelfRoutes);

app.listen(3000, () => {
    console.log(`Server is running on port 3000.`);
});