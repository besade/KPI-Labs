/* Exercise 1 */
function seq(...funcs) {
    const chain = [...funcs];
    const executor = (x) => chain.reduce((acc, func) => func(acc), x);

    const handler = (arg) => {
        if (typeof arg === "function") {
            chain.push(arg);
            return handler; 
        }
        else if (typeof arg === "number") {
            return executor(arg); 
        }
    };

    return handler;
}

const result = seq(x => x - 2)(x => x * 3)(4);
console.log(result);

/* Exercise 2 */
let value;
function array()
{
    const newArray = [];

    function arr(i)
    {
        return newArray[i];
    }

    arr.push = function(value) 
    {
        newArray.push(value);
    }

    arr.pop = function()
    {
        return newArray.pop();
    }
    
    return arr;
}

const arr = array();

arr.push('first');
arr.push(2);
arr.push('third')
arr.push(4);

console.log(arr(0));
console.log(arr(1));
console.log(arr(2));
console.log(arr(3));

console.log(arr.pop());
console.log(arr.pop());
console.log(arr.pop());
console.log(arr.pop());
console.log(arr.pop());