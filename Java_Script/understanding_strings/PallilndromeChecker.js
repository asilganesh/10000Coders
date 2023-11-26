//Pallindrome Checker

function Pallindrome(name){
var count=0;

for(i=0;i<name.length;i++){
    if(name[i]==name[name.length-1]){
        count=count+1
    }
}

if(count==name.length){
    console.log("It is a Pallindrome")
}
else{
    console.log("Not a Pallindrome")
}
}
Pallindrome("ganesh")