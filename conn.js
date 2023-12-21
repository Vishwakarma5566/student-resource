const mongoose = require("mongoose");

mongoose.connect("mongo://localhost:27017/student", {
    useNewUrlParsel:true,
    useUnifiedTopology:true,
    useCreateIndex:true
}).then(()=>{
    console.log(`connection successful`);
}).catch((e) =>{
    console.log(`no connection`);
})