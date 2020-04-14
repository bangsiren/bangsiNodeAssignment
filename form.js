var http = require('http');
var formidable = require('formidable');
var student = require('./student');
var fs = require('fs')

http.createServer( function(req,res) {

     if(req.url === '/cresteStudent' && req.method.toLowerCase() === 'post'){
         console.log('Create Student');
         form = formidable.IncomingForm();
         form.parse(req, (error, fields, images)=>{
           if(error) throw error;
           console.log(JSON.stringify(images));
           
           var newStudent = new student.newStudent();
           newStudent.name = fields.student_name;
           newStudent.age = fields.age;
           newStudent.level = fields.level;
           newStudent.course = fields.course;
           newStudent.gender = fields.gender;
           newStudent.email = fields.email;
           newStudent.id = fields.id;
           newStudent.picture = images.student_picture.name;
           newStudent.amountPaid = fields.amountPaid;

           
           console.log(newStudent.saveStudentToFile())
           res.end('Student Created')
           console.log(newStudent.getStudentInformation())
           console.log('Has ' + newStudent.name + ' completed fees ? ' + newStudent.getTottalFeePaid());
           console.log(newStudent.deleteStudent())
          });
        
     }else{
         res.writeHead(200,{'content-Type': 'text/html'});
         res.write('<form action ="cresteStudent" method = "post" enctype = "multipart/form-data">');
         res.write('<label for ="student_picture">Student Picture</label><br>');
         res.write('<input type = "file" id = "student_picture" name = "student_picture"><br><br>');
         res.write('<label for ="student_name">Name</label><br>');
         res.write('<input type = "text" id = "student_name" name = "student_name"><br><br>');
         res.write('<label for ="age">Age</label><br>');
         res.write('<input type = "text" id = "age" name = "age"><br><br>');
         res.write('<label for ="level">Level</label><br>');
         res.write('<input type = "number" id = "level" name = "level"><br><br>');
         res.write('<label for ="email">Email</label><br>');
         res.write('<input type = "email" id = "email" name = "email"><br><br>');
         res.write('<label for ="course">Course</label><br>');
         res.write('<input type = "text" id = "course" name = "course"><br><br>');
         res.write('<label for ="id">ID</label><br>');
         res.write('<input type = "number" id = "id" name = "id"><br><br>');
         res.write('<label for ="amountPaid">Amount Paid</label><br>');
         res.write('<input type = "number" id = "amountPaid" name = "amountPaid"><br><br>');
         res.write('<label for ="gender">Gender</label><br>');
         res.write('<input type = "text" id = "gender" name = "gender"><br><br>');
         res.write('<input type = "submit">');
         res.write('</form>')
     }
     
}).listen('2400', (er)=>{
    if(er){
        console.log(er)
    }else{
        console.log('Sever runing on port: 2400')
    }
    
})