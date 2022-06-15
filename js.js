'use strict'

var a = 10;
a +=a;
console.log(a)
console.log(typeof a);

/tinh tong/
const sum = (s1,s2)=>{
  return s1+s2;
}
console.log(sum(2,4))

function Car(name,color){
  this.name=name;
  this.color=color;
  this.run = function(){
    console.log(this)
  }
}
var mercedes = new Car("Mercedes","Black");
console.log(mercedes.run())


const operations = []

for (let i = 0; i < 5; i++) {
  operations.push(() => {
    console.log(i)
  })
}
for (const operation of operations) {
  operation()
}

const courseName = 'Javascript';
const courseName2 = 'PHP';
const description = `Course Name: ${courseName} \nCourse Name: ${courseName2}`;

console.log(description);

{
  function sum(a,b){
    return a+b;
  }
}
console.log(sum(3,6))

const counter1 = makeCounter();

console.log(counter1());

function makeCounter(){
  let couter = 0;
  return increase
  function increase(){
    return ++couter 
  }

}

var courses = [
  {
    id:1,
    name:'Javascript',
    coin:0
  },
  {
    id:2,
    name:'PHP',
    coin:0
  },
  {
    id:3,
    name:'Python',
    coin:250
  }
];
var newCourse = courses.map(
  (course)=>{
    // console.log(course)
    return{
      id: course.id,
      name : 'Khoa hoc: ${course.name}',
      coin: course.coin
    };
  }
);
console.log(newCourse)

