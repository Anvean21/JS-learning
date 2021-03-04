const people=[
    {name:'Name 1', age:25, account:25000},
    {name:'Name 2', age:20, account:2000},
    {name:'Name 3', age:29, account:5000},
    {name:'Name 4', age:26, account:7000},
    {name:'Name 5', age:22, account:30000}
]

//ES5 (Большинство браузеров)
// for (let i = 0; i < people.length; i++) {
//     console.log(people[i]);
// }


//ES6
// for (const iterator of people) {
//     console.log(iterator);
// }


//ForEach
// people.forEach((person,index,pArr)=>{
//     console.log(person);
//     // console.log(index);
//     // console.log(pArr);
// })
// people.forEach(person=>console.log(person))


//Cоздает новые массивы
//Map
// const newPeople = people.map(person=>{
//     return person.name;
// })
// console.log(newPeople);


//Filter
// const adults = people.filter(person =>{
//     if (person.age>=21) {
//         return true
//     }
// })

// const adults = people.filter(person =>person.age >= 21)

// console.log(adults);


//Reduce
// const amount = people.reduce((total,person)=>{
// return total + person.account
// }, 0)
// console.log(amount);


//Find
// const name = people.find((person)=>person.name == 'Name 1')
// console.log(name);


//FindIndex
// const nameIndex = people.findIndex((person)=>person.name == 'Name 1')
// console.log(nameIndex);


//*******************************Practice*********************************


//Chain
const amount = people
    .filter(person=> person.account >3000)
    .map(person => {
        return{
            info:`${person.name} (${person.age})`,
            account: person.account
        }
    })
    .reduce((total,person)=> total + person.account,0)

    console.log(amount);