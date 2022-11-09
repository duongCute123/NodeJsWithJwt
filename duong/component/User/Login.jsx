import React from "react";
import { Component } from "react";
import { useState } from "react";
import axios from "axios";
import Navs from "../Header/Navbar";
import AddUser from "./user";
import { Link, NavLink, Route } from "react-router-dom";
const Login = () => {
    const list = {
        emailaddress: "",
        passwork: "",
    }
    const [forms, setForm] = useState(list)
    const change = (e) => {
        const { name, value } = e.target
        setForm({ ...forms, [name]: value })
    }
    const submit = (e) => {
        e.preventDefault()
        axios.get('http://localhost:8000/getUser/'+emailaddress)
        .then(res=>console.log(res.data))
        .catch(err=>console.log(err))
    }
    const { fullName, emailaddress, passwork, _id } = forms
    return (
        <div className="login">
            <h1>Trang đăng nhập</h1> <br />
            <form action="" method="get">
                <label htmlFor="">Nhập địa chỉ email vào</label> <br />
                <input type="text" name="emailaddress" value={emailaddress} onChange={change} /> <br />
                <label htmlFor="">Nhập mật khẩu của bạn</label> <br />
                <input type="password" name="passwork" value={passwork} onChange={change} placeholder="Vui lòng nhập mật khẩu vào nhá" /> <br />
                <label htmlFor=""></label> <br />
                <input type="submit" value="Login" onClick={submit}/>
            </form>
        </div>

    )
}
export default Login
