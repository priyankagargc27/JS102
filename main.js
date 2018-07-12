//let number = [];
//let count =0;
//for(let i=0; i<=100; i++)
//{
//count+=1;
//number.push(count);
//}
//console.log(number)

for (let i = 0; i < 100; i++) {
    let currentNumber = i;
    if (currentNumber % 5 === 0 && currentNumber % 7 === 0) {
        console.log("You are monkey and chicken")
    }
    else if (currentNumber % 5 === 0) {
        console.log("you are monkey");
    }

    else if (currentNumber % 7 === 0) {
        console.log("you are chicken");
    }

    else {
        console.log(currentNumber);
    }

}
