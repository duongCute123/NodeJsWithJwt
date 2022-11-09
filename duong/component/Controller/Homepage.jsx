import useFetch from "../ConfigApi/useFetch"
import axios from "axios"
import { BrowserRouter, NavLink, Link, Routes, Route } from "react-router-dom"
import Edit from "../AddData/upDateCustomer"
const LisCustomer = ({ customer: { _id, email, first_name, last_name } }) => {
    const xoa = () => {
        axios.get('http://localhost:8000/delete/' + `${_id}`)
            .then(console.log('Deleted'))
            .catch(err => console.log(err))
    }
    return (
        <tr >
            <td>{first_name}</td>
            <td>{last_name}</td>
            <td>{email}</td>
            <td>
                <NavLink to={"/edit/"+_id} className="btn btn-primary">Edit</NavLink>
            </td>
            <td>
                <button className="btn btn-danger" onClick={xoa}>Delete</button>
            </td>
            <td>
                <NavLink to={"/detailsinhvien/"+_id} className="btn btn-primary">Detail</NavLink>
            </td>
        </tr>
    )
}
const Tab = () => {
    const url = 'http://localhost:8000/getList'
    const data = useFetch(url)
    return (
        <div className="hi">
            <h3 align="center">Persons List</h3>
            <table className="table table-striped" style={{ marginTop: 20 }}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Company</th>
                        <th>Age</th>
                        <th colSpan="2">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((customer) => (
                            <LisCustomer customer={customer} />
                        ))
                    }
                </tbody>
            </table>
            <Routes>
                <Route path='/edit/:id' element={<Edit />} />
            </Routes>
        </div>
    )
}
const Customer = () => {

    return (
        <div className="customer">
            <h1>Danh sách sinh viên</h1>
            <div className="calldata">
                <Tab />
            </div>
        </div>
    )
}
export default Customer