const express = require("express");
const bodyParse = require("body-parser");
const mongoose = require("mongoose");
const read = require("body-parser/lib/read");
mongoose.connect("mongodb://localhost:27017/AddressBook", { useNewUrlParser: true });
const _ = require("lodash");
const { stringify } = require("nodemon/lib/utils");
const req = require("express/lib/request");
const { required } = require("nodemon/lib/config");
const { redirect } = require("express/lib/response");
const { name } = require("ejs");
const app = express();

app.use(bodyParse.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get('/favicon.ico', function(req, res) { 
  res.status(204);
  res.end();    
});
app.set("view engine", "ejs");

const contactSchema ={
  name:String,
  address:String,
}
const bulkSchema={
  name:[],
  address:[]
}
const Contact=mongoose.model("Contact", contactSchema);
const BulkContact=mongoose.model("BulkContact", bulkSchema);

app.get("/contact",function(req,res){
  Contact.find({},function(err,found){
    if(found) res.send(found);
    else res.send("Not found");
  })
})

app.route("/contact/:name")
.get(function(req,res){
  Contact.findOne({name:req.params.name},function(err,found){
    if(found) res.send(found);
    else res.send("Not found");
  })
})
.put(function(req,res){
  Contact.findOneAndUpdate({name:req.params.name},
    {name:req.body.name,
      address:req.body.address},
    function(err){
      if(!err) res.send("UPDATED")
    });
})
.delete(function(req,res){
  Contact.findOneAndRemove(
    {name:req.params.name},function(err){
      if(!err) {res.send("SUCCESSFULLY DELETED")}
      else{ res.send("NO CONTACT FOUND")}
    });
});

app.post("/bulkAdd",function(req,res){
  const newContact=new BulkContact({
    name:req.body.name,
    address:req.body.address
  })
  newContact.save(function(err){
    if(!err)
    {
      res.send("Contact added successfully");
    }
    else{
      res.send(err);
    }
  })
})

app.post("/add",function(req,res)
{
  const newContact= new Contact({
    name:req.body.name,
    address:req.body.address
  })
  newContact.save(function(err){
    if(!err)
    {
      res.send("Contact added successfully");
    }
    else{
      res.send(err);
    }
  })
})

app.listen(3000, function () {
  console.log("Server UP");
});
