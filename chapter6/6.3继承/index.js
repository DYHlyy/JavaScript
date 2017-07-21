//ECMAScript只支持实现继承，并且主要依靠原型链实现
//原理：利用原型链让一个引用类型继承另一个引用类型的属性和方法
function SuperType() {
    this.property=true;
}
SuperType.prototype.getSuperValue=function(){
    return this.property;
}
function SubType(){
    this.subproperty=false;
}

//继承了SuperType
SubType().prototype=new SuperType();
SubType().prototype.getSubValue=function(){
    return this.subproperty;
};
 var instance=new SubType();
 console.log(instance.getSuperValue());     //true
