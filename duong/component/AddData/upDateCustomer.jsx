import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";
import { Component } from "react";
import useFetch from "../ConfigApi/useFetch";
import { useParams } from "react-router-dom";
const Edit = () => {
  const { id } = useParams()
  console.log(id);
  const list = {
    email: "",
    first_name: "",
    last_name: ""
  }
  const [forms, setForms] = useState(list)
  useEffect(() => {
    axios.get('http://localhost:8000/edit/' + id)
      .then(res => {
        setForms(res.data)
      })
      .catch(err => console.log(err))
  }, [])
  const change = (e) => {
    const { name, value } = e.target
    setForms({ ...forms, [name]: value })
  }
  const upDate = (e) => {
    e.preventDefault()
    axios.post('http://localhost:8000/update/' + id, forms)
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
  }
  const { email, first_name, last_name } = forms
  return (
    < div className="container-fluid" >
      <h1 style={{ textAlign: "center" }}>Cập nhật thông tin của khách hàng nhé</h1>
      <form action="" method="post">
        <div className="form-group">
          <label htmlFor="">Nhập email muốn chỉnh sửa</label>
          <input type="text" name="email" onChange={change} value={email} className='form-control' id="" placeholder="Nhập email" />
        </div>
        <div className="form-group">
          <label htmlFor="">Nhập firsname muốn chỉnh sửa</label>
          <input type="text" name="first_name" onChange={change} value={first_name} className='form-control' id="" placeholder="Nhập first_name" />
        </div>
        <div className="form-group">
          <label htmlFor="">Nhập lastname muốn chỉnh sửa</label>
          <input type="text" name="last_name" onChange={change} value={last_name} className='form-control' id="" placeholder="Nhập last_name" />
        </div>
        <label htmlFor=""></label> <br />
        <input type="submit" className="btn btn-primary" onClick={upDate} />
      </form>
    </div >
  )
}
export default Edit

