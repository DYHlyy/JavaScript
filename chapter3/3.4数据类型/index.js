//3.4.1 typeof操作符
var message="some String";
alert(typeof(message)); //String
alert(typeof 95);   //number

//3.4.2 Undefined操作符
var message;
alert(message==undefined);  //true

//PS:
var message;//声明message变量但没有赋值
//没有声明下面的变量
//var age;
alert(message);  //undefined
alert(age); //产生错误，因为没有声明该变量

//对于未声明的变量只有一种操作，即typeof
var message;
//没有声明下面的变量
//var age;
alert(typeof message);  //undefined
alert(typeof age);  //undefined

//3.4.3 Null类型
/**
Null类型是一个只有一个值的数据类型，这个值是null，
从逻辑的角度来看,null表示的是一个空对象指针，因而在使用tyoeof检测时会返回“object”
*/
var car=null;
alert(typeof car);  //object
//PS:如果定义的变量准备用于保存对象，应该将变量初始化为null
//事实上，undefined是派生自null

//3.4.4 Boolean类型
//boolean 只有两个值 true和false，并且区分大小写
//即true和false表示真假，True和False只是标识符
//PS:虽然boolean只有两个值，但是所有的类型的值都有与这两个Boolean的值等价的值
//只需调用转型函数Boolean(),如下例：
var message="Hello World";
var messageAsBoolean=Boolean(message);
alert(typeof messageAsBoolean); //boolean

//3.4.5 Number类型
//1.整数
//十进制
var intNum=55;//十进制整数
//八进制   第一位必须是0，然后是八进制数字序列（0~7），如果超出范围，前面的0将会被忽略，并将后面的数字当作十进制进行解析
var octalNum1=070;   //八进制的56
var octalNum2=079;   //无效的八进制数值——解析为79
var octalNum3=08;    //无效的八进制数值——解析为8
//十六进制字面值的前两位必须是0x,后面跟任何十六进制数字（0-9及A~F）
//其中字母A~F可以大写，也可以小写，如下：
var hexNum1=0xA;    //十六进制的10
var hexNum2=0x1f;   //十六进制的31
//PS:在进行算数计算的时候，所有的八进制和十六进制表示的数值最终都会被转换成十进制数值
//PS:在javascript中可以保存正零（+0）和负零（-0），并被认为是相等的

//2.浮点数值
//要求小数点后至少要有以为数字，小数点前可以没有整数，但是并不推荐这种写法
var floatNum1=1.1;
var floatNum2=0.1;
var floatNum3=.1;   //有效，但不推荐
//如果小数点后没有跟任何数字，将会被作为整数来保存，如果小数点后是0，也会被作为整数来保存
var floatNum1=1.;   //小数点后没有数字——解析为1
var floatNum2=10.0; //小数点后为0，解析为10
//对于极大的数值，可以用e来表示（科学计数法）
var floatNum=3.125e7;   //等于31250000
//极小的数值同上

//由于浮点算数的精度是17位小数，所以计算时的精度远不如整数，如下：
var num1=0.1;
var num2=0.2;
alert(num1+num2);   //0.30000000000000004
//所以千万不要做以下测试：
if(num1+num2==0.3){
    alert("you got 0.3");
}

//3.数值范围
//由于内存的限制ECMAScript并不能保存世界上所有的数值
//最小值保存在Number.MIN_VALUE中，大多数浏览器中，该值为5e-324
//最大值保存在Number.MAX_VALUE中，大多数浏览器中，该值为1.7976931348623157e+308

//4.NaN
//即非数值，是一个特殊的数值，用于表示一个本来要返回数值的操作数未返回数值的情况
//例如：在其他语言中，任何数除以0都会报错，但在javascript中会返回NAN，因而不会影响其他代码的执行
//PS：1.凡是涉及NAN的操作都会返回NAN
//    2.NAN与任何值都不相等，包括NAN本身
//isNAN()函数用于判断里面的参数是否“不是数值”，如：
alert(isNaN(NaN));  //true
alert(isNaN(10));   //false(10是一个数值)
alert(isNaN(*blue*));   //false
alert(isNaN("123"));    //false
alert(isNaN("blue"));   //true

//5.数值转换
//有3个函数可以把非数值转换成数值：Number(),parseInt()和parseFloat()
