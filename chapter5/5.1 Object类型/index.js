//创建object实例的方式有以下两种：
//第一种   new操作符+Object构造函数
var person=new Object();
person.name="Nicholas";
person.age=29;
//第二种   对象字面量表示法，使用逗号分隔属性
var person={
    name:"Nicholas",
    age:29
};
//PS:在使用对象字面量语法时，属性名也可以使用字符串，如下：
var person={
    "name":"Nicholas",
    "age":29,
    5:true  //这里的数值属性名会自动转换成字符串
};
