const pool =require('../../db');
const queries =  require('./queries');

const getStudents=(req,res)=>{
    pool.query(queries.getStudents,(error,results)=>{
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

// const getinfo=(req,res)=>{
//     pool.query(queries.getinfo,(error,results)=>{
//         if (error) throw error;
//         res.status(200).json(results.rows);
//     });
// };

const getStudentsById = (req,res)=>{
    const id =parseInt(req.params.id);
    pool.query(queries.getStudentsById,[id],(error,results)=>{
        if(error) throw error;
        res.status(200).json(results.rows);
    });
};

const addStudent=(req,res)=>{
    const{name,email,age,dob}=req.body;
    // check if email exists
    pool.query(queries.checkEmailExists,[email],(error,results)=>{
        if (results.rows.length){
            res.send("email already exists.");
        }
        else
        {
               // add students to db
        pool.query(queries.addStudent,
            [name,email,age,dob],
            (error,result)=>{
            if(error) throw error;
            res.status(200).send("students created successfully!");
        })
        }
     
    });

};

/*pool.query(studentInsert, [name, email, age, dob, id]),
    //   pool.query(infoInsert, [id, address, contact])*/


/*const addStudent=(req,res)=>{
    const{name,email,age,dob}=req.body;
    // check if email exists
    pool.query(queries.checkEmailExists,[email],(error,results)=>{
        if (results.rows.length){
            res.send("email already exists.");
        }
        else
        {
               // add students to db
        pool.query(queries.addStudent,
            [name,email,age,dob],

            (error,result)=>{
            if(error) throw error;
            res.status(200).send("students created successfully!");
        })
        }
     
    });

};*/



const removeStudent=(req,res)=>{
    const id =parseInt(req.params.id);

    pool.query(queries.getStudentsById,[id],(error,results)=>{
        const noStudentFound = !results.rows.length;
        if(noStudentFound){
            res.send("student does not exit in  the database");
        }
       else
        {
            pool.query(queries.removeStudent,[id],(error,results) => {
                if (error) throw error;
                res.status(200).send("student removed successfully.");
            });
            
        }
        
    });

};
const updateStudent=(req,res)=>{
    const id= parseInt(req.params.id);
    const { name } =req.body;
    pool.query(queries.getStudentsById,[id],(error,results)=>{
        const noStudentFound =!results.rows.length;
        if(noStudentFound){
            res.send("student doesnot exit in database");
        }
        else{
            pool.query(queries.updateStudent,[name,id],(error,results)=>{
                if (error) throw error;
                res.status(200).send("student updated successfully");
            });
        }
       
    });
};

module.exports={
    getStudents,
    // getinfo,
    getStudentsById,
    addStudent,
    removeStudent,
    updateStudent,

};