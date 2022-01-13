import React,{useState} from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
const Todo = () => {
    const [inputdata,setinputData]=useState("");
    const [items,setItems]=useState([]);//use to store inputdata items
    const addItem=()=>{
        // console.log(items);
        if(inputdata===""){
            alert("Please Enter Data");

        }
        else {
            const allInputdata={id:new Date().getTime().toString(),name:inputdata};
            setItems([...items, allInputdata]);
            setinputData("");
        }
    }
    const deleteItem=(id)=>{
        // console.log(items);
        const updateddata=items.filter((value)=>{
            return id != value.id;
        })
        setItems(updateddata);
        console.log(id);
    }
    const editItem=(id)=>{
        console.log(id);
    }
    const removeAll=()=>{
        setItems([]);
        // console.log(items);
    }
    return (
        <div className="main_div">
            <div className="center_div">
                <div className="input_div">
                    <div className="input-group mb-3">
                          <input type="text" className="form-control" placeholder="Enter Your Name" aria-label="name"
                               aria-describedby="basic-addon1" value={inputdata}
                                 onChange={(event)=>setinputData(event.target.value)}/>

                    </div>

                    <button type="button" className="btn btn-outline-dark" onClick={addItem}>Submit</button>
    <br/><br/>
                    <div className="show_div">
                        {items.map((value,index)=>{
                                return(
                                    <div className="Item_div" key={value.id}>
                                        {/*<h3>{key:index}</h3>*/}
                                        <p>{value.name +" "}<button onClick={()=>editItem(index)}>Edit</button>{"  "}<button onClick={()=>deleteItem(value.id)}>Delete</button></p>
                                    </div>
                                )
                            })}

                        <br/><br/>
                    </div>
                    <div className="show_div">
                        <button type="button" className="btn btn-outline-dark" onClick={removeAll}>Remove All</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Todo;

