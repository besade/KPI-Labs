/* Exercise 1 */
// 1 (for)
function sum1()
{
    let total = 0;
    for(let i=0; i < arguments.length; i++)
    {
        total += arguments[i];
    }
    return total;
}
const a = sum1(5, 6, -2, 0);
console.log(a);

// 2 (for of)
function sum2()
{
    let total = 0;
    for(const element of arguments)
    {
        total += element;
    }
    return total;
}
const b = sum2(2, 0, -4);
console.log(b);

// 3 (while)
function sum3()
{
    let total = 0;
    let i = 0;
    while(i < arguments.length)
    {
        total += arguments[i];
        i++;
    }
    return total;
}
const c = sum3();
console.log(c);

// 4 (do while)
function sum4()
{
    let total = 0;
    let i = 0
    do {
        total += arguments[i];
        i++;
    } while (i<arguments.length)
    return total;
}
const d = sum4(2, 6, 10, -5);
console.log(d);

// 5 ( Array.prototype.reduce())
function sum5()
{
    let total = 0;
    const args = Array.from(arguments);
    let sum = args.reduce((total, current) => total + current, 0);
    return sum;
}
const e = sum5(1, 3, 1, -2, 6);
console.log(e);

/* Exercise 2 */
function max(arr)
{
    let maxElement = -Infinity;
    let smallArray = null;
    for(i=0; i < arr.length; i++)
    {
        smallArray = arr[i];
        for(j=0; j < smallArray.length; j++)
        {
            if(smallArray[j] > maxElement)
            {
                maxElement = smallArray[j];
            }
        }

    }
    return maxElement;
}
const m = max([[1, 2, 6], [4, 100, 6], [7, 20, 9]]);
console.log(m);

/* Exercise 3 */
const persons = {
    lenin: { born: 1870, died: 1924 },
    mao: { born: 1893, died: 1976 },
    gandhi: { born: 1869, died: 1948 },
    hirohito: { born: 1901, died: 1989 },
  };

  function age()
  {
    let name;
    let lifeSpan;
    let personsLifeSpan = {};
    for(name in persons)
    {
        lifeSpan = persons[name].died - persons[name].born;
        personsLifeSpan[name] = lifeSpan;
    }
    return personsLifeSpan;
  }
  console.log(age(persons));