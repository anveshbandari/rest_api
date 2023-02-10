// const { updateStudent } = require("./controller");

const getStudents = " select * from students join info on students.id=info.id";
// const getStudents="select * from students";

const getStudentsById ="select * from students WHERE id =$1";
const checkEmailExists="select s from students s WHERE s.email=$1";

/*const addStudent = (name, email, age, dob, id, address, contact) => {
    const studentInsert = "INSERT INTO students (name, email, age, dob, id) VALUES ($1, $2, $3, $4, $5)";
    const infoInsert = "INSERT INTO info (id, address, contact) VALUES ($1, $2, $3)";*/
  
    // return Promise.all([
    //   pool.query(studentInsert, [name, email, age, dob, id]),
    //   pool.query(infoInsert, [id, address, contact])
    // ]);
  
  


const addStudent = 
"INSERT INTO students(name,email,age,dob) VALUES ($1,$2,$3,$4)";
//  const addStudent = 
//  "INSERT INTO students(name,email,age,dob,id,address,contact) VALUES ($1,$2,$3,$4,$5,$6,$7)";

const removeStudent=
"delete from students WHERE id =$1";
const updateStudent="UPDATE students SET name =$1 WHERE id =$2";

module.exports={
    getStudents,
    // getinfo,
    getStudentsById,
    checkEmailExists,
    addStudent,
    removeStudent,
    updateStudent,

};



    // select
	// t1.id,t1.name,t1.email,t1.age,t1.dob,t2.address,t2.contact 
	// from students t1
	// join info t2 on t1.id=t2.id;


    /*
    select * from students join info on students.id=info.id;
    */



   /* const addStudent = (name, email, age, dob, id, address, contact) => {
        const studentInsert = "INSERT INTO students (name, email, age, dob, id) VALUES ($1, $2, $3, $4, $5)";
        const infoInsert = "INSERT INTO info (id, address, contact) VALUES ($1, $2, $3)";
      
        return Promise.all([
          pool.query(studentInsert, [name, email, age, dob, id]),
          pool.query(infoInsert, [id, address, contact])
        ]);
      };*/
      