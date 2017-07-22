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


 //继承       ——慕课网的例子
 function Person(name,age) {
     this.name=name;
     this.age=age;
 }
 Person.prototype.hi=function(){
     console.log("My name is "+this.name+" My age is "+this.age);
 }
 Person.prototype.LEG_NUM=2;
 Person.prototype.ARM_NUM=2;
 Person.prototype.walk=function(){
     console.log(this.name+" is walking");
 }
 function Student(name,age,className) {
     Person.call(this,name,age);
     this.className=className;
 }
 Student.prototype=Object.create(Person.prototype);
 Student.prototype.construct=Student;
 Student.prototype.hi=function() {
     console.log("My name is "+this.name+" My age is "+this.age+" My className is "+this.className);
 }
 Student.prototype.learn=function(subject){
     console.log(this.name+" is studying "+subject+"at"+this.className+" " );
 }
 //Test
 var lyy=new Student("lyy",19,"Class 1 Grade 3");
 lyy.hi();  //My name is lyy My age is 19 My className is Class 1 Grade 3
 console.log(lyy.LEG_NUM);  //2
 lyy.walk();    //lyy is walking
 lyy.learn();   //lyy is studying undefinedatClass 1 Grade 3
