// Starting array
let array = [28, 43, -12, 30, 4, 0, -36]

// Write your solution below:

let smallest = array[0]
let biggest =  array[0]

for(var i = 0; i < array.length; i++){
    if (array[i] > biggest){
        biggest = array[i]
    } else if (array[i] < smallest) {
        smallest = array[i]
    }
}

console.log(smallest)
console.log(biggest)