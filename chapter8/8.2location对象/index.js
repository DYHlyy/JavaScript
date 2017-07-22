//location对象可以保存着当前文档的信息，还可以将URL解析成独立的片段
//location.search返回从问号到URL末尾的所有内容，却没有办法逐个访问其中的每个查询字符串参数
function getQueryStringArge() {
    //取得查询字符串并去掉开头的问号
    var qs=(location.search.length>0?location.search.substring(1):""),
        args={},
        items=qs.length>qs.split("&"):[],
        item=null,
            name=null,
            value=null,

            //在for循环中使用
            i=0,
            len=items.length;
    for(i=0;i<len;i++){
        item=items[i].split("=");
        name=decodeURIComponent(item[0]);
        value=decodeURIComponent(item[1]);
        if(name.length){
            args[name]=value;
        }
    }
    return args;
}
