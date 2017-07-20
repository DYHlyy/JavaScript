function howManyAgrs() {
    alert(arguments.length);
}
howManyAgrs("string", 45); //2
howManyAgrs(); //0
howManyAgrs(12); //1

//-----------------分割线------------------//
function doAdd() {
    if (arguments.length == 1) {
        alert(arguments[0] + 10);
    } else if (arguments.length = 2) {
        alert(arguments[0] + arguments[1]);
    }
}
doAdd(10); //20
doAdd(30, 20); //50

//-----------------分割线------------------//
function daAdd(num1, num2) {
    arguments[1] = 10;
    alert(arguments[0] + num2);
}
daAdd(10, 5);

//-----------------分割线------------------//
//ECMAScript函数不能像传统意义上那样实现重载
function addSomeNumber(num) {
    return num + 100;
}

function addSomeNumber(num) {
    return num + 200;
}
alert(addSomeNumber(100));  //300
