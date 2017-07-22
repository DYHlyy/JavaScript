//任何在函数中定义的变量，都可以认为是私有变量，因为在函数外部无法访问这些变量
//把有权访问私有变量和私有函数的公有方法称为特权方法
function MyObject() {
    //私有变量和私有函数
    var privateVariable=10;
    function  privateFunction() {
        return false;
    }
    //特权方法
    this.publicMethod=function() {
        privateVariable++;
        return privateFunction();
    }
}


//利用私有和特权成员，可以隐藏那些不应该被直接修改的数据
function Person(name) {
    this.getName=function() {
        return name;
    };
    this.setName=function(value) {
        name=value;
    };
}
var person=new Person("Nicholas");
console.log(person.getName());  //Nicholas
person.setName("Greg");
console.log(person.getName());  //greg

//以对象字面量的方式创建单例对象
var singleton={
    name:value,
    method:function() {
        //do something
    }
};

//模块模式通过为单利添加私有变量和特权方法能够使其得到增强
var singleton=function(){
    //私有变量和私有函数
    var privateVariable=10;
    var privateFunction(){
        return false;
    }
    //特权/公有方法和属性
    return {
        publicProperty:true,
        publicMethod:function(){
            privateVariable++;
            return privateFunction();
        }
    };
}();
