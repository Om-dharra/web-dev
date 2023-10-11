const express = require('express')
const app = express()
const mongoose=require('mongoose');
const seedDb=require("./seed");
const cors=require('cors');
const quoteRoutes=require("./apis/quotesRoutes")



mongoose.connect('mongodb://127.0.0.1:27017/Quote')
.then(()=>{
    console.log("DB connected")
})
.catch((err)=>{console.log(err)})

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors({origin:['http://localhost:3000']}))
app.use(quoteRoutes)


app.get("/hello",(req,res)=>{
    res.status(200).json({msg:"hello from quotesapp"})
})

// seedDb();

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Server connected at http://localhost:${port}`))