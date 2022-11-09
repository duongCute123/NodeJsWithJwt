import React from "react";
import { Component } from "react";
import { useState } from "react";
const Todolist = () => {
    const lists = [{
        id: 1,
        title: "React Js"
    },
    {
        id: 2,
        title: "HTML"
    }, {
        id: 3,
        title: "CSS"
    }

    ]
    const [checked, setChecked] = useState([])
    const change=(id)=>{
        setChecked()
    }
    return (
        <div className="todolist">
            <input type="text" name="" placeholder="Nhập công việc muốm thêm vào" onChange={()=>setChecked(checked)} id="" />
            <input type="button" value="Add" />
            <ul>
                {lists.map((list)=>
                <div>
                    <input type="radio" key={list.id} value={list.title} onChange={change(list.id)}/>{list.title}

                </div>
                )}
            </ul>
        </div>
    )
}
export default Todolist