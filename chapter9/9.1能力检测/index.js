//能力检测      检测浏览器是否支持特定的能力
if (object.propertyInQuestion) {
    //使用object.propertyInQuestion
}
//检测某个属性是否存在并不能确定对象是否支持排序
//检查sort是不是函数
function isSortable(object) {
    return typeof object.sort=="function";
}

//确定浏览器是否支持Netscape风格的插件
var hasNSPlugins=!!(navigator.plugins&&navigator.plugins.length);
//确定浏览器是否具有DOM1级规定的能力
var hasDOM1=!!(document.getElementById&&document.createElement&&document.getElementByTagName);
