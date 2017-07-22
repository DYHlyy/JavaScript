//递归函数是在一个函数通过名字调用自身的情况下构成的
function factorial(num) {
    if (num<1) {
        return 1;
    }else {
        return num*factorial(num-1);
    }
}
//表面看起来没有问题，但是以下代码会导致他出错
var anotherFactorial=factorial;
factorial=null;
console.log(anotherFactorial(4));   //出错
/**
先将factorial()函数保存在anotherFactorial变量中。然后再将factorial变量设为null
结果指向原始函数的引用只剩下一个。
所以当调用anotherFactorial()时，会指向factorial()，但是这个时候factorial已经不是函数了
需要使用arguments.callee可以解决这个问题
*/
function factorial(num) {
    if (num<1) {
        return 1;
    }else {
        return num*arguments.callee(num-1);
    }
}
//通过使用arguments.callee代替函数名，可以确保无论怎么调用函数都不会出现问题
