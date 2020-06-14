var a = prompt("Enter city name")

if(a=="karachi"){
  document.write("welcome to city of light</br>")
}
var b = prompt("Enter gendet")
if(b=="male"){
  document.write("welcome sir</br>")
}
else if(b=="female"){
  document.write("welcome mam</br>")
  
}

var color = prompt("Enter color","red,yellow, green")
if(color=="red"){
  document.write("stop</br>")
}

else if(color=="yellow"){
  document.write("start your car</br>")
}
else if(color=="green"){
  document.write("let's go</br>")
}


var fule = prompt("Enter fule","litter")
if(fule<0.25){
  document.write("please refuel your car</br>")
}

var a1  = 4; if (++a1 === 5){ alert("given  condition  for variable a  is  true"); } 

var  b1  =  82; if (b1++ ===  83){ alert("given  condition  for variable b  is  true"); 
  
} 
var c1  = 12; if (c1++ === 13){ alert("condition  1 is  true"); 
  
} 
if  (c1 ===  13){ alert("condition  2 is  true"); }
if (++c1 <  14){ alert("condition  3 is  true"); } 
if(c1 === 14){ alert("condition  4 is  true");
} 
var materialCost  =  20000;
var laborCost  =  2000; 
var totalCost  = materialCost  +  laborCost;
if (totalCost  === laborCost  +  materialCost){ alert("The cost  equals"); } 
if (true){ alert("True"); } 
if (false){ alert("False"); } 
if("car" < "cat"){ alert("car is  smaller  than  cat"); } 

var sub1 = parseInt(prompt("subject 1 mark obtain"))
var sub2 = parseInt(prompt("subject 2 mark obtain"))
var sub3 = parseInt(prompt("subject 3 mark obtain"))

document.write("</br>")
document.write(sub1)
document.write("</br>")
document.write(sub3)
document.write("</br>")
document.write(sub2)
document.write("</br>")
var tmark = 300

var tsub = sub1+sub2+sub3

var per =Math.round((tsub/tmark)*100,4)

if (per >= 80){
  document.write(`grade A¹</br>percentage = ${per}</br>`)
}
else if (per <= 80 || per >= 70){
  document.write(`grade A</br>percentage = ${per}</br>`)
}

else if (per <= 70 || per >= 60){
  document.write(`grade B</br>percentage = ${per}</br>`)
}
else if (per <=60 || per >= 50){
  document.write(`grade A¹</br>percentage = ${per}</br>`)
}
else{
  document.write(`Fail</br>percentage = ${per}</br>`)
}

