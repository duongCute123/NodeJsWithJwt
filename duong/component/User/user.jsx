import React from "react";
import { Component } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const AddUser = () => {
    const list = {
        fullName: "",
        emailaddress: "",
        passwork: "",
        created: "",
    }
    const [forms, setForm] = useState(list)
    const change = (e) => {
        const { name, value } = e.target
        setForm({ ...forms, [name]: value })
    }
    const submit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/register', forms)
            .then(res => {
                console.log(res.data)
            })
    }
    const { fullName, emailaddress, passwork, created } = forms
    return (
        <div className="lo">
            <form action="" method="post">
                <label htmlFor="">Nhập tên đăng nhập</label> <br />
                <input type="text" name="fullName" value={fullName} onChange={change} id="" /> <br />
                <label htmlFor="">Nhập tên đăng nhập</label> <br />
                <input type="text" name="emailaddress" value={emailaddress} onChange={change} id="" /> <br />
                <label htmlFor="">Nhập tên đăng nhập</label> <br />
                <input type="password" name="passwork" value={passwork} onChange={change} id="" /> <br />
                <label htmlFor="">Nhập tên đăng nhập</label> <br />
                <input type="date" name="created" value={created} onChange={change} id="" /> <br />
                <label htmlFor="">Nhập tên đăng nhập</label> <br />
                <input type="submit" value="Submit" onClick={submit} id="" />
            </form>
            <p>Bạn chưa có tài khoản? <Link to={'/login'}>Tạo nó</Link></p>
        </div>
    )
}
export default AddUser