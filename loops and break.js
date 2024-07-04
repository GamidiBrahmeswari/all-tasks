
let n=[1,2,3,4,5,6];

var add=0;
for(i=0;i<=n.length;i++){
    if(n[i]%2==0){
    add=add+n[i];
}
}
console.log(add);
// o/p  12
/////////////////////////////////////////////////////////////////////////

let k=1;
do{
    if(k!=5)
    console.log(k);
    k++;
}while(k<=10)

// o/p 1
//     2
//     3
//     4
//     6
//     7
//     8
//     9
//     10


///////////////////////////////////////////////////////////////


let num=10;
do{
    if(num%2==1){
        console.log(num);
        
    }
    else{
        console.log("skipping even number");
        
    }
    num--
    
}while(num>=1)

//     skipping even number
//     9
//     skipping even number
//     7
//     skipping even number
//     5
//     skipping even number
//     3
//     skipping even number
//     1

 let arr=[10,20,30,40]
let sum=0;
for(i=0;i<arr.length;i++){
    sum=sum+arr[i]; 
    
}
let avg=sum/arr.length;
if(avg<50){
    console.log(avg)
}
while(avg>50){
    console.log("average is large");
}

// o/p 25

let rows=4;
for(i=0;i<rows;i++){
    star=" ";
    for(j=0;j<=i;j++){
        star=star+" "+"*";
    }
    console.log(star);
}
// *
// * *
// * * *
// * * * *
 let str="mom";
 let reverse="";
 for(i=str.length-1;i>=0;i--){
    reverse+=str[i];
 }
 console.log(reverse)
 if(str==reverse){
    console.log("it is a palindrome")
 }
 else{
    console.log("it is not a pallindrome")
 }

//  mom
// it is a palindrome

 let string="father";
 let reversestring="";
 for(i=string.length-1;i>=0;i--){
    reversestring+=string[i];
 }
 console.log(reversestring)
 if(string==reversestring){
    console.log("it is a palindrome")
 }
 else{
    console.log("it is not a pallindrome")
 }
//  rehtaf
// it is not a pallindrome
