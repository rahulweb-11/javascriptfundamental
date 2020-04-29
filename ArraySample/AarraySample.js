class Student{
 constructor(firstName)
 {
    this.Name = firstName
    this.Marks = new Marks()
 }

}

//Create Marks Class

class Marks{

    constructor(hindi,english,math)    
    {
        this.Hindi = hindi;
        this.English =english;
        this.Math = math;
    }
}

let student = new Student("Amit");
student.Marks = {Hindi:23,English:20,Math:20};
console.log("Student Information",student);