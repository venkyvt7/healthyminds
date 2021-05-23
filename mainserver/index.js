const express=require('express');
require('dotenv').config()
const cors=require('cors');
const mongoose=require('mongoose');
const blogs=require('./routes/blogs.js');
const https = require("https");
const app=express();
https.globalAgent.options.secureProtocol = 'SSLv3_method';
const PORT= process.env.PORT||3001;
app.use(cors());
app.use(express.json());

app.use(blogs);

app.post('/',(req,res)=>{

console.log(req.body);

res.send("33");

})


mongoose.connect(process.env.DB_HOST, {
    useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true,
	useFindAndModify: false
});



app.listen(PORT,()=>{
    console.log("app is at port 3001")
})