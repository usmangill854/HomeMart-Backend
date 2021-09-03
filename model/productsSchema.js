const mongoose=require("mongoose")

const productsSchema=new  mongoose.Schema({
    itemName : {
        type : String,
        required : true,
        unique : true,
    },
        itemPrice : {
        type : Number,
        required : true
    },
    quantity : {
        type : Number,
        required : true
    }
}, {timestamps: true}
)
module.exports = mongoose.model("Products",productsSchema)