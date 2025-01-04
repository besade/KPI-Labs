// // Exercise 1 

// function typeCheck(element)
// {
//     if(typeof element !== 'function') return 1;
//     return 0;
// }
// const pipe = (...fns) => x => {
//     if(fns.length === 0) return x;
//     for(let i = fns.length - 1; i>=0; i--)
//     {
//         if (typeCheck(fns[i]) === 1)
//             {
//                 console.error('Error, incorrect object type');
//                 return;
//             }
//     }
//     let res = x;
//     for(i = 0; i<fns.length; i++)
//     {
//         res = fns[i](res);
//     }
//     return res;
// }
// const inc = x => ++x;
// const twice = x => x * 2;
// const cube = x => x ** 3;
// // Test
// const f1 = pipe(inc, twice, cube);
// const f2 = pipe(inc, inc);
// const f3 = pipe(inc, 7, cube);
// const x1 = f1(5);
// console.log(x1);
// const x2 = f2(7);
// console.log(x2);
// const x3 = f3(4);
// console.log(x3);

// Exercise 2
function typeCheck(element) {
    if (typeof element !== 'function') return 1;
    return 0;
}

let errorHandlers = [];
const on = (event, handler) => {
    if (event === 'error') {
        errorHandlers.push(handler);
    }
}

const compose = (...fns) => {
    if(fns.length === 0) return x;
    const check = (fns, x) => { 
        let res = x;
        const last = fns.length - 1;
        
        for (let i = last; i >= 0; i--) {
            try {
                if (typeCheck(fns[i]) === 1) {
                    throw new Error(`Argument at position ${i} is not a function`);
                }
                res = fns[i](res);
            } catch (e) {
                errorHandlers.forEach(handler => handler(e));
                return undefined;
            }
        }
        return res;
    };

    const composed = (x) => check(fns, x);
    
    composed.on = on;

    return composed;
};
const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;
// Test
const f1 = compose(inc, twice, cube);
const f2 = compose(inc, inc);
const f3 = compose(inc, 7, cube);
f1.on('error', (e) => console.error('Error in f1:', e.message));
f2.on('error', (e) => console.error('Error in f2:', e.message));
f3.on('error', (e) => console.error('Error in f3:', e.message));

const x1 = f1(5);  
console.log(x1);   
const x2 = f2(7);  
console.log(x2);   
const x3 = f3(4);  
console.log(x3);   