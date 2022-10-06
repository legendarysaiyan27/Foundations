const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }
 
}


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);



// How long does it take to double every number in a given 
// array? 

function test(name, arry) {
    perf.start()
    doublerAppend(arry)
    let resultsAppend = perf.stop()

    perf.start()
    doublerInsert(arry)
    let resultsInsert = perf.stop()

    console.log(`Results for the ${name}`)
    console.log("insert", resultsInsert.preciseWords)
    console.log("append", resultsAppend.preciseWords)
}

class TestCase {
    constructor(name, arry) {
        this.name = name
        this.arry = arry
    }
}

let arrays = [
    new TestCase("tiny array", tinyArray),
    new TestCase("small array", smallArray),
    new TestCase("medium arrays", mediumArray),
    new TestCase("large array", largeArray),
    new TestCase("extra large array", extraLargeArray)

]

arrays.map((testCase) => test(testCase.name, testCase.arry))
