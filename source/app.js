const express = require("express");

require("./db/connections");
const Book = require("./models/books");

const app = express();

app.use(express.json());

//-----------------------------------------------------------------create a new books--------------------------------------------------
app.post("/books",async (req, res) => {
    try{
        const user = new Book(req.body);
        const adduser=await user.save();
        res.status(201).send(adduser);
    }catch(e){
        res.status(400).send(e);
    }
  });


//---------------------------------------------------------------   Display Records-------------------------------------------------------- 
app.get("/books",async(req,res)=>{

    try{
       const booksData=await Book.find();
       res.send(booksData);
    }catch(e){
        res.send(e);
    }
});

app.listen(process.env.PORT || 3000, () => {
  console.log("connected");
});