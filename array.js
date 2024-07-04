


let arr =[10,5,7,14,9]
max=arr[0];
// console.log(max)
for(i in arr){
    if(arr[i]>max){
        
        max=arr[i]
    }
    
}
console.log(max)

// o/p 14


let arr=[11,4,2,7,6]
min=arr[0];
for(i=0;i<arr.length;i++){
    if(arr[i]<min){
        min=arr[i];
    }

}
console.log(min)

// o/p 2



let arr1=[12,4,5,33,44,18]
sum=0
for(i=0;i<arr1.length;i++){
    if(arr1[i]%2==0)
        sum=sum+arr1[i]
}
console.log(sum)


// o/p 78






                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
let num=[1,4,7,22,,24,19]
let odd=[];
for(i=0;i<num.length;i++){
    if(num[i]%2==1){
    odd.push(num[i])
        
    }
}
console.log(odd)

o/p [1,7,19]


let arr3=[11,55,22,88,33];
max1=arr3[0];
max2=arr3[0];                                                        
for(i=0;i<arr3.length;i++){
    if(arr3[i]>max1){
        max2=max1;
        max1=arr3[i];
    }  
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
console.log(max2)
