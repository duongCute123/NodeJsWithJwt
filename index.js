var express = require("express")
var app = express()
var router = require("./public/src/router/router")
var bodyParse = require("body-parser")
var cors = require("cors")
var db = require("./public/src/config/mongodbconnect")
//Kết nối với localhost
app.use(cors())
//Part dữ liệu từ client gửi về
app.use(bodyParse.urlencoded({ extended: true }))
app.use(bodyParse.json())
//Kết nối cơ sở dư liêu vào
db.connect();
//Kết nối với router
app.use("/",router)
var service = app.listen(8000, function (host, port) {
    var host = service.address().address
    var port = service.address().port
    console.log("Susscess nhé dương", host, port)
})