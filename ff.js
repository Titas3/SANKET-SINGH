function f14(n) {
    for(let j = 1; j <= n; j++) {
        for(let i = 0; i < n; i = i + j) {
            console.log(i, j);
        }
    }
}
f14(8);