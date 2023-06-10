// The find() method returns the value of the first element that passes a test.


let Students = [{id:1,name:"alex"}, {id:2,name:"John"}];

let result = Students.find(student => {
  return student.id === 1
})
console.log(result);
