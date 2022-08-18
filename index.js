function oddishOrEvenish(sayi) {
    var sum=[];
    var toplam=0;
    sayi=String(sayi);
    for(i=0; i<sayi.length; i++){
        sayi[i] = Math.floor(Number(sayi[i]) / 10);
        sum.push(sayi[i] % 10); 
        toplam +=sum[i]    
    } 
    if (toplam % 2===1){
        console.log(sayi + " " + "odd number")
    }else{
        console.log(sayi + " " + "even number")
    }
    return sum
}

console.log(oddishOrEvenish(18));
console.log(oddishOrEvenish(44));
