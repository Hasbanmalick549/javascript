var a = 10

document.write(`result</br>`)
document.write(`the value of a is ${a}</br>`)
document.write(`</br>`)

a = ++a

document.write(`the value of ++a is ${a}</br>`)
document.write(`the value of a is ${a}</br>`)
document.write(`</br>`)


a=a++
document.write(`the value of a++ is ${a++}</br>`)
document.write(`the value of a is ${a}</br>`)
document.write(`</br>`)


a=--a
document.write(`the value of --a is ${a}</br>`)
document.write(`the value of a is ${a}</br>`)
document.write(`</br>`)


a=a--
document.write(`the value of a-- is ${a--}</br>`)
document.write(`the value of a is ${a}</br>`)
document.write(`</br>`)

var a  = 2
var b=1


document.write(`--a =${--a
}</br>`)

document.write(`--a - --b =${--a - --b}</br>`)
document.write(`--a - --b + ++b =${--a - --b+ ++b}</br>`)
document.write(`--a - --b + ++b + b-- =${--a - --b + ++b + b--}</br>`)

document.write(`result  =${--a - --b + ++b + b--}</br>`)


document.write(`</br>`)
var name=prompt("name")

document.write(`hello  ${name}</br>`)
alert(`hello  ${name}`)


document.write(`</br> `)
document.write(`</br> `)
var t =prompt("Enter table number")

for(i=1;i<11;i++){
  document.write(`${t}x${i}=${t*i}</br>`)
}