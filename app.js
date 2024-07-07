const express = require("express");
const app = express();
const path = require("path");

app.use("/",(req,res) => {
    res.send("Hello from backend side");
});

const PORT = 1000;

app.get("/",(req,res)=>{
    app.use(express.static(path.resolve(_dirname,"frontend","build")));
    res.sendFile(path.resolve(_dirname,"frontend","build","index.html"));
});

app.listen(PORT,()=>{
    console.log("Server started");
})

