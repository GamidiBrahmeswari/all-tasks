var students = {
    100: "xyz",
    102: "pqr",
    103: "mno",
  };
//   for (key in students) {
//       //keys//
//     console.log(key);
  
//   }
  
  
  for (key in students) {
  
      //values//
    console.log(students[key]);
    
  }
  


//   100
//   102
//   102

//   xyz
//   pqr
//   mno






let friend={
    'one':"Apple",
    'two':"mango",
    'three':"grapes"

}
for([key,values] of Object.entries(friend)){
    console.log(key)
}

for([key,values] of Object.entries(friend)){
    console.log(values)
}
 
