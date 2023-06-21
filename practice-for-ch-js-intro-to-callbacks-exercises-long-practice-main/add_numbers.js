const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin ,
    output: process.stdout
});

// function completionCallback(input) {
//     this.parseInt
// }

function addNumbers(sum, numsLeft, completionCallback) {
    if (numsLeft > 0) {
        rl.question("Please enter a number?", userinput => {
          sum = parseInt(userinput) + sum
           numsLeft = numsLeft - 1
           addNumbers(sum,numsLeft,completionCallback)
        })

    }

        if (numsLeft === 0) {
        completionCallback(sum)
        }

}

( addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`)));
