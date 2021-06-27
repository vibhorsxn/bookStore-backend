require('dotenv').config();
const express= require("express");
const mongoose= require("mongoose");
const app= express();
const cors =require("cors");
const bodyParser = require("body-parser");
const bookRoutes =require("./routes/book");

mongoose.connect(process.env.DATABASE,
{   useNewUrlParser:true, 
    useUnifiedTopology:true,
    useCreateIndex:true
})
  .then(()=>{
    console.log("DB CONNECTED")
});

//My Middlewares
app.use(bodyParser.json());
app.use(cors());

//My Routes
app.use("/api",bookRoutes);

//PORT
const port = process.env.PORT ||8000;

app.listen(port,()=>{
    console.log(`**App is running at ${port}**`);
})