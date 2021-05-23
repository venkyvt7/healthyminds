const express=require('express');
const mongoose=require('mongoose');
const blog=require('../models/blogmodels.js');
const router=express.Router();


router.post("/blogs",async(req,res)=>{

    const {name,head,body,likes}=req.body;
    
    
    await blog.create({
        name,
        head,
        body,
        likes
        
    })
//     const sendingData=[];

//    await blog.find({}, function(err, users){
//         if(err){
//           console.log(err);
//         } else{
//             // res.render('user-list', users);
//             sendingData.push(users);
//             console.log(users);
//             // console.log('retriseved list of names', users.length, users[0].name);
//         }
//     })


    res.send("Saved");



})

router.get("/blogs",async(req,res)=>{

    const {name,head,body}=req.body;
    
    
    // await blog.create({
    //     name,
    //     head,
    //     body
    // })
    const sendingData=[];

   await blog.find({}, function(err, users){
        if(err){
          console.log(err);
        } else{
            // res.render('user-list', users);
            sendingData.push(users);
            console.log(users);
            // console.log('retriseved list of names', users.length, users[0].name);
        }
    })


    res.send(sendingData)



})


module.exports=router;