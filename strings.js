//  reverse a hello word without using methods'
let a="Brahmeswari Gamidi"
let reverse="";
for(i=a.length-1;i>0;i--){
    reverse=reverse+a[i]
    
}
console.log(reverse)

// oytput: idimaG irawsemhar



// remove spaces between a sentence'


 let word="       Brahmeswari             Gamidi   ";

console.log(word.trim())

 let space=' ';
let sum="";

for(i=0;i<word.length;i++){
if(word[i]==space)
    {

    }

else{
    sum+=word[i];
}
}console.log(sum)


