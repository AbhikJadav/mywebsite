

var myobj = [];
//var edt;
//document.getElementById("output").innerHTML = JSON.stringify(myobj);
console.log(myobj);
// function validation()
// {
// var nm=document.getElementById('name').value;
// if(nm==null)
// {
//     alert("invalid");
//     //document.getElementById('errnm').innerHTML="Please Enter Your Name";
// }
// }
function add() {

   
        myobj.push({
            id: myobj.length + 1,
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            password: document.getElementById("password").value,
            dob: document.getElementById("dob").value,
            age: document.getElementById("age").value
        });
        
        document.getElementById("name").value = " ";
        document.getElementById("email").value = " ";
        document.getElementById("password").value = " ";
        document.getElementById("dob").value = " ";
        document.getElementById("age").value = " ";
        addtotable();
        // console.log(myobj[0].id);

        // return myobj[0].id;
        
}
function addtotable()
{
    var k = '';
    myobj.forEach((currentValue, index) => {
        var id = index + 1;
         k+=`<tr>
         <td>  ${id}  </td>
         <td>  ${currentValue.name}  </td>
         <td>  ${currentValue.email}  </td>
         <td>  ${currentValue.password}  </td>
         <td>  ${currentValue.dob}  </td>
         <td>  ${currentValue.age}  </td>
         <td><button onclick="edit(${id})">Edit</button><button onclick="dele(${id})">Delete</button></td>
         </tr>`

    });
    document.getElementById("tabledata").innerHTML=k;

   
}
function dele(id){

    
    console.log(id);
    myobj.splice(id,1);
    addtotable();
}



// function edit(id) {

//     let searchid = myobj.findIndex((myobj) => {
//         return myobj.id === id

//     })
//     console.log(myobj[searchid].name);
//     console.log(myobj[searchid].email);
//     console.log(myobj[searchid].password);
//     console.log(myobj[searchid].dob);
//     console.log(myobj[searchid].age);

//     //document.getElementById("output").innerHTML = myobj[searchid].name;
//     //document.getElementById("output1").innerHTML = JSON.stringify(myobj[searchid].age);
// }
//edit(myobj.id);

// function del() {
//     myobj.pop();

//     console.log(myobj);
//     var k = '<tbody>';
//     myobj.forEach((currentValue, index) => {
//         k += '<tr>';
//         k += `<td>${index + 1}</td>`;
//         k += '<td>' + currentValue.name + '</td>';
//         k += '<td>' + currentValue.email + '</td>';
//         k += '<td>' + currentValue.password + '</td>';
//         k += '<td>' + currentValue.dob + '</td>';
//         k += '<td>' + currentValue.age + '</td>';
//         k += '<td> <button onclick="edit();">Edit</button> </td>';
//     });
//     k += '<tbody>';
//     document.getElementById('tabledata').innerHTML = k;
// }

// function update(id) {


//     let searchid = myobj.findIndex((myobj) => {
//         return myobj.id === id

//     });
//     const my = { id: myobj.length + 1, name: 'abhi', email: 'abhi@gmail.com', password: '123', dob: '10-06-1999', age: 33 };
//     const upmyobj = [...myobj];

//     //find index of item to be replaced
//     const targetIndex = myobj.findIndex(p => p.id === myobj[searchid]);

//     //replace the object with a new one.
//     upmyobj[targetIndex] = my;
//     console.log(upmyobj);

// }
