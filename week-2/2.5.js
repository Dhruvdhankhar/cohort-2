function calculateSum(n){
    let ans = 0
    for(let i = 1; i <=n ; i++){
        ans = ans + i;
    }
    return ans;
}

let ans = calculateSum(3);
console.log(ans);
