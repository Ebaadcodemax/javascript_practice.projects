/*let heading=document.getElementById("heading");
console.dir(heading);

let head=document.getElementsByClassName("head");
console.log(head);

let button=document.getElementById("button");
console.log(button);*/


/*let para=document.querySelectorAll("p");
console.log(para);

let h1=document.getElementsByTagName("h1");
console.log(h1);*/

/*let head_firstEl=document.querySelector(".head");
console.log(head.firstEl);

let head_allEl=document.querySelectorAll(".head")
console.log(head_allEl);*/

// let firstEl=document.querySelector("p");

// console.dir(firstEl);

// console.log(document.querySelector("header").children);

// console.dir(document.body.firstChild);



// let div=document.querySelector("div");
// console.dir(div);

// let heading=document.querySelector("h1");


// let heading=document.getElementById("heading");
// console.log("heading");

heading.innerText=heading.innerText+ " From Apna College Students";//concatenate

let divs=document.getElementsByClassName("box");
let i=1
for(div of divs){
    console.log(div.innerText="new unique value of div "+i);
    i++;
}

