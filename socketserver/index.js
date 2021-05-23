const app=require('express')();
const express=require('express');


const http=require('http').createServer(app);

const cors=require('cors');
const io = require('socket.io')(http, {
    cors: {
      origin: '*',
    }
  });
const PORT=process.env.PORT||4000;
app.use(cors());
app.use(express.json());

io.on('connection',socket=>{

    socket.on('message',({name,message})=>{

     io.emit('message',{name,message})

    })
})

http.listen(PORT,function(){

    console.log('mental health hacks')

})