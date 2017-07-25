//动态脚本
//创建一个<script>节点的DOM的代码
var script=document.createElement("script");
script.type="text/javascript";
script.src="client.js";
document.body.appendChild(script);


//建议将整个过程用函数进行封装
function loadScript(url) {
    var script=document.createElement("script");
    script.type="text/javascript";
    script.src=url;
    document.body.appendChild(script);
}
//然后调用该函数来加载外部js文件
loadScript("client.js");


//动态样式
//使用DOM代码创建出这个元素
var link=document.createElement("link");
linnk.rel="stylesheet";
link.type="text/css";
link.href="style.css";
var head=document.getElementByTagName("head")[0];
head.appendChild(link);//link必须添加到head元素中
//建议将整个过程用函数的方式封装起来
function loadStyles(url) {
    var link=document.createElement("link");
    linnk.rel="stylesheet";
    link.type="text/css";
    link.href="url";
    var head=document.getElementByTagName("head")[0];
    head.appendChild(link);
}
//然后调用该函数来加载外部css文件
loadStyles("style.css");
