//BOM的核心对象是window，他表示浏览器的一个实例
//在浏览器中，window对象既是通过javascript访问浏览器的一个接口，又是一个global对象

//因为window对象同时扮演着ECMAScript中的Global对象，因此在全局作用中声明的变量、函数都会编程windo对戏那个的属性和方法
var age=29;
function sayAge() {
    console.log(this.age);
}
console.log(window.age);    //29
sayAge();                   //29
window.sayAge();            //29

//全局变量不能通过delete操作符删除，而直接在window对象上定义的属性可以
var age=29;
window.color="red";
delete window.age;
delete window.color;
console.log(window.age);    //29
console.log(window.color);  //undefined

//用以下代码可以跨浏览器取得窗口左边和上边的位置
var leftPos=(typeof window.screenLeft=="number")?window.screenLeft:window.screenX;
var topPos=(typeof window.screenTop=="number")?window.screenTop:window.screenY;

//使用moveTo()和moveBy()可以将窗口精确的移动到一个新的位置
//将窗口移动到屏幕左上角
window.moveTo(0,0);
//将窗口向下移动100px
window.moveBy(0,100);
//将窗口移动到(200,300)
window.moveTo(200,300);
//将窗口向左移动50px
window.moveBy(-50,0);

//获取页面市口的大小
var pageWidth=window.innerWidth,
    pageHeight=window.innerHeight;
if(typeof pageWidth!="number"){
    if(document.compatMode=="CSS1Compat"){
        pageWidth=document.documentElement.clientWidth;
        pageHeight=document.documentElement.clientHeight;

    }else{
        pageWidth=document.body.clientWidth;
        pageHeight=document.body.clientHeight;
    }
}
console.log(pageWidth);
console.log(pageHeight);


//使用window.open()方法既可以导航到一个特定的URL，也可以打开一个新的浏览器窗口
//这个方法接收4个参数：要加载的URL、窗口目标、一个特性字符串
//和一个表示新页面是否取代浏览器历史记录中当前加在页面的布尔值
window.open("http://wwww.baidu.com" ,"topFrame");
//上面的语句等同于：
//<a href="http://wwww.baidu.com" target="topFrame"></a>

//间歇调用和超时调用
//超时调用需要使用window对象的setTimeout()方法，
//接受两个参数：要执行的代码和时间(以毫秒为单位)
//不建议传递字符串
setTimeout("alert('Hello World')",100);
//推荐的调用方式
setTimeout(function() {
    alert("Hello World!");
},1000);

//设置超时调用
var timeoutId= setTimeout(function () {
    alert("Hello World!");
}, 1000);
clearTimeout(timeoutId);    //取消超时调用
//只要是在指定事件尚未过去之前调用clearTimeout()，就可以完全取消超时调用

//间歇调用会按照指定的时间间隔重复执行代码，直至间歇调用被取消或者页面被卸载
//不建议传递字符串
setInterval("alert('Hello World!')",1000);
//推荐的调用方式
setInterval(function () {
    alert("Hello World");
}, 1000);

//要取消尚未执行的间歇调用，可以使用clearInterval()方法传入相应的间歇调用ID
//!!! 取消间歇调用的重要性远远高于取消超时调用
//实例:
var num=0;
var max=10;
var intervalId=null;
function incrementNumber() {
    num++;
    //如果执行次数达到了max设定的值，则取消后续尚未执行的调用
    if(num==max){
        clearInterval(intervalId);
        alert("Done");
    }
}
intervalId=setInterval(incrementNumber,500);
//上面的例子，变量num每半秒递增一次，当递增到最大值时会取消先前设定的间歇调用

//系统对话框
alert("Hello World!");
confirm("Are you Ok?");
//为了确定用户是点了ok还是cancel，检查confirm()的返回值
//true表示点击了ok，false表示点击了cancel
if(confirm("Are you Ok?")){
    alert("I am glad you are ok");
}else{
    alert("I am sorry to hear that");
}
prompt("What's your name?","Michael");
//如果用户点击了ok按钮，该函数会返回文本输入域
var result=prompt("What is your name","");
if(result!=null){
    alert("Welcome,"+result);
}
