import React, { useState } from "react";
import './index.css';
import Todolist from "./Todolist";
const App = () => {
    const [inputlist, setInputlist] = useState("");
    const [Items, setItems] = useState([]);

    const itemevent = ({target:{value}}) => {
        setInputlist(value);
    }
    const listofItems = () => {
        if(inputlist!=="")
        {

        setItems((oldItems) => {
            return [...oldItems, inputlist]
        })

        setInputlist("");
        }
        
    }
    const deleteitem = (id) => {
        console.log("delete",id);
        setItems((oldItems) => {
            return oldItems.filter((arrelem,index) => {
                return index !== id;
            });
        });
    };
    return (
        <>
            <div className="main_div">
                <div className="center_div">
                    <h1 className="heading">To Do List</h1>
                    <div className="myitems">

                        <input type="text" className="input" placeholder="Add an Item" value={inputlist} onChange={itemevent} />
                        <button className="addbtn" onClick={listofItems}>+</button>
                    </div><br />
                    <hr />
                    <div className="list">
                        <ul>
                            {Items.map((itemval, index) => {
                                return <Todolist
                                    key={index}
                                    id={index}
                                    text={itemval}
                                    onSelect={deleteitem}
                                />
                            })}
                        </ul>
                    </div>
                </div>


            </div>
        </>
    );
}
export default App;