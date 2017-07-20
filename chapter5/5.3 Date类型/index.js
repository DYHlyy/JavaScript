//未传参数的话，该对象会获取到当前日期和时间
var now=new Date();
console.log(now);   //Thu Jul 20 2017 13:59:08 GMT+0800 (中国标准时间)

//Date()方法接受一个表示日期的字符串参数
//若要为2017年7月20日创建一个日期对象，可以使用以下代码:
var someDate=new Date(Date.parse("July 20,2017"));
//等价于：var someDate=new Date("July 20,2017");
console.log(someDate);


//日期格式化的方法
/**
toDateString()以特定于实现的格式显示星期几、月、日和年
toTimeString()以特定与实现的格式显示时、分、秒和时区
toLocalDateString()以特定于实现的格式显示星期几、月、日和年
toLocalTimeString()以特定于实现的格式显示时、分、秒
toUTCString()以特定于实现的格式完整的UTC日期
*/
