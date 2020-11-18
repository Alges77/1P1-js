let age = 60;
let age1 = 18, age2 = 59;
if (age > age2)  {
    cnt = age / age2;
    console.log(`Вам пора на пенсию`);
}
else if (age < age1) {
    cnt = age / age1;
    console.log(`Вам ещё рано работать`)
}
else {
    console.log(`Вам ещё работать и работать`);
}
/* 
*/
let n, word = "ворон"
n = Math.random() * 15111;
n = Math.floor(n);
if (n % 100< 11 || n % 100 > 14) {
if (n %10 === 1){
    word += "a";
} else if (n % 10 === 2 || n % 10 === 3 ||  n % 10 ===4){
    word += "ы"
}
}
console.log(`на ветке сидело ${n} ${word}`);
console.log(Math.random() * 15000);
/*
*/

