let happyimg=document.querySelector("#happyimg");
let btn=document.querySelector("#btn");
let body=document.querySelector("body");
let p=document.querySelector("p");
let angryimg=document.createElement("img")
angryimg.src="angry.jpg";

p.style.visibility="hidden";

const angryfunc=()=>{
    body.setAttribute("class","angry")
    p.style.visibility="visible";
    happyimg.remove();
    p.before(angryimg);
}


const happyfunc=()=>{
    body.setAttribute("class", "happy");
    p.style.visibility="hidden";
    p.before(happyimg);
    angryimg.remove();
}

//WHEN HOVERED OVER====ANGRY CAT
happyimg.addEventListener("mouseover", angryfunc);

//RESET BUTTON
btn.addEventListener("click",happyfunc);