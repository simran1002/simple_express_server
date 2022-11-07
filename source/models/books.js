const mongoose=require("mongoose");
const validator=require("validator");

// --------------------------------------------------creating schemas -------------------------------------

const BookSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:4
    },
    isbn_no:{
        type:String,
        required:true,
        unique:[true,"book Number already exist"],
        maxlength:7
    },
    authors_name:{
        type:String,
        required:true,
    },
    genra:{
        type:String
    },
    inventory:{
        type:String
    }
});

//------------------------------------------------------- creating collection-------------------------------------------------

const Book= new mongoose.model("Books",BookSchema);


module.exports=Book;