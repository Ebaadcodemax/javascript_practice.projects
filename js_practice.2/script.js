// class toyotacar{

//     constructor(brand, mileage,color){
//         console.log("creating new object");
//         this.brand=brand;
//         this.mileage=mileage;
//         this.color=color;
//     }
//     start(){
//         console.log("start");
//     }

//     stop(){
//         console.log("stop");
//     }

//     setbrand(brand){
//         this.brandname=brand;
//     }

//     setmaterial(material){
//         this.material=material;
//     }

//     setfuel(gas){
//         this.fuel=gas;
//     }
    
// }

// let fortuner=new toyotacar("fortuner",10,"white");
// let innova=new toyotacar();
// console.log(fortuner);
// // fortuner.setbrand("SUV");
// // fortuner.setmaterial("Iron");
// // fortuner.setfuel="diesel";
// // innova.setbrand="MPV";


//inheritance
class parent{
    hello(){
        console.log("hello");
    }
}

class child extends parent{
}

let object=new child;


class human{
    constructor(name){
        console.log("enter parent constructor");
        this.species="homosapiens";
        console.log("exit parent constructor");
        this.name=name;
    }
    eat(){
        console.log("he eats food");
    }
    // work(){
    //     console.log("i make great tech tooooo")
    // }
    // sleep(){
    //     console.log("he sleeps!!!");
    // }

    // breathe(){
    //     console.log("he breathes!!!!");
    // }
}

class engineer extends human{
    constructor(branch,name){
        console.log("enter child constructor");
        super(name)//to invoke parent class constructor
        this.branch=branch;
        console.log("exit child constructor");
    }
    work(){
        console.log("i make great tech");
    }
}


let ebaad=new engineer("chemical","ebaad");

console.log(ebaad.name);



// class doctor extends human{
//     work(){
//         console.log("i help people");
//     }
// }


// class architect extends human{
    
//     work(){
//         console.log("i make construction maps");
//     }
// }


// class pillow{
//     intro(){
//         console.log("i am soft pillow");
//     }
// }

// let ebaad=new engineer();


// let khan=new architect();
// console.log(khan.species);

  





















// // const student={
// //     fullname: "ebaad khan",
// //     marks: 94.4,
// //     printmarks:function(){
// //         console.log("marks = "+ this.marks);
// //     }
// // }   


// const employee={
//     calctax1(){
//         console.log("10% of salary");
//     },

//     calctax2:function(){
//         console.log("100% of salary");
//     }
// };

// const karanarjun={
//     salary: 50000,
//     calctax1(){
//         console.log("20% of salary");
//     }
    
// }

// const karanarjun2={
//     salary: 50000,
// }
// const karanarjun3={
//     salary: 50000,
// }
// const karanarjun4={
//     salary: 50000,
// }
// const karanarjun5={
//     salary: 50000,
// }

// karanarjun.__proto__=employee;
// karanarjun2.__proto__=employee;
// karanarjun4.__proto__=employee;
// karanarjun3.__proto__=employee;
// karanarjun5.__proto__=employee;

// console.log(karanarjun2.calctax2());
