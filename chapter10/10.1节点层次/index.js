//document对象表示整个HTML页面，是window对象的一个属性
/**
具有以下特征：
nodeType为9
nodeName为"#document"
nodeValue为null
parentNode为null
ownerDocument为null
*/

var html = document.documentElement; //取得对<html>的引用
var body = document.body; //取得对<body>的引用
var doctype = document.doctype; //取得对<!DOCTYPE>的引用

var url = document.URL; //取得完整的URL
var domain = document.domain; //取得域名
var referrer = document.referrer; //取得来源页面的URL
console.log(url);
console.log(domain);
console.log(referrer);
//以上3个属性中，只有domain是可以设置的

var getId = document.getElementById("someId");
var imgs = document.getElementByTagName("img"); //返回包含零个或多个元素的NodeList
console.log(imgs.length); //输出图像的数量
console.log(imgs[0].src); //输出第一个图像元素的src特性
console.log(imgs.item(0).src); //输出第一个图像元素的src特性

document.anchors //包含文档中所有带name特性的<a>元素
document.applets //包含文档中所有的<applet>元素
document.forms //包含文档中所有的<form>元素
document.links //包含文档中所有带href特性的<a>元素

//取得特性
//操作特性的DOM方法主要有3个
//getAttribute()    setAttribute()  removeAttribute()
var div = document.getElementById("myDiv");
console.log(div.getAttribute("id"));
console.log(div.getAttribute("class"));

//创建文本节点
//使用document.createTextNode()创建新文本节点
var textNode = document.createTextNode("<strong>Hello</strong>World!");
//下面的代码会创建一个<div>元素并向其中添加一条消息
var element = document.createElement("div");
element.className = "message";
var textNode = document.createTextNode("Hello world!");
element.appendChild(textNode);
document.body.appendChild(element);

//Comment类型
//注释在DOM中是通过Comment类型来表示的
