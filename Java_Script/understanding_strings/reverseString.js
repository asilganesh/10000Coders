//Reverse String

function revStr(name){
var count="";
for(i=name.length-1;i>=0;i--){
    count=count+name[i]
}
console.log(count)
}
revStr("ganesh")