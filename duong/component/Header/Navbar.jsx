import React from "react";
import { Component } from "react";
import AddCustomer from "../AddData/addCustomer";
import Customer from "../Controller/Homepage";
import Edit from "../AddData/upDateCustomer";
import AddUser from "../User/user";
import Login from "../User/Login";
import DetailPage from "../DetailPage/DetailPage";
import ShopCart from "../ShopCart/ShopCart";
import {
    BrowserRouter, Routes, Router,
    Route,
    Switch,
    NavLink,
    Redirect,
} from 'react-router-dom'
const Navbar = () => (
    <ul>
        <li>
            <NavLink to='/home'>HomePage</NavLink>
        </li>
        <li>
            <NavLink to='/contact'>Contact</NavLink>
        </li>
        <li>
            <NavLink to='/suport'>Suport</NavLink>
        </li>
        {/* <li>
            <NavLink to='/login'>Login</NavLink>
        </li> */}
    </ul>
)
const Navs = () => {
    return (
        <div className="rouetr">
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/home" element={<Customer />} />
                    <Route path="/contact" element={<AddCustomer />} />
                    <Route path="/suport" element={<AddUser />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/edit/:id" element={<Edit />} />
                    <Route path="/detailsinhvien/:id" element={<DetailPage />} />
                    <Route path="/shopcart" element={<ShopCart />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default Navs