let a=["hello",1,2,"bye",4,5]
let b=[]
for(i=0;i<a.length;i++){
    if(i%2!=0){
      b.push(a[i])
    }
    
}
console.log(b)