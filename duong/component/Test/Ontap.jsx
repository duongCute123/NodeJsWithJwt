import { Component } from "react"
import React from "react"
import { useState, useEffect } from "react"
//Kiếm thức về prop mà tôi biết
const OnProps = (props) => {
    return (
        <div className="hello">
            <h1>
                Hello các bạn đến với khóa học {props.data.title}
            </h1>
            <h2>Tên tôi là {props.data.firstname}</h2>
        </div>
    )
}
//Kiến thức về state là:
class Onstate extends React.Component {
    state = {
        count: 0
    }
    onchange = () => {
        this.setState({ count: this.state.count + 1 })
    }
    render() {
        const count = this.state.count
        return (
            <div className="tsta">
                <h1>{count}</h1>
                <input type="button" value="Cộng" onClick={this.onchange} />
            </div>
        )
    }
}
const Ontap = (props) => {
    const data = {
        title: "React js",
        firstname: "Nguyễn Văn Dương"
    }
    return (
        <div className="helo">
            <OnProps data={data} />
            <Onstate />
        </div>
    )
}
export default Ontap