const express =require("express");
const path = require("path");
const app = express();

require("./db/conn");
const Register = require("./model")

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended:false}))

// const static_path = path.join(__dirname, "../public" );

// app.use(express.static(static_path));
// app.set("view engine", "hbs");

app.get("/", (req,res) =>{
    res.send("Welcome")
});

app.get("/", (req, res)=>{
    res.render("/");
})

// create a new user in our database
app.post("/", async(req,res)=>{
    try {

        const registerEmployee = new Register({
            username: req.body.username,
            email: req.body.emial,
            password: req.body.password
        })

        const registered = await registerEmployee.save();
        res.status(201).render("index");

    } catch (error) {
        res.status(400).send(error);
    }
})

app.listen(port,() =>{
    console.log(`server is running at port no ${port}`);
})