console.log('Question :- return the sorted array and second largest and minimum in an array')
let a=[6,,8,5,4,3,1];
for(let i=0;i<a.length-1;i++){
    for(let j=i+1;j<a.length;j++){
           if(a[i]>a[j]){
             let swap;
             swap=a[i];
             a[i]=a[j];
             a[j]=swap;
           }
    }
}
console.log(a);
console.log(a[1]);
console.log(a[a.length-2]);

console.log("reverse order " +a.reverse());

 

