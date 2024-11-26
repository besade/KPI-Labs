/* 1 Exercise */
let min;
let max;
let result;
function random(min = 0,max = 100) 
{
 result = Math.floor(Math.random()*(max-min) + min);
}

random(1, 20);
console.log(result);
random(max);
console.log(result);

/* 2 Exercise */
const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
let randomSymbol;
let key;
function generateKey(lenght, characters)
{
    key = characters.slice(result, result+1).toString();
    for(var i = 0; i<lenght; i++)
    {
    random(0,36);
    randomSymbol = characters.slice(result, result+1);
    key += randomSymbol.toString();
    }
}
generateKey(12,characters);
console.log(key);

/* 3 Exercise */
let ipv4 = '10.0.0.1';
let ipArray = [];
let num = 3;
let ipNum = 0;
ipArray = ipv4.split('.');
for(var i = 0; i<4; i++)
{
ipArray[i] = parseInt(ipArray[i]);
}
for(var i = 0; i<4; i++)
{
    for(var j = num; j>0; j--)
    {
    temporary = ipArray[i] << 8;
    ipArray[i] = temporary;
    } 
    num -= 1;
    ipNum += ipArray[i];
}
console.log(ipArray);
console.log(ipNum);

/* Exercise 4 */

let x, y, z;
function m1(x)
{
    return [x];
};
function m2(x, y)
{
    return [x, y];
};
 function m3(x, y, z)
{
     return [x, y, z];
};
let mV1 = m1.length;
let mV2 = m2.length;
let mV3 = m3.length;
let outputArray = 
[
    ['m1',mV1],
    ['m2',mV2],
    ['m3',mV3]
]
console.dir(outputArray);