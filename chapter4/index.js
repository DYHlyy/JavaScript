//该函数的作用域链包含两个对象：
//她自己本身的变量对象（即arguments对象）和全局环江的变量对象
var color='blue';
//函数内部可以直接访问函数外部变量
function changeColor() {
    if(color=='blue'){
        color='red';
    }else{
        color='blue';
    }
}
changeColor();
alert(color);   //red

//-------------------分隔线---------------------//

//此外，在局部作用域中定义的变量可以在局部环境中与全局变量互换使用
var color="blue";
function changeColor() {
    var anotherColor="red";
    function swapColors() {
        var tempcolor=anotherColor;
        anotherColor=color;
        color=tempcolor;
        //这里可以访问color,anotherColor和tempColor
        console.log("color is "+color);
        console.log("anotherColor is "+anotherColor);
    }
    swapColors();
}
//这里只能访问color
changeColor();

//-------------------分隔线---------------------//

//没有块级作用域
if(true){
    var color="blue";
}
console.log(color);     //blue
//PS:在javascript中，if语句中的变量申明会将变量添加到当前的执行环境
//在使用for语句时尤其要注意：
for(var i=0;i<10;i++){
    console.log(++i);
}
console.log(i);
/**对与有块级作用域的语言来说，
for语句初始化变量的表达是所定义的变量只会存在与循环的环境之中。
但是在javascript中，由for语句创建的变量i即使在for循环执行结束后
也依旧会存在于循环外部的执行环境中。
*/

//-------------------分隔线---------------------//

//查询标识符
var color="blue";
function getColor() {
    return color;
}
console.log(getColor());    //blue
//上段代码的搜索过程为：
/**
    调用getColor()时会引用变量color。为了确定变量的值，将开始
    搜索过程。
    先搜索getColor()的变量对象，查找是否包含一个名为color的标识符
    ，如果没有，搜索下一个变量对象（全局环境的变量对象），找到后结束搜索。
    在这个过程中，如果存在一个局部的变量定义，则会停止搜索，不会进入亮一个变量对象
    如下：
*/
var color="blue";
function getColor() {
    var color="red";
    return color;
}
console.log(getColor());    //red
