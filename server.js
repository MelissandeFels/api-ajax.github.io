const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.get("/", function (req, res) {
        return res.redirect("index.html");
    })
    .listen(4000);
console.log("server listening at port 4000");