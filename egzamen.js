//tapsirma 1

/* let a = +prompt(" 1-ден 12-ге дейін сан енгізіңіз")

if(a==3 || a==4 || a==5){
    alert('ai ' +a+ " mausim: Spring ")
}else if(a==6 || a==7 || a==8){
    alert('ai ' +a+ " mausim: Summer ")
}else if(a==9 || a==10 || a==11){
    alert('ai ' +a+ " mausim: Autumn ") 
}else if(a==12 || a==1 || a==2){
    alert('ai ' +a+ " mausim: Winter ")
}else{
    alert("kate terdiniz")
} */



//Tapsirma 2

/* let a = +prompt('1 sanin engiziniz')
let b = +prompt('2 sanin engiziniz')

if(a > b){
    alert("1 san 2 saninan ulken")
}else if(a < b){
    alert("1 san 2 saninan kishi" )
}else if(a == b){
    alert("sandar ten")
}
alert("eki sanin ortasha mani " + (a + b) / 2 ) */


//Tapsirma

let num1 = +prompt("birinsi sandy engiziniz:")
let num2 = +prompt("ekinshi sandy engiziniz:")
let num3 = +prompt("ushinsi sandy engiziniz:")

let min
let max

if (num1 > num2 && num1 > num3) {
    alert("en ulken san: " + num1)
    max=num1
}else if(num2 > num1 && num2 > num3) {
    alert("en ulken san: " + num2)
    max=num2
}else if(num3 > num1 && num3 > num2) {
    alert("en ulken san: " + num3)
    max=num3
}else{
    alert("kate")
}
if (num1 < num2 && num1 < num3) {
    alert("en kishi: " + num1)
    min=num1
}else if(num2 < num1 && num2 < num3) {
    alert("en kishi: " + num2)
    min=num2
}else if(num3 < num1 && num3 < num2) {
    alert("en kishi: " + num3)
    min=num3
}else{
    alert("kate")
}

alert( 'ayirmasy ' + (max - min))