function solve(arr) {
    let numberOfEqualPairs = 0;
   for (let i = 0; i < arr.length - 1; i++) {
       for (let element of arr[i]) {
           
           if (arr[i + 1].includes(element)) {
               let currentIndex = arr[i].indexOf(element);
               let nextIndex = arr[i + 1].indexOf(element);
               if (currentIndex === nextIndex) {
                   numberOfEqualPairs++;
               }
           }
       }
       
    }
    console.log(numberOfEqualPairs);
}

solve([['2', '3', '4', '7', '0'], 

['4', '0', '5', '3', '4'], 

['2', '3', '5', '4', '2'], 

['9', '8', '7', '5', '4']] );