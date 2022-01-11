var data = [];
// localStorage.clear();
// addtotable();
const add = () => {
    document.getElementById("errnm").innerHTML = "";
    var nm = document.getElementById("name").value;
    var age = document.getElementById("age").value;

    data.push(
        {
            id: data.length + 1,
            name: nm,
            age: age,
        }
    )

    const setdata = JSON.stringify(data);
    localStorage.setItem("userdata", setdata);

    document.getElementById("name").value = " ";
    document.getElementById("age").value = " ";
    addtotable();
    // console.log(setdata);
    // console.log(data);
}
const addtotable = () => {
    const getdata = JSON.parse(localStorage.getItem("userdata"));
    // console.log(JSON.parse(getdata));
    // console.log(getdata);
    // if(getdata!=null)
    // {
        var table = " ";
        getdata.forEach((value, index) => {
            var id = index + 1;
            table += `<tr>
                <td>${id}</td>
                <td>${value.name}</td>
                <td>${value.age}</td>
                <td><button>Edit</button><button onclick="del(${id})">Delete</button></td>
            </tr>`
        });
        // console.log(table);
        document.getElementById("root").innerHTML = table;
    // }
    // else
    // {
    //     document.getElementById("root").innerHTML = "No Data Found";
    // }
}
const del=(id)=>{
    const getdata = JSON.parse(localStorage.getItem("userdata"));
    // console.log(getdata);
    getdata.splice(id,1);
    console.log(getdata);
    const setdata = JSON.stringify(data);
    localStorage.setItem("userdata", setdata);
    
    addtotable();
}