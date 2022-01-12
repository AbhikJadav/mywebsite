var data = [];
if(localStorage.getItem("userdata")!==null)
{
    data = JSON.parse(localStorage.getItem("userdata"));
        var table = " ";
        data.forEach((value, index) => {
            var id =index;
            table += `<tr>
                <td>${id+1}</td>
                <td>${value.name}</td>
                <td>${value.age}</td>
                <td><button onclick="edit(${id})">Edit</button><button onclick="del(${id})">Delete</button></td>
            </tr>`
        });
        // console.log(table);
        document.getElementById("root").innerHTML = table;
    
}
let upid="";
// localStorage.clear();
// addtotable();
const add = () => {
    document.getElementById("errname").innerHTML = "";
    document.getElementById("errage").innerHTML = "";
    var nm = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    if(nm==" ")
    {
        document.getElementById("errname").innerHTML="Please Enter Your Name";
    }
    else if(age==" ")
    {
        document.getElementById("errage").innerHTML="Please Enter Your Age";
    }
    else
    {
        if(upid=="")
        {
            data.push(
                {
                    id: data.length + 1,
                    name: nm,
                    age: age,
                }
            )

        const setdata = JSON.stringify(data);
        localStorage.setItem("userdata", setdata);

        }
        else
        {
            data = JSON.parse(localStorage.getItem("userdata"));
            console.log(upid);
            var nm = document.getElementById("name").value;
            var age = document.getElementById("age").value;
            data[upid] ={id:upid+1,name:nm,age:age};
        // console.log(data[upid].name);
            // console.log(data);
            const setdata = JSON.stringify(data);
            localStorage.setItem("userdata", setdata);
            // document.getElementById("data").innerHTML = "Data Updated ";
            addtotable();
        }
        addtotable();
        document.getElementById("name").value = " ";
        document.getElementById("age").value = " ";
   

    }
    // console.log(setdata);
    // console.log(data);
}
const addtotable = () => {
    // const getdata = JSON.parse(localStorage.getItem("userdata"));
    data = JSON.parse(localStorage.getItem("userdata"));
    // console.log(JSON.parse(getdata));
    // console.log(getdata);
    // if(getdata!=null)
    // {
        var table = " ";
        data.forEach((value, index) => {
            var id =index;
            table += `<tr>
                <td>${id+1}</td>
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
const del=(id)=>{
    data = JSON.parse(localStorage.getItem("userdata"));
    // console.log(id);
    data.splice(id,1);
    // console.log(getdata);
    const setdata = JSON.stringify(data);
    localStorage.setItem("userdata", setdata);
    
    addtotable();

}
const edit=(id)=>{
    data = JSON.parse(localStorage.getItem("userdata"));
    document.getElementById("name").value=data[id].name;
    document.getElementById("age").value=data[id].age;
    console.log(id);
       addtotable();
    upid=id;    
}
const search=()=>{
    let search=document.getElementById("search");
    let trlist=document.querySelectorAll("tr");
    Array.from(trlist).forEach((item)=>{
        let searchtxt=item.getElementsByTagName("td")[0].innerText;
        let searchtextbox=search.value;
        let re=new RegExp(searchtextbox,'gi');
        if(searchtxt.match(re))
        {
            console.log(item);
        }
        else
        {
            console.log("no data");
        }
    })
}
