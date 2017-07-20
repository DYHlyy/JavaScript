//函数申明语法
function sum(num1, num2) {
    return num1 + num2;
}
//函数表达式语法
var sum = function(num1, num2) {
    return num1 + num2;
}
//区别：
/**
解析器会率先读取函数申明，并使其在执行任何代码之前可用
而函数表达式得等到解析器执行到他所在的代码行，才会真正被解释执行
如下代码：
*/
console.log(sum(10,10));
function sum(num1,num2){
    return num1+num2;
}
//以上代码可以运行，结果为20
console.log(sum(10,10));
var sum=function(num1,num2){
    return num1+num2;
}
//以上代码不可以运行

//------------分隔线----------------//

//作为值的函数
function callSomeFunction( someFunction,someArgument) {
    return someFunction(someArgument);
}
function add10(num) {
    return num+10;
}
var result1=callSomeFunction(add10,10);
console.log(result1);
function getGreeting(name) {
    return "hello "+name;
}
var result2=callSomeFunction(getGreeting,"Nicolas");
console.log(result2);

//函数属性和方法
//每个函数都包含两个属性:length和prototype
//length表示函数希望接收的命名参数的个数
function sayName(name) {
    console.log(name);
}
function sum(num1,num2) {
    return num1+num2;
}
function sayHi() {
    console.log("hi");
}
console.log(sayName.length);    //1
console.log(sum.length);        //2
console.log(sayHi.length);       //0
