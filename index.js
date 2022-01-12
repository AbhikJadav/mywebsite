var getdata = [];
// if(localStorage.getItem("userdata")!=null)
// {
//     getdata=JSON.parse(localStorage.getItem("userdata"));
// }
// localStorage.clear();
// addtotable();


/* use for form refresh to stop.*/
// const signupForm = document.getElementById('nameForm');

// signupForm.addEventListener('submit', function(event,id) {
//     add(event,id);
// });
let upid = "";

const add = () => {
    // document.write(event);
    // console.log('Test :>> ',event);

    // event.preventDefault();  //use for form.
    // if(upid===-1)
    // {
    // console.log(upid);
    // document.getElementById("errnm").innerHTML = "";
    var nm = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    if (nm == "") {
        document.getElementById("errnm").innerHTML = "Please enter your name";
    }
    else if (age == "") {
        document.getElementById("errage").innerHTML = "Please enter your age";
    }
    else {
        if(upid=="")
        {
            let getdata = JSON.parse(localStorage.getItem("userdata"));
            // console.log(getdata);
            if(getdata==null)
            {
                const setgetdata = JSON.stringify(getdata);
                localStorage.setItem("userdata", setgetdata);
            }
            else
            {
                getdata = JSON.parse(localStorage.getItem("userdata"));
                getdata.push(
                    {
                        id: getdata.length + 1,
                        name: nm,
                        age: age,
                    }
                )
        
                const setdata = JSON.stringify(getdata);
                localStorage.setItem("userdata", setdata);
        
              
                document.getElementById("data").innerHTML = "Data Added ";
            }
        }
        else
        {
            const getdata = JSON.parse(localStorage.getItem("userdata"));
            console.log(upid);
            var nm = document.getElementById("name").value;
            var age = document.getElementById("age").value;
        
            getdata[upid] = [{nm,age}];
            console.log(getdata);
            const setdata = JSON.stringify(getdata);
            localStorage.setItem("userdata", setdata);
            document.getElementById("data").innerHTML = "Data Updated ";
        }
        document.getElementById("name").value = " ";
        document.getElementById("age").value = " ";
        addtotable();
        //return id;
        // return false;
        // console.log(setdata);
        // console.log(data);
    }
    //   }
    // else
    // {
    //     alert("hi");
    // }
}
const addtotable = () => {
    const getdata = JSON.parse(localStorage.getItem("userdata"));
    // console.log(JSON.parse(getdata));
    // console.log(getdata);
    // if(getdata!=null)
    // {
    var table = " ";
    getdata.forEach((value, index) => {
        var id = index;
        table += `<tr>
                <td>${id + 1}</td>
                <td>${value.name}</td>
                <td>${value.age}</td>
                <td><button onclick="edit(${id})">Edit</button><button onclick="del(${id})">Delete</button></td>
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
const del = (id) => {
    const getdata = JSON.parse(localStorage.getItem("userdata"));
    // console.log(id);
    getdata.splice(id, 1);
    // console.log(getdata);
    const setdata = JSON.stringify(getdata);
    localStorage.setItem("userdata", setdata);

    addtotable();
}
const edit = (id) => {
    const getdata = JSON.parse(localStorage.getItem("userdata"));
    document.getElementById("name").value = getdata[id].name;
    document.getElementById("age").value = getdata[id].age;
    `<button>Update</button>`
    upid = id;
    addtotable();
}
const update = (id) => {
    const getdata = JSON.parse(localStorage.getItem("userdata"));
    console.log(id);
    var nm = document.getElementById("name").value;
    getdata[id] = nm;
    const setdata = JSON.stringify(getdata);
    localStorage.setItem("userdata", setdata);
    // console.log("update");
    addtotable();
}