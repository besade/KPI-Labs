/* Exercise 1 */

let myName = 'Artemiy';
const myBirthYear = 2006;
function greeting(name)
{
    console.log('Hello, ' + name + '!');
}
greeting('Jack');

/* Exercise 2 */

function range(start, end)
{
    parseInt(Math.floor(start));
    parseInt(Math.floor(end));
    let rangeArray = [];
    for(var i = start; i<=end; i++)
    {
        rangeArray.push(i);
    }
    return rangeArray;
}
console.log(range(5, 10));

function rangeOdd(start, end)
{
    parseInt(Math.floor(start));
    parseInt(Math.floor(end));
    let rangeArrayOdd = [];
    for(var i = start; i<=end; i++)
    {
        if(i%2 === 0)
        {
            rangeArrayOdd.push(i);
        }
    }
    return rangeArrayOdd;
}
console.log(rangeOdd(5, 10));

/* Exercise 3 */

function average(a, b)
{
    return (a + b)/2; 
}

function square(x)
{
    return x*x;
}

function cube(x)
{
    return x*x*x;
}

let a, b;
let temporaryAverage;
let averagesOfDegree = [];
function calculations()
{
for(i = 0; i<=9; i++)
{
    a = square(i);
    b = cube(i);
    temporaryAverage = average(a, b);
    averagesOfDegree.push(temporaryAverage);
}
return averagesOfDegree;
}
console.log(calculations());

/* Exercise 4 */
const name = 
{
    name: 'Jason'
}
const name1 = Object.create(name);
let name2 = Object.create(name);
name1.name = 'Bob';
name2.name = 'Bob';

console.log(name1);
console.log(name2);

/* Exercise 5 */

function createUser(name, city)
{
    var user = {};
    user.name = name;
    user.city = city;
    return user;
}

console.log(createUser('Igor', 'Kyiv'));

/* Exercise 6 */

let phoneUsers = 
[
    {name: 'Vlad', phone: '+380935820245'},
    {name: 'Vova', phone: '+380446812993'},
    {name: 'Egor', phone: '+380639121503'}
]

function findPhoneByName(name)
{
    for(i = 0; i<=phoneUsers.length; i++)
    {
        if(phoneUsers[i].name === name)
        {
            var thisPhone = phoneUsers[i].phone;
            return thisPhone;
        }
    }
}
console.log(findPhoneByName('Egor'));

/* Exercise 7 */

const usersDirectory = {
    'Vlad': '+380935820245',
    'Vova': '+380446812993',
    'Egor': '+380639121503'
};

function findPhoneByName2(name)
{
    return usersDirectory[name];
}

console.log(findPhoneByName2('Vlad'));