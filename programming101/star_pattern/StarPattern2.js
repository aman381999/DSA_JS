function makePattern(n) {
    for (let i = 0; i < n; i++) {
        let row = "";
        for (let j = 0; j < i+1; j++) {
            row += " *";
        }
        console.log(row);
    }
}

makePattern(4);


//  *
//  * *
//  * * *
//  * * * *