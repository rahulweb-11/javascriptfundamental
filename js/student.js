var students = [];


var SaveStudent = function(){
//Syntax for READING data from localStorage:
    var findStudents = JSON.parse(window.localStorage.getItem("AboutStudentsInfo"));
//Syntax for READING data from localStorage:    
    if(findStudents === null || findStudents === undefined)
    {
        alert("Empty Student");
        findStudents = [];
    }
    //Create New Student Instance 
    var newStudent = new StudentClass();

    //Set Values for student instance
    newStudent.FirstName = document.getElementById("txtFirstName").value;
    newStudent.LastName = document.getElementById("txtLastName").value;
    newStudent.Phone = document.getElementById("txtPhone").value;
    newStudent.Email = document.getElementById("txtEmail").value;
    newStudent.Address = document.getElementById("txtAddress").value;

    //Added newly created student instance into student collection of arrary locally
    //students.push(newStudent);
    findStudents.push(newStudent);

    //Store entire student information persisted or save in browser
    window.localStorage.setItem("AboutStudentsInfo",JSON.stringify(findStudents));

}

var LoadStudentInformation = function(){

    var getStudent = JSON.parse(window.localStorage.getItem("AboutStudentsInfo"));
    if(getStudent == null || undefined)
    {
        return;
    }

    console.log(getStudent);
    var StudentInfo;
    let tableString;
    let studentData;

    getStudent.forEach(element => {
        if(element !== null )
            
        studentData+= `<tr>
                            <td>
                                ${element.FirstName}
                            </td>
                            <td>
                                ${element.LastName}
                            </td>
                            <td>
                                ${element.Email}
                            </td>
                            <td>
                                ${element.Address}
                            </td>
                            <td>
                                ${element.Phone}
                            </td>
                            <td><a href="#" >Edit</a></td>
                            <td><a href="#" onclick="deleteStudent('${element.FirstName}');">Delete</a></td>
                            
                      </tr>`
    });

    tableString = `<table class=table>
                        <thead>
                            <tr>    
                                <th>
                                    First Name:                                
                                </td>
                                <td>
                                    Last Name:                                
                                </td>
                                <td>
                                    Email:                                
                                </td>
                                <td>
                                    Address:                                
                                </td>
                                <td>
                                    Phone:                                
                                </td>
                            </tr>
                        </thead>
                        <tbody>
                        ${studentData}
                        </tbody>
                  </table>`
    
    document.getElementById("studentInfo").innerHTML= tableString;
   
}



class StudentClass{

    constructor(firstName,lastName,address,email,phone){
        
        this.FirstName = firstName,
        this.LastName =  lastName,
        this.Email = email,
        this.Address = address,
        this.Phone = phone

    };

    GetStudent = function() {
        return "Hi";
    }

    get

    }

var deleteStudent = function(name){
    alert(name);
    var getStudent = JSON.parse(window.localStorage.getItem("AboutStudentsInfo"));

   
 var item = getStudent.indexOf(name);

for (let index = 0; index < getStudent.length; index++) {
    const element = getStudent[index];
    if(element === null)
        continue;

    if(element.FirstName == name)
    {
        console.log("Matching Student Found");
        delete getStudent[index];
       
        console.log(getStudent.length);

        var filterRecord = getStudent.filter(d=>d !== null);
        console.log("Filter",filterRecord);
        if(getStudent.length > 0)
        {
            console.log("deleted");
            
            window.localStorage.setItem("AboutStudentsInfo",JSON.stringify(getStudent));
            window.location.reload();
        
        }
        else
        {
            window.localStorage.removeItem("AboutStudentsInfo");
        }
        break;
    }
    
}
            
       
  //alert(`Are you sure you want to delete student ${name}`);
}