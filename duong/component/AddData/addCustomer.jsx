import { useState, useEffect } from "react";
import axios from 'axios';
const AddCustomer = () => {

  const list = {
    email: "",
    first_name: "",
    last_name: ""
  }
  const [data, setData] = useState(list)
  const change = (e) => {
    const { name, value } = e.target
    setData({ ...data, [name]: value })
  }
  const submit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:8000/create', data)
      .then(res => console.log(res.data));
    console.log(data)
  }
  const { email, first_name, last_name } = data
  return (
    <div className="hello">
      <h1>Nhập thông tin người dùng</h1>
      <form action="" method="POST">
        <label htmlFor="">Nhập email vào</label> <br />
        <input type="text" onChange={change} name="email" value={email} id="" /> <br />
        <label htmlFor="">Nhập first name vào</label> <br />
        <input type="text" onChange={change} name="first_name" value={first_name} id="" /> <br />
        <label htmlFor="">Nhập lastname vào</label> <br />
        <input type="text" onChange={change} name="last_name" value={last_name} id="" /> <br />
        <label htmlFor=""></label> <br />
        <input type="submit" value="Submit" onClick={submit} name="" id="" />
      </form>
    </div>
  )
}
export default AddCustomer;
