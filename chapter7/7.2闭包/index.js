//闭包是指有权访问另一个函数作用域中的变量的函数。
//创建闭包的常见方式，就是在一个函数内部创建另一个函数
function createCompareFunction(propertyName) {
    return function(object1,object2){
        //下面两行是内部函数的代码，访问了外部函数中的变量propertyName
        var value1=object1[propertyName];
        var value2=object2[propertyName];
        if(value1<value2){
            return -1;
        }else if(value1>value2){
            return 1;
        }else{
            return 0;
        }
    }
}
