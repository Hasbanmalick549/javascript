for(i=0 ; i<11 ; i++){
    document.write(i+ "</br>")
}

var a =parseInt(prompt("enter num"))
var b =parseInt(prompt("enter length"))

for(i=1 ;i<b+1; i++){
  document.write(`${a}X${i} = ${a*i}</br>`)
}

var fruits=["apple","banana","orange"]
for (var y = 0; y < fruits.length; y++) {
  document.write(fruits[y]+"</br>")
}
var ia =fruits.indexOf("apple")
var ib =fruits.indexOf("banana")
var io =fruits.indexOf("orange")


  document.write(fruits[0]+ " index of is "+ia+ "</br>")
  document.write(fruits[1]+ " index of is "+ib+ "</br>")
  document.write(fruits[2]+ " index of is "+ io+ "</br>")
  
  
  
for (var c = 1; c < 11; c++) {
  document.write(c+" , ")
}
  document.write("</br>")
for (var c = 10; c >0; c--) {
  document.write(c +" , ")
}
  document.write("</br>")
for (var c = 0; c <11; c=c+2) {
  document.write(c +" , ")
}
  document.write("</br>")
for (var c = 1; c <12; c=c+2) {
  document.write(c +" , ")
}


search = prompt("search")
var bakery =["cookies","bread","rusk"]

if(search==bakery[0]){
  console.log(`yes we have ${bakery[0]} in index of ${bakery.indexOf("cookies")}`)
}

if(search==bakery[1]){
  console.log(`yes we have ${bakery[1]} in index of ${bakery.indexOf("bread")}`)
}
if(search==bakery[2]){
  console.log(`yes we have ${bakery[2]} in index of ${bakery.indexOf("rusk")}`)
}