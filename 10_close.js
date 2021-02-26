function createIncrement(n){
    return function(num){
        return n +num;
    }
}

//Замыкание.
const addOne = createIncrement(1);
const addthree = createIncrement(3);


console.log(addOne(10));
console.log(addOne(29));