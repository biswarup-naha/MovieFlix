const mongoose=require('mongoose')

const dbConnect=()=>{
    mongoose.connect(process.env.MONGO_URI);

    mongoose.connection.on("connected",()=>{
        console.log(`MongoDB connected on ${process.env.MONGO_URI}`);
    })

    mongoose.connection.on("error",(err)=>{
        console.log("error connecting to db: "+err)
    })

    mongoose.connection.on("disconnected",()=>{
        console.log("Mongodb disconnected");
    })
}

module.exports=dbConnect;
