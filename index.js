var express = require("express");
var app = express();

app.set("view engine","ejs");
app.set("views","./views");
app.use(express.static('public'));
app.use(express.static('dist'));

app.listen(process.env.PORT || 3000, function(){
    console.log("server start port 3000");
});

app.get("/",(req, res)=>{
    res.render("index");
})