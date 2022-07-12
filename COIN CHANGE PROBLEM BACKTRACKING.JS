/* 
function change(amount,coins,index){
        if(amount === 0){
            return 1;
        }
        if(amount<0||index===coins.length){
            return 0;
        }
        let results = 0;
        for(let i=index; i < coins.length; i++){
            if(amount >= coins[i]){
                results += change(amount - coins[i],coins,i);
            }
        }
       return results;
    }
    coins=[2,3,7];
console.log(change(5,coins,0)); */

function PrintCoinChange(rupee,coins,n,curr,i){
    if(rupee === 0){
        console.log(curr);
        return;
    }
    if(n===i||rupee<0) return;
    curr.push(coins[i]);
    PrintCoinChange(rupee - coins[i],coins,n,curr,i);
    curr.pop();
    PrintCoinChange(rupee,coins,n,curr,i+1)
}

PrintCoinChange(7,[2,3,7],3,[],0);