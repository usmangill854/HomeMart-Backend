const express = require("express")
const cors = require("cors")
const port = 4000
const mongoose = require("mongoose")
const app=express()
const product = require("./model/productsSchema")
const catg=require("./model/catagorySchema")
app.use(express.json())


const db= async () => {
    try{
    const con = await mongoose.connect("mongodb+srv://usman:1234@cluster0.wuqqy.mongodb.net/HomeMart?retryWrites=true&w=majority")
        console.log( "db is working fine")
    }catch (error) {
        console.log("db is not connected")
    }
}
db()

    app.post("/api/addProducts",async(req,res)  =>{
        console.log("items", req.body)
        const{itemName,itemPrice,quantity,category} = req.body

    try{
    const response = await product.create({itemName,itemPrice,quantity})
        const cat=catg.create({category})
    if(response && cat){
         res.status(200).json(response)
    }else{
        res.status(400).json({msg: "Product has not been saved in to the database."})
    }
    }catch (error){

            res.send(error)
        }
}
)


app.listen(port,() =>{
    console.log(`server is running on port ${port}`)
})