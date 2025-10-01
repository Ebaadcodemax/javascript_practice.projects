const companies=[
    {name:"company 1", category:"finance", start:1981, end:1982},
    {name:"company 2", category:"retail", start:1981, end:1989},
    {name:"company 3", category:"fashion", start:1990, end:2005},
    {name:"company 4", category:"Automobile", start:1940, end:2015},
    {name:"company 5", category:"Technology", start:1981, end:2000},
    {name:"company 6", category:"retail", start:1900, end:2000},
]

//foreach
// companies.forEach(function(company){
//     console.log(company.name)
// })




//filter
// let candrink=[]
let ages=[18,19,10,28,18,20,19,30,30,40,34,23,32];

//###1
// for(let i=0;i<age.length; i++){
//     if(ages[i]>=18){
//         candrink.push(ages[i])
//     }
// }
// console.log(candrink)

//###2
// const candrink=ages.filter(function(age){
//     if(age>18){
//         return true
//     }
// })




//####3
const candrink=ages.filter(age=>age>=21)
console.log(candrink)


// const retailcompanies=companies.filter(function(company){
//     if(company.category==='retail'){
//         return true;
//     }
// })

const retailcompanies=companies.filter(company=>company.category==='retail')

console.log(retailcompanies)


const company_1980=companies.filter(company=>company.start>=1980&&company.end<=1990)
console.log(company_1980)

const compage10=companies.filter(company=>(company.end-company.start)==10)
console.log(compage10)


//map
//create array of company names

const companynames=companies.map(function(company){
    // return company.name;
    return company.start;

})

const compnames=companies.map(company=>`company name:${company.name} ====company age:${company.end}-${company.start}`)

console.log(compnames)
console.log(companynames);


const agesquare=ages.map(age=>`square of the age is: ${parseInt(age)*parseInt(age)}`)
console.log(agesquare)