let mongodb = require("mongodb");
let talentsprint = mongodb.MongoClient;

let register  = require("express").Router().post("/",(req,res)=>{
        talentsprint.connect("mongodb://localhost:27017/learnverse",(err,db)=>
        {
            if(err)
                throw err;
            else{
    db.collection("c_comments").insertOne({"email":req.body.email,"comment":req.body.comment},
                (err, result)=> {
                    if (err) throw err;
                    res.send({message:"1 document inserted"});
                    db.close();
                  });
                }
            });
        });
module.exports = register;