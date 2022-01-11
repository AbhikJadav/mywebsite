import React from "react";

const Todolist = ({onSelect,id,text}) => {
    return (
        <>
            <div className="todo_style">
                <button onClick={() => {
                    onSelect(id)
                }}>X</button> <li> {text}</li>
            </div>
        </>
    )
}
export default Todolist;


