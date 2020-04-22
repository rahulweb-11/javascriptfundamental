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
    if(getStudent === null || undefined)
    {
        return;
    }

    console.log(getStudent);
    var StudentInfo;
    let tableString;
    let studentData;

    getStudent.forEach(element => {
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
