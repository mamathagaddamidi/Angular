let mongodb = require("mongodb");
let talentsprint = mongodb.MongoClient;

let update  = require("express").Router().put("/:email",(req,res)=>{
		console.log("Inside update.js: "+req.params.email); 
		talentsprint.connect("mongodb://localhost:27017/crud",(err,db)=>
		{
			if(err)
				throw err;
			else{ 
				console.log("Inside update.js: "+req.params.email);               
				var newvalues = { $set: {name:req.body.name, salary:req.body.salary} };
				db.collection("employee").updateOne({email: req.params.email},newvalues, (err, result)=> {
						if (err) 
						throw err;
						else
						res.send({message:"1 document updated"});
						db.close();
				});
			}
		});
});
	
module.exports = update;