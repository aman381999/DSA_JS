function makePattern(n) {
    for (let i = 0; i < n; i++) {
        let row = "";
        let toggle = 1;
        for (let j = 0; j < i+1; j++) {
            row += toggle;
            if(toggle == 0) {
                toggle = 1;
            } else {
                toggle = 0;
            }
        }
        console.log(row);
    }
}

makePattern(4);

// 1
// 10
// 101
// 1010