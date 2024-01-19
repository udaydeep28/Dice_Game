var name1=prompt("Name of first captain:");
var name2=prompt("Name of other captain:");
document.querySelectorAll("p")[0].innerHTML=name1;
document.querySelectorAll("p")[1].innerHTML=name2;

var number1=Math.floor(Math.random()*6+1);
var imgname2="./images/dice"+number1+".png";
var img1=document.querySelectorAll("img")[0];
img1.setAttribute("src",imgname2);

var number2=Math.floor(Math.random()*6+1);
var imgname2="./images/dice"+number2+".png";
var img2=document.querySelectorAll("img")[1];
img2.setAttribute("src",imgname2);

if(number1>number2){
    document.querySelector("h1").innerHTML=name1+" Wins!";
}
else if(number2>number1){
    document.querySelector("h1").innerHTML=name2+" Wins!";
}
else{
    document.querySelector("h1").innerHTML="Draw...";
}

