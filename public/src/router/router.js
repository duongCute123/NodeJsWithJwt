var express = require("express")
var router = express.Router()
var Customer = require("../model/entity")
var jwt = require("jsonwebtoken")
var bcrypt = require("bcryptjs")
var User = require("../model/Users")
router.route("/hello").get(function (req, res) {
    res.json("Hello anh dương")
})
//chèn dữ liệu vào database
router.route("/create").post(function (req, res) {
    var data = req.body
    var customer = new Customer(data)
    customer.save()
        .then(customer => {
            res.status(200)
                .json({ 'customer': 'Thêm dữ liệu thành công' })
        })
})
//Lấy dữ liệu từ server gửi về và hiển thị lên giao diện
router.route("/getList").get(function (req, res) {
    Customer.find({}, function (err, customer) {
        if (!err) {
            res.json(customer)
            console.log("Thêm thành công")
        }
        else {
            res.status(400)
                .json({ 'err': 'Lỗi lấy dữ liệu nhá bạn' })
        }
    })
})
//Cập nhật dũ liệu vào
router.route('/edit/:id').get(function (req, res) {
    var id = req.params.id
    Customer.findById(id, function (err, customer) {
        res.json(customer)
    })
})
router.route("/update/:id").post(function (req, res) {
    Customer.findById(req.params.id, function (err, customer) {
        if (!customer) {
            res.status(400).send("Lỗi gửi dữ liệu")
        }
        else {
            console.log(customer)
            customer.email = req.body.email;
            customer.first_name = req.body.first_name;
            customer.last_name = req.body.last_name;
            customer.save()
                .then(customer => {
                    res.json("Cập nhật thành công")
                })
                .catch(err => {
                    res.status(400).send("Lỗi cập nhật dữ liệu")
                })
        }
    })
})
//Xóa dữ liệu khỏi cơ sở dữ liệu
router.route("/delete/:id").get(function (req, res) {
    Customer.findByIdAndRemove({ _id: req.params.id, }, function (err, customer) {
        if (err) {
            res.status(400)
                .json(err)
        }
        else {
            res.json("Xóa thành công nhé bạn")
        }
    })
})
//Sử dụng login và register với jwt trong node with react js
router.route("/register").post(function (req, res) {
    var data = req.body
    var user = new User(data)
    user.save()
        .then(user => {
            res.json({ user: "Thêm thành công nhá" })
        })
        .catch(err => {
            res.json({ err: "Lỗi thêm rồi" })
        })
})
//Đăng nhập vào
router.route("/login").post(function (req, res) {
    User.findOne({
        emailaddres: req.body.emailaddres
    }, function (err, user) {
        if (err) throw err;
        if (!user) {
            res.status(401).json({ message: "Lỗi tìm user" })
        } else if (user) {
            return res.json({ token: jwt.sign({ emailaddres: user.emailaddres, fullName: req.body.fullName, passwork: req.body.passwork }, 'RESFULLAPIs') })


        }
    })
})
//Kiểm tra tk đã login chưa
// router.route("/").use(function (req, res, next) {
//     if (req.headers && req.headers.authorization && req.headers.authorization.split('')[0] === 'JWT') {
//         jwt.verify(req.headers.authorization.split('')[1], 'RESFULLAPIs', function (err, code) {
//             if (err) req.user = undefined
//             req.user = code
//             next();
//         })
//     } else {
//         req.user = undefined
//         next();
//     }
// })
module.exports = router