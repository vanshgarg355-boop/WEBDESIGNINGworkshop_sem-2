console.log("Hello world");
// document.write("hello world")

//DATA TYPES

//1. PRIMITIVE TYPES
// NUMBER TYPE
var num=10;
console.log(num);
console.log(typeof(num));
 //BOOLEAN TYPE
num = false;
console.log(num);
console.log(typeof(num));

 //FLOAT TYPE
 X = "VANSH";
console.log(X);
console.log(typeof(X));

//UNDEFINED
let y;
console.log(y);
console.log(typeof(y));

//NULL
let z=null;
console.log(z);
console.log(typeof(z));

//symbol(it's new) - They are use to represnt the unique values
const sym1=Symbol(4);
console.log(sym1);
const sym2=Symbol(4);
console.log(sym2);
if(sym1==sym2){
    console.log("true");
}
else{
    console.log("false")
}
console.log(typeof(sym1));


//2. REFRENCE DATA TYPES

//FUNCTION
var sayhello=function(){
    alert('hello');
}

//ARRAY
var numberarray=[1,2,3];
var aniamals=("dog","cat","lion");

//object
name:"vansh garg";
age:51;
title:'44th president';

//OPREATORS

// arithmetic expression is a combination of ..
//  operands (values, variables, etc.)
//   operators (+ - * / %)
//    that can be evaluated to a value
//     ex. y = x + 5;

//students = students + 1; 
//students = students - 1;
 //students = students * 2;
 //students = students / 2;
 //let extraStudents = students % 2; 
 //students += 1;
//students -= 1;
 //students *= 2; 
//students /= 2;


let result = (1+14)*(2);
console.log(result);

// conditional switch case
// let day=8;
// switch(day){
//     case 1:
//         console.log("Monday");
//     break;
//      case 2:
//         console.log("Tuesday");
//     break;
//      case 3:
//         console.log("Wednesday");
//     break;
//      case 4:
//         console.log("Thrusday");
//     break;
//      case 5:
//         console.log("Friday");
//     break;
//      case 6:
//         console.log("Saturday");
//     break;
//      case 7:
//         console.log("Sunday");
//     break;
//     default:console.log("error")
// }


let marks=45;
if(marks>=50){
    console.log("PASS");
}else {
console.log("FAIL");
}


//LOOPS
//1-FOR
//2-WHILE
//3-DO WHILE
console.log("For");
for(let i=1;i<=5;i++){
    console.log(i)
}

console.log("While");
let I=1;
while(I<=5){
    console.log(I);
    I++;
}

console.log("Do-while");
let j=1;
do{
    console.log(j);
    j++;}
    
while(j<=5)
