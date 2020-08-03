function randomize(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randArray(arr) {
  // let utilArr = Object.assign({}, arr);
  let utilArr = arr;
  let i = 0;
  let randomNum;
  while (!(utilArr.length = 0 || i == 9)) {
    randomNum = randomize(0, 8);
    arr[i] = utilArr[randomNum];
    utilArr.splice(randomNum, 1);
    i++;
  }
}

// function test(n) {
//   return n + 1;
// }

randomize(10, 20);
randomize(10, 20);
randomize(10, 20);
randomize(10, 20);
randomize(10, 20);
randomize(10, 20);

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
randArray(array);
console.log(array);
// let n2 = test(3);
// console.log(n2);
