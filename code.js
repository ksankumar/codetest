function checkIsPalindrome(string) {
    string = string.trim();
    if (string === null || string === undefined || string === '') {
        return false;
    }

    string = string.toLowerCase().replace(/[\W_]/g, '');
    return string === string.split('').reverse().join('');
}

console.log(checkIsPalindrome('oscar')); //false
console.log(checkIsPalindrome('aaaa')); //true
console.log(checkIsPalindrome('Racecar')); //true
console.log(checkIsPalindrome('race car  ')); //true
console.log(checkIsPalindrome("Madam, I'm Adam")); //true



function isMultiple(num, mod) {
    return num % mod === 0;
}

function fizzBuzz(number) {
    switch (true) {
        case isMultiple(number, 15):
            return 'FizzBuzz';
        case isMultiple(number, 3):
            return 'Fizz';
        case isMultiple(number, 5):
            return 'Buzz';
        default:
            return number;
    }
}
const result = [...Array(100)].map((_, index) => fizzBuzz(index + 1));
const ary = Array.from(Array(100), (x, index) => fizzBuzz(index + 1));
var ary = Array.from(Array(100), function(_, index) { return fizzBuzz(index + 1); });
console.log(ary);


const MIN_FILTER_PRICE = 75;
const MIN_FILTER_WEIGHT = 1.8;

function filteredProductPrice(prod) {
    return prod.price >= MIN_FILTER_PRICE;
}

function filteredProductWeight(prod) {
    return prod.weight > MIN_FILTER_WEIGHT;
}

Array.prototype.toObject = function(key) {
    return this.reduce((acc, item) => {
        let id = item[key];
        delete item[key];
        acc[id] = item;
        return acc;
    }, {});
}

const productPriceList = products.filter(filteredProductPrice);
console.log(productPriceList);

const productWeightList = products.filter(filteredProductWeight);
console.log(productWeightList);

const productsArrayToList = products.toObject('id');
console.log(productsArrayToList)