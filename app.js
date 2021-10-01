const foods = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];

// Function #1: Array Slice

var modifiedFood=foods;
console.log(modifiedFood.slice(1,4));

//Function #2: Array Splice

modifiedFood=foods;
modifiedFood.splice(2,0,"noodles", "icecream");
console.log(modifiedFood);

//Function #3: Filter

const numberArray = [12,324,213,4,2,3,45,4234];
console.log(numberArray.filter(num => num%2===0));

//Function #4: Reject

console.log(numberArray.filter(num => {
    var f=0;
    for(let i=2;i<num;i++)
    {
        if(num%i===0)
        {
            f=1;
            break;
        }
    }
    if(f==0)
    return false;
    else
    return true;
}));

//Function #5: Lambda

console.log(numberArray.filter(num => num%2===0));

//Function #6: Map

const myArray = [11, 34, 20, 5, 53, 16];
console.log(myArray.map(num => num*num));

// Function #7: Reduce
const newArray = [2, 3, 5, 10];

console.log(newArray.reduce( (total,num) => {
    return total*num;
} ))
