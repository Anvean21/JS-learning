const person = Object.create(
    {
        calculateAge(){
            console.log('Age:', new Date().getFullYear - this.birthYear);
        }
    },
    {
    name: 
    {
        value: "Evgenii",
        enumerable: true,
        writable: true,
        configurable: true,
        
    },
    birthYear: 
    {
        //False у всех свойств по умолчинаю, если создавать обьект через метод create()
        value:2001,
        enumerable: false,
        writable: false,
        configurable: false,
    },
    age:{
        get(){
            return  new Date().getFullYear - this.birthYear
        },
        set(value){
            document.body.style.background = 'black'
            console.log('Set age', value);
        }
    }
})


for(let key in person)
{
//for in бежит по прототипам, поэтому нужна проверка
    if(person.hasOwnProperty(key)){
        console.log("Key", key, person[key]);
    }
}