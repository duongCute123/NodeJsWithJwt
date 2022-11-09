import axios from "axios";
import React from "react";
import { Component } from "react";
import { useState, useEffect } from "react";
const InFoSinhVien = (props) => {
    const [SinhVien, setSinhVien] = useState([])
    useEffect(() => {
        setSinhVien(props.detail)
    }, [props.detail])
    return (
        <div className="InfoPage">
            <h1>Lấy thông tin của 1 sinh viên nhá bạn</h1>
            <h1>{SinhVien.email}</h1>
            <p>{SinhVien.first_name}</p>
            <p>{SinhVien.last_name}</p>
        </div>
    )
}
export default InFoSinhVien