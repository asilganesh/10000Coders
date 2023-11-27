
let a=["hello","ooook"]

var b=[]
var temp=""
for(i=0;i<a.length;i++){
 temp=""
 for(j=0;j<a[i].length;j++){
     if(j%2==0){
         temp=temp+a[i][j]   }
 }
    b.push(temp)
}
console.log(b)