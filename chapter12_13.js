var a= 45
var b ="lowercase"
var c ="UPPERCASE"

if(parseInt(a)){
  console.log("a = 45  is number")
}
else{
  console.log("its not number")
}

if(b===b.toLowerCase()){
  console.log("its is  lowercase")
  
}
else{
  console.log("its is not  lowercase")
  
}

if(c===c.toUpperCase()){
  console.log("its is  uppercase")
  
}
else{
  console.log("its is not uppercase")
  
}


var num = parseInt(prompt("enter number"))

if(num<0){
  console.log("its negative")
}

else if(num==0){
  console.log("its zere")
}

else if(num>0){
  console.log("its positive")
}
var cpasword="hasban"

while(true){
  var tpas =prompt("pasword");
  if(cpasword==tpas){
    alert("pasword corret")
    break
  }
  else{
    alert("not correct")
  }
}



var  greeting; 
var  hour  =  19;
if (hour  <  18)  { 
  console.log(greeting =  "Good  day"); 
}
else{ 
  console.log(greeting =  "Good  evening");
} 