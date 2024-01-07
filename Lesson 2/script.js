// let myArray = [2, 3, 5, 7, 11, 13, 17];
// let seed = 17;

// for(let i = 0; i < 5; i++){
//     seed = xorshiftRandom(seed) % 100;
// }

// console.log(myArray.length);
// console.log(myArray[1]);

// myArray.push(seed);
// console.log(myArray);

// myArray.splice(0, 2);
// myArray.splice(0, 0, ".... . .-.. .-.. ---");
// console.log(myArray);
// console.log(myArray.includes("no u") + " " + myArray.includes(".... . .-.. .-.. ---"));

// //how to find and remove an element
// myArray.splice(myArray.indexOf("3") - 1, 1, "get str'd");
// console.log(myArray);

// //dont need to care about this
// function xorshiftRandom(seed){
//     let out = 0;

//     for(let i = 0; i < 10; i++){
//         out ^= seed;
//         out *= i;
//         out <<= i;
//     }

//     return out;
// }

// let i = 0;

// while(i < myArray.length){
//     console.log(myArray[i]);
//     i++;
// }

// i = 0;

// do{
//     console.log(myArray[i]);
//     i++;
// }while(i < myArray.length);

// for(let j = 0; j < myArray.length; j++){
//     console.log(myArray[j]);
// }

class Vector{
    constructor(x, y){
        this.x = y;
        this.y = y;
    }

    dst(){
        return Math.sqrt(x * x + y * y);
    }

    static normalize(){
        let dst = dst();

        x /= dst;
        y /= dst;
    }
}

let car = {
    mass: 1,
    velocity: new Vector(1, 2),
    setSpeed: function(magnitude){
        velocity = Vector.normalize(velocity) * magnitude;
    }
}

for(key in car){
    console.log(key + ": " + car[key]);
}

function changeTitle(titleID, multiplier){
    document.getElementById(titleID).textContent = Math.ceil(multiplier * Math.random());
}

setInterval(changeTitle, 1, "title", 999);

let fruits = ["apple", "banana", "pear"];

fruits.forEach(fruit => {
    console.log(fruit);
})