const obj ={
    name: 'Erich',
    age: 26,
    job: true
}

const entries= [
    ['name','Erich'],
    ['age',26],
    ['job', true]
]
// console.log(Object.entries(obj)); в массив
// console.log(Object.fromEntries(entries)); в объект

//Ключем может быть и объект (1.1)
const map = new Map(entries)
// console.log(map);
// console.log(map.get('job')); //true. == obj.job

// map
//     .set('job', false)
//     .set(obj, 'Value of Object')// 1.1
// console.log(map.get('job')); // false
// console.log(map);

// map.delete('job') //deleted
// console.log(map.has('job'));//false
// console.log(map.size);//3

// map.clear()
// console.log(map.size);//0

for (const entry of map.entries()) {
    // console.log(entry);
    //array
}
for (const [key,value] of map.entries()) {
    // console.log(key,value); 
    //key-value
}
for (const val of map.values()) {
    // console.log(val);
     //values
}
for (const key of map.keys()) {
    // console.log(key);
     //keys
}
map.forEach((val,key,m)=>{
    // console.log(val,key);
    //key value
})

const array=[...map]// Array.from(map)
// console.log(array);

const mapObj = Object.fromEntries(map.entries())
// console.log(mapObj);

//================================================================================================



