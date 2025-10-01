let btn1=document.querySelector("#btn1");
let div=document.querySelector("div");


// btn1.onclick=(evt)=>{
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX,evt.clientY);  
// };



btn1.addEventListener("click", (evt) => {
    console.log("button 1 is clicked  handler(1)");
    });

btn1.addEventListener("click", () => {
console.log("button 1 is clicked  handler(2)");
});






const handler3func=()=>{
    console.log("button1 is clicked -handler 3")
}
btn1.addEventListener("click",handler3func);


btn1.removeEventListener("click",handler3func);















btn1.addEventListener("click", (evt) => {
    console.log("button 1 is clicked  handler(4)");
    });

div.onmouseover=(evt)=>{
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX,evt.clientY);
};




























































// let div=document.querySelector("div");
// let para=document.querySelector("p");
// let body=document.querySelector("body");
// let heading=document.querySelector("h1");
// let list=document.querySelector("ul")
// let newbtn=document.createElement("button");
// let newheading=document.createElement("h1");
// let head2=document.querySelector("h2");

// head2.append(newbtn);

// // para.remove();

// // para.setAttribute("class","para");
// para.classList.add("para");
// para.classList.remove("para");




// console.log(div);
// console.log(para);
// console.log(list.innerHTML);
// console.log(newbtn);





// newheading.innerHTML="<i>THIS IS NEW HEADING</i>"

// body.prepend(newheading);

// newheading.style.backgroundColor="blue";



// newbtn.innerText="I am button";
// console.log(newbtn.innerText);

// para.before(newbtn);

















// div.style.backgroundColor="blue";

// div.innerText="HEEYYY!!!!!!";

// div.style.fontSize="15px";

// div.style.padding="60px";

// div.style.visibility="hidden";





// let id=div.getAttribute("id");
// console.log(id);



// let class1=para.getAttribute("class");
// console.log(class1);

// para.setAttribute("class","ppppp");
// console.log(para.getAttribute("class"));