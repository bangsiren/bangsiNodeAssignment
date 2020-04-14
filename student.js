var fs = require('fs')
exports.newStudent = class Student {
    constructor(name, picture, age, id, email, course, level, amountPaid, gender,){
        this.age = age;
        this.name = name;
        this.picture = picture;
        this.amountPaid = amountPaid;
        this.course = course;
        this.email = email;
        this.level = level;
        this.id = id;
        this.gender = gender;
    }
    getStudentInformation(){
        return JSON.stringify(this)
    };
    saveStudentToFile(){
      fs.writeFile(this.name + ".txt", this.getStudentInformation(), (error)=>{
          if(error) throw error;
          
      });
    };

    
    getTottalFeePaid(amountPaid){
        let totalFee = 1000000;
        if(totalFee == amountPaid){
            true;
        }else{
            return false;
        }
    };
    deleteStudent(){
       
    };

};