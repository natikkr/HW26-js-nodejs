let student = require('./student');
let teacher = require('./teacher');

let newStudent = new student.Student('Vasia', 25, 'male', 'basketball');
let newTeacher = new teacher.Teacher('Mr.Petrov', 45, 'male', 'Fishing', 'Algorithms');
console.log(newStudent, newTeacher)