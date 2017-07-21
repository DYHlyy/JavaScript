//属性类型
//要修改属性默认的特性，必须使用ES5中Object.defineProperty()方法
//接收三个参数：属性所在的对象、属性的名字和一个描述对象
//描述符的属性必须是:configurable/enumerable/writable和value
//设置其中的一个值或者多个值，可以修改对应的特性值，例如：
var person={};
Object.defineProperty(person,"name",{
    writable:false,
    value="Nicholas"
});
console.log(person.name);   //Nicholas
person.name="Greg";
console.log(person.name);   //Nicholas


//访问器属性     ----getter/setter函数
var book={
    //_year前的下划线是一种常用的记号，用于表示只能通过对象方法访问的属性
    _year:2004,
    edition:
};
//访问器属性只能通过defineProperty方法访问
Object.defineProperty(book,"year",{
    get:function(){
        return this._year;
    },
    set:function(newValue){
        if(newValue>2004){
            this._year=newValue;
            this.edition+=newValue-2004;
        }
    }
});
book.year=2005;
console.log(book.edition);  //2

//定义多个属性
var book={};
Object.defineProperties(book,{
    _year:{
        value:2004
    },
    edition:{
        value:1
    },
    year:{
        get:function() {
            return this._year;
        },
        set:function(newValue){
            if(newValue>2004){
                this._year=newValue;
                this.edition+=newValue-2004;
            }
        }
    }
});
//读取属性的特性
var descriptor=Object.getOwnPropertyDescriptor(book,"_year");
console.log(descriptor.value);      //2004
console.log(descriptor.confi gurable);  //false
console.log(typeof descriptor.get);     //undefined
var descriptor=Object.getOwnPropertyDescriptor(book,"year");
console.log(descriptor.value);      //undefined
console.log(descriptor.enumerable); //false
console.log(typeof descriptor.get); //function
