class Animal{

    static type = 'STATIC ANIMAL'

    constructor(options){
        this.name = options.name
        this.hasTail = options.hasTail
        this.age = options.age
    }

    voice(){
        console.log("I am Animal");
    }
}
// const animal = new Animal({
//    name: 'Tiger',
//    hasTail: true, 
//    age: 4
// });

class Cat extends Animal{

    constructor(options){
        super(options)
        this.color = options.color
    }

    static type = "Static cat"

    voice(){
        //super.voice() I am Animal
        console.log('I`m cat');
    }
    get ageInfo(){
        return this.age *7
    }
    set ageInfo(newAge){
        this.age = newAge
    }
}

const cat = new Cat({
    name: 'Cat',
    hasTail: true,
    age : 9,
    color : 'black'
})

class Component {
    constructor(selector){
        this.$el = document.querySelector(selector)
    }

    hide()
    {
        this.$el.style.display = 'none'
    } 
    show()
    {
        this.$el.style.display = 'block'
    }
}

class Box extends Component{
    constructor(options){
        super(options.selector)

        this.$el.style.width = this.$el.style.hight = options.size + 'px'
        this.$el.style.background = options.color

    }
}
const box1 = new Box({
    selector: "#box1",
    size:100,
    color: 'red'
})
