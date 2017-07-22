//检测插件
function hasPlugin(name) {
    name=name.toLowerCase();
    for(var i=0;i<navigator.plugins.length;i++){
        if(navigator.plugins[i].name.toLowerCase().indexOf(name)>-1){
            return true;
        }
    }
    return false;
}

//检测flash
alert(hasPlugin("Flash"));
//检测QuickTime
alert(hasPlugin("QuickTime"));
