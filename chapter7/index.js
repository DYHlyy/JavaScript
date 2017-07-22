//定义函数的方式有两种：函数声明和函数表达式
//函数声明
function functionName(arg0,arg1,arg2) {
//函数体
}
//PS:在执行代码之前会先读取函数声明
//可以把函数声明放在调用他的语句之后
sayHi();
function sayHi() {
    alert("Hi");
}
//上面的式子不会报错

//函数表达式     也叫匿名函数
var functionName=function(arg0,arg1,arg2){
    //函数体
};
//使用前必须先赋值，否则会报错
sayHi();
var sayHi=function() {
    alert("Hi");
}
//上面的式子会报错

//把函数当成值来使用的情况下，都可以使用匿名函数
