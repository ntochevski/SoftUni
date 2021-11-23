function solve(arr) {
    let fullMatch = 0;

    verticalMatch(arr);
    for (let line of arr) {
        horyzontalMatch(line);
    }

    function horyzontalMatch(input) {
        for (const el of input) {
            let current = input.shift()
            for (const element of input) {
                if (element === current) {
                    fullMatch++;
                    break;
                } else {
                    break;
                }
            }
        }

    }
    function verticalMatch (input) {
       
        for (let i = 0; i < arr.length - 1; i++) {
            let current = arr[i];
            for (let j = 0; j < current.length; j++) {
                let currentDigit = current[j];
              
                let nextDigit = arr[i + 1][j];

                if (currentDigit === nextDigit) {
                    fullMatch++
                }
                
            }
            
            
        }
    }
    console.log(fullMatch);
}
