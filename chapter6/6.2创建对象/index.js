//工厂模式
function createPerson(name, age, job) {
    var o = new Object();
    o.name = name;
    o.age = age;
    o.job = job;
    o.sayName = function() {
        console.log(this.name);
    };
    return o;
}
var person1 = createPerson("Nicholas", 29, "SoftWare Engineer");
var person2 = createPerson("Greg", 27, "Doctor");
//可以无数次的调用这个函数，然后返回一个包含这三个属性一个方法的对象。
//但是这种方法不能解决对象识别的问题（即怎么知道一个对象的类型）

//构造函数模式
function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = function() {
        console.log(this.name);
    };
}
//要创建一个新的对象，必须使用new操作符
var person1 = new Person("Nicholas", 29, "SoftWare Engineer");
var person2 = new Person("Greg", 27, "Doctor");
//该方法与上面的方法不同的是：
//1.没有显示的创建对象
//2.直接将属性和方法赋值给了this对象
//3.没有return语句

//任何函数，只要通过new操作符来调用，他就可以作为构造函数
//任何函数，如果不通过new操作符调用，也就是普通函数
//举例：
//当作构造函数使用
var person = new Person("Nicholas", 29, "SoftWare Engineer");
person.sayName(); //Nicholas
//作为普通函数调用
Person("Greg", 27, "Doctor"); //添加到window
window.sayName(); //Greg
//在另一个对象的作用域中调用
var o = new Object();
Person.call(o, "Kristen", 25, "Nurse");
o.sayName(); //Kristen

//原型模式
//实例：
function Person() {
    Person.prototype.name = "Nicholas";
    Person.prototype.age = 29;
    Person.prototype.job = "SoftWare Engineer";
    Person.prototype.sayName = function() {
        console.log(this.name);
    }
}
var person1=new Person();
person1.sayName();  //Nicholas
var person2=new Person();
person2.sayName();  //Nicholas
console.log(person1.sayName==person2.sayName);  //true

//原型对象
/**
只要创建了一个函数，就会根据一组特定的值为这个函数创建一个prototype属性
，该属性指向函数的原型对象
在默认的情况下，所有的原型对象都会自动获得一个constructor属性，
该属性包含一个只想prototype属性所在函数的指针。
*/

//原型与in操作符
//in 运算符确定对象中是否有名为 property 的属性
// Create an object that has some properties.
var myObject = new Object();
myObject.name = "James";
myObject.age = "22";
myObject.phone = "555 0234";
if ("phone" in myObject){
    document.write ("property is present");
}else{
    document.write ("property is not present");
}
// Output: property is present


//组合使用构造函数模式和原型模式
function  Person(name,age,job) {
    this.name=name;
    this.age=age;
    this.job=job;
    this.friends=['shelby','court'];
}
Person.prototype={
    constructor:Person,
    sayName:function() {
        console.log(this.name);
    }
}
var person1=new Person("Nicholas",29,"SoftWare Engineer");
var person2=new Person("Greg",27,"Doctor");
person1.friends.push("van");
console.log(person1.friends);       //["shelby", "court", "van"]
console.log(person2.friends);       //["shelby", "court"]
console.log(person1.friends==person2.friends);  //false
console.log(person1.sayName==person2.sayName);  //true

//动态原型模式    寄生构造函数模式    稳妥构造函数模式略
