const path = require("path");
const express = require("express");
const app = express();

app.get("", (req, res) =>{
    res.send("thami shits himself regularly, and because of this he smells")
})
app.get("/piss", (req, res) =>{
    res.send("thami also pisses himself regularly, which contributes to his odor")
})

app.listen(3000, () => {
    console.log('listening on port 3000')
});