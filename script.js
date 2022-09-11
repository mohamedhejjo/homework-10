let i1=document.getElementById("i1");
let i2=document.getElementById("i2");
let i3=document.getElementById("i3");

function bb() {
    let date=new Date();
 i1.innerText=date.getHours()+" h"; 
 i2.innerText=date.getMinutes()+" m"; 
 i3.innerText=date.getSeconds()+" s"; 


}

setInterval(bb,1000);

