//ECMAScript数组的大小是可以动态调整的，数组的每一项可以保存任何类型的数据
//创建数组的方式有两种
//第一种：
var colors = new Array();
//括号中可以传入长度，如20，也可传入元素项
//第二种：数字字面量表示法
var colors = ["red", "blue", "green"]; //创建一个包含3个字符串的数组
var names = []; //创建一个空的数组
var values = [1, 2, ] //不允许这种语法存在

//数组的length属性并不是只读的，可以通过设置这个属性，从数组的末尾移除项，
//或者向数组中添加新项
var colors = ['red', 'blue', 'green']; //创建一个包含3个字符串的数组
colors.length = 2; //设置这个属性后，会移除最后一项
console.log(colors[2]); //undefined

var colors = ['red', 'blue', 'green'];
colors[99] = 'black';
console.log(colors.length); //100

//检测数组
if (Array.isArray(value)) {
    //do something
}

//join方法
var colors = ['red', 'blue', 'black'];
console.log(colors); //["red", "blue", "black"]
console.log(colors.join(",")); //red,blue,black
console.log(colors.join("||")); //red||blue||black

//栈方法
//push()方法和pop()方法
//队列方法
//push()方法和shift()方法

//重排序方法
var values = [1, 2, 3, 4, 5];
values.reverse(); //反转数组项
console.log(values); // [5, 4, 3, 2, 1]

var values = [0, 1, 5, 10, 15];
values.sort(); //排序
console.log(values); // [0, 1, 10, 15, 5]

//一个简单的比较函数
function compare(value1, value2) {
    if (value1 < value2) {
        return -1;
    } else if (value1 > value2) {
        return 1;
    } else {
        return 0;
    }
}
var values = [0, 1, 5, 10, 15];
values.sort(compare); //排序
console.log(values); //[0, 1, 5, 10, 15]

//操作方法
//1.concat()方法
//没有参数的情况下，会返回一个复制过后的数组副本
//如果传递给concat()方法的是一个或多个数组，则该方法会将新的参数添加到副本数组中
var colors = ['red', 'green', 'blue'];
var colors2 = colors.concat('yello', ['black', 'brown']);
console.log(colors); //["red", "green", "blue"]
console.log(colors2); // ["red", "green", "blue", "yello", "black", "brown"]

//2.slice方法   slice()方法并不会影响原数组
var colors = ['red', 'green', 'blue', 'yello', 'purple'];
var colors2 = colors.slice(1); //一个参数，返回从该参数位置到末尾的所有项
var colors3 = colors.slice(1, 4); //两个参数，返回起始位置和结束位置之间的项，但不包括结束位置项
console.log(colors2); // ["green", "blue", "yello", "purple"]
console.log(colors3); //["green", "blue", "yello"]
/**
PS:如果slice()方法的参数中有一个附属，则用数组长度加上该数来确定响应的位置。
    例如：在一个包含5项的数组上调用slice(-2,-1)与调用slice(3,4)得到的结果相同，
    如果结束位置小于起始位置，则返回空数组
*/

//3.splice()方法  主要用途是向数组的中部插入项
//有以下三个方式：
//删除    参数：要删的第一项和要删除的项数
//splice(0,2)   会删除数组中的前两项
//插入    参数：起始位置、0（要删除的项数）、要插入的项
//splice(2,0,'red','green')    从当前数组的位置2开始插入字符串
//替换    参数：起始位置、要删除的项数、要插入的项，插入的项数不必与删除的项数相等
//splice(2,1,'red','green')     会删除当前数组位置2的项，然后从位置2开始插入字符串
//实例代码：
var colors = ['red', 'green', 'blue'];
var removed = colors.splice(0, 1);
console.log(colors); //green,blue
console.log(removed); //red

removed = colors.splice(1, 0, 'yellow', 'orange');
console.log(colors); //green,yellow,orange,blue
console.log(removed); //空数组

removed = colors.splice(1, 1, 'red', 'purple');
console.log(colors); //green,red,purple,orange,blue
console.log(removed); //yellow

//位置方法
var numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];
console.log(numbers.indexOf(4)); //3
console.log(numbers.lastIndexOf(4)); //5
console.log(numbers.indexOf(4, 4)); //5
console.log(numbers.lastIndexOf(4, 4)); //3

//迭代方法
//every()方法     所有项均满足条件才返回true
var numbers=[1,2,3,4,5,4,3,2,1];
var everyResult=numbers.every(function(item,index,array){
    return (item>2);
});
console.log(everyResult);   //false
//some方法        只要有一项满足条件就返回true
var someResult=numbers.some(function(item,index,array){
    return (item>2);
});
console.log(someResult);    //true

//filter方法  对数组中的每一项运行给定函数，返回该函数会返回true的项组成的数组
var numbers=[1,2,3,4,5,4,3,2,1];
var filterResult=numbers.filter(function(item,index,array) {
    return (item>2);
});
console.log(filterResult);  // [3, 4, 5, 4, 3]

//map()方法   对数组中的每一项运行给定的函数，返回每次函数调用的结果组成的数组
var numbers=[1,2,3,4,5,4,3,2,1];
var mapResult=numbers.map(function(item){
    return item*2;
});
console.log(mapResult);     // [2, 4, 6, 8, 10, 8, 6, 4, 2]

//forEach()方法   对数组的每一项运行传入的函数，没有返回值
var numbers=[1,2,3,4,5,4,3,2,1];
numbers.forEach(function(item){
    //do something
});


//缩小方法
//reduce()和reduceRight()这两个方法都会迭代数组的所有项，然后构建一个最终返回的值
//reduce()从第一项开始,reduceRight()从最后一项开始
