let modebtn=document.querySelector("#mode");
let body=document.querySelector("body");
let para=document.querySelector("#para");

let currmode="light";


modebtn.addEventListener("click",()=>{


    if(currmode==="light"){
        currmode="dark";
        body.setAttribute("class","dark");
    }

    else{
        currmode="light";
        body.setAttribute("class","light");
    }

    console.log(currmode);
})
