function Stringcompression(a){

var temp="";
var result=""

for(i=0;i<a.length;i++){
    temp=a[i]
     var count=1;
    for(j=i+1;j<a.length;j++){
       
        if(temp==a[j]){
            count=count+1
            i++
        }
        else{
            break;
        }
 
    } result=result+temp+count
    
    
}
console.log(result)
}
Stringcompression("aabcccccaaa")
