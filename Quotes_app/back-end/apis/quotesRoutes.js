
const router = require('express').Router();
const Quotes=require("../models/Quote")

router.get('/allquotes',async (req,res)=>{
    try{
        let allquotes=await Quotes.find({});
        
        res.status(200).json(allquotes);

    }
    catch(e){
        res.status(400).json({msg:'something went wrong'})
    }
})

router.post("/addquotes",async (req,res)=>{
    let {text,author} = req.body;
    await Quotes.create({text,author});
    res.status(201).json({msg:"new quote created succesfully"})

})
router.get('/quotes/:id',async(req,res)=>{
    let {id}=req.params;
    const quote=await Quotes.findById(id);
    res.status(200).json(quote);
})

router.delete('/delete/:id',async(req,res)=>{
    let {id}=req.params;
    await Quotes.findByIdAndDelete(id);
    res.status(200).json({msg:"msg deleted"});
    // res.redirect('/allquotes');
    
    
})
module.exports=router;

