let numbers: number[]=[1,2,3,4,5,6,7,8,9,10];
numbers.forEach(number=>{
    let Suffix="th";
    if (number ===1){
        Suffix="st";
    }else if (number===2){
        Suffix="nd";
    }else if (number===3){
        Suffix="rd";
    }
console.log(`${number}${Suffix}`);
});
