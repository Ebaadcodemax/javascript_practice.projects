function api() {
    return new Promise((resolve,reject)=>
    {
        setTimeout(() => {
            console.log("weather");
            resolve(200);//200=successful
            
        }, 5000);
    });
    
};
 
function getdata(number){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("data", number);
            resolve("success");
        }, 2000);
    })
}


//Async-await;
// async function getalldata(){
// console.log("getting data 1.....");
// await getdata(1);
// console.log("getting data 2.....");
// await getdata(2);
// console.log("getting data 3.....");
// await getdata(3);
// console.log("getting data 4.....");
// await getdata(4);
// console.log("getting data 5.....");
// await getdata(5);
// console.log("getting data 6.....");
// await getdata(6);

// }


// async function(){
// console.log("getting data 1.....");
// await getdata(1);
// console.log("getting data 2.....");
// await getdata(2);
// console.log("getting data 3.....");
// await getdata(3);
// console.log("getting data 4.....");
// await getdata(4);
// console.log("getting data 5.....");
// await getdata(5);
// console.log("getting data 6.....");
// await getdata(6);

// }

//IIFE USED ASYNC-AWAIT FUNCTION.
(async function(){
console.log("getting data 1.....");
await getdata(1);
console.log("getting data 2.....");
await getdata(2);
console.log("getting data 3.....");
await getdata(3);
console.log("getting data 4.....");
await getdata(4);
console.log("getting data 5.....");
await getdata(5);
console.log("getting data 6.....");
await getdata(6);

})();

// function getdata(dataid,getnextdata){
    //     return new Promise((resolve,reject)=>{
        
        //         setTimeout(() => {
            //             console.log("data", dataid);     
            //             resolve("success yoo");
            //             if(getnextdata){
                //                 getnextdata();    
                
                //             }
                //         }, 5000);
                
                //     })
                // }
                
                
                
                
                // let promise=getdata(123);
                // //promise chain
                
                // getdata(1).then((res)=>{  
                //     return getdata(2);
                // })
                // .then((res)=>{
                //     console.log(res);
                // })
                
                
                




















// function asyncfunc(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             console.log("data 1");    
//             resolve("success");
//         }, 4000);
//     });
// }


// function asyncfunc2(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             console.log("data 2");    
//             resolve("success");
//         }, 4000);
//     });
// }



// console.log("fetching data 1....");
// asyncfunc();

// asyncfunc().then((res)=>{
//     console.log(res);    
//     console.log("fetching data 2....");
//     asyncfunc2().then((res)=>{
//         console.log(res);    
//     })
// })































// const getpromise=()=>{
//     return new Promise((resolve,reject)=>{
//         console.log("i am a promise");    
//         // resolve("success");
//         reject("network error");
//     });
// };


// let promise=getpromise();



// promise.then(()=>{
//     console.log("promise fullfilled",success);    
// });


// promise.catch(()=>{
//     console.log("failure",err);    
// });










// let promise=new Promise((resolve,reject)=>{
//     console.log("i am a promise");    
//     resolve("success");
// });
// console.log(promise)








// let finalvalue=getdata(123);

// console.log(finalvalue);




// function hello(){
//     console.log("hello after 2 seconds");
// }

// console.log("one")
// console.log("two")

// setTimeout(() => {
//     console.log("hello")
// }, 4000);//timeout


// console.log("three")
// console.log("fourc





// //callback hell
// getdata(1,()=>{
//     console.log("getting data 2.....");
//     getdata(2,()=>{
//         console.log("getting data 3.....");
//         getdata(3,()=>{
//             console.log("getting data 4.....");
//             getdata(4);
//         })
//     });
// });
