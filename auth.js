const express=require('express');
const bcrypt=require('bcrypt');
const fs=require('fs-extra');

const router=express.Router();

const file='users.json';

router.post('/signup',async(req,res)=>{

const {name,email,password}=req.body;

let users=[];

if(await fs.pathExists(file))
users=await fs.readJson(file);

const exists=users.find(x=>x.email==email);

if(exists)
return res.send("User already exists");

const hash=await bcrypt.hash(password,10);

users.push({
name,
email,
password:hash
});

await fs.writeJson(file,users);

res.redirect('/login');

});

router.post('/login',async(req,res)=>{

const {email,password}=req.body;

let users=[];

if(await fs.pathExists(file))
users=await fs.readJson(file);

const user=users.find(x=>x.email==email);

if(!user)
return res.send("User not found");

const valid=await bcrypt.compare(password,user.password);

if(!valid)
return res.send("Invalid Password");

req.session.user=user;

res.redirect('/dashboard');

});

module.exports=router;