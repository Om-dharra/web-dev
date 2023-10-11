
const mongoose=require('mongoose');
const Quotes=require("./models/Quote");

let dummyQuotes=[
    {
    author:"Samarth Vohra",
    text:"Syntax over semantics"
    },
    {
        author:'Oppenheimer',
        text:"Now I become death ! The destroyer of worlds"
    },
    {
        author:"Dharra",
        text:"Rom Rom bhaiyo.System paad denge"
    },
    {
        author:'stallin',
        text:"The people who cast the votes don't decide an election, the people who count the votes do"
    }

]
async function seedDb(){
    await Quotes.deleteMany({});
    await Quotes.insertMany(dummyQuotes);
    console.log("DB seedeed");

}
module.exports=seedDb;
