// **Array Intersection**: Write a function that returns the elements common to multiple arrays.

let a=[1,2,3,4]
let b=[2,7,8,1]
let c=[]

for(i=0;i<a.length;i++){
    for(j=0;j<b.length;j++){
        if(a[i]==b[j]){
            c.push(a[i])
        }
    }
}
console.log(c)