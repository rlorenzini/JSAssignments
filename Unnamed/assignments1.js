//palindrome
function palindrome(str) {
  let re = /[\W_]/g; //filter out unique characters
  let lowRegStr = str.toLowerCase().replace(re, ''); //set all strings to lowercase and remove special characters
  let reverseStr = lowRegStr.split('').reverse().join(''); //reverse letters, join them together by removing their spacing
  return reverseStr === lowRegStr; //check if the reverse absolutely equals the original; if so, return true
}
result = palindrome("A man, a plan, a canal. Panama");
console.log("Is this a palindrome? " +result)
document.write("Is this a palindrome? " +result)




oldArray = ['john','robert','john',1,1,1,'frog','cat','cat']

function uniq(a) { //uniq is function, a == array you want to sort
    let prims = {"boolean":{}, "number":{}, "string":{}}, objs = []; //sort booleans, numbers, and strings within a new array

    return a.filter(function(item) { //filter items from array and return items
        let type = typeof item; //set type to equal item type (boolean, number, string)
        if(type in prims)
            return prims[type].hasOwnProperty(item) ? false : (prims[type][item] = true); //return if item is unique or not
        else
            return objs.indexOf(item) >= 0 ? false : objs.push(item); //push item to new index without duplicates
    });
}

newArray = uniq(oldArray) //check oldArray for duplicates and put uniques in newArray
console.log(newArray)
document.write(newArray)




//.includes checks array for value and returns true or false
let numbersArray = [1,2,3,4,5,6,7,8,9,0]
console.log(numbersArray.includes(2));
document.write(numbersArray.includes(2))




//greatest number in array
let arr = [1,2,3,4,99] //obviously 99
let largest = arr.reduce(function(x,y) {
  return (x > y) ? x : y;
});
console.log(largest);
document.write(largest)




let arr2 = [99,98,97,96,1]
let lowest = arr.reduce(function(x,y) {
  return (x < y) ? x : y;
});
console.log(lowest);
document.write(lowest)




//fahrenheit to celsius
function toCelsius(fahrenheit) {
  return (5/9) * (fahrenheit-32);
}
degrees = toCelsius(100);
console.log(degrees);
