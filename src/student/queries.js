// const { updateStudent } = require("./controller");

const getStudents = "select * from students";
const getStudentsById ="select * from students WHERE id =$1";
const checkEmailExists="select s from students s WHERE s.email=$1";
const addStudent = 
"INSERT INTO students(name,email,age,dob) VALUES ($1,$2,$3,$4)";
const removeStudent=
"delete from students WHERE id =$1";
const updateStudent="UPDATE students SET name =$1 WHERE id =$2";

module.exports={
    getStudents,
    getStudentsById,
    checkEmailExists,
    addStudent,
    removeStudent,
    updateStudent,

};