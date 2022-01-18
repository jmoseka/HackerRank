const multiple = [];
for (let i = 0; i <= 100; i++) {
  if (i % 5 === 0) {
    multiple.push(i);
  }
}
const grades = [73, 67, 38, 33];

//console.log(multiple);
function gradingStudents(grades) {
  let check;
  let number;
  for (i = 0; i <= 100; i++) {
    //initial number
    number = grades[i];

    while (grades[i] <= 100) {
      if (grades[i] < 38) {
        result.push(number);

        break;
      } else if (grades[i] % 5 === 0) {
        check = grades[i] - number;
        if (check < 3) {
          result.push(grades[i]);
        } else {
          result.push(number);
        }
        break;
      }

      grades[i]++;
    }
  }
}
gradingStudents(grades);
console.log(result);

////////////////////////////////////////////////

let times = 0;
let output = 0;
let n = 9;
let ar = [10, 20, 20, 10, 10, 30, 50, 10, 20, 9];
//let ar = [1, 2, 1, 2, 1, 3, 2];
let visited = -1;
//let ar = [10, 10, 10, 30, 10];

ar.forEach((element, i, array) => {
  if (array[i] !== visited) {
    for (let j = 0; j < 9; j++) {
      if (array[i] === array[j]) {
        times++;
        if (times % 2 === 0) {
          times = 0;
          output++;
          array[i] = -1;
          array[j] = -1;
          break;
        }
      }

      if (j === n - 1) {
        times = 0;
      }
    }
  }

  //console.log("===================");
});
console.log(output);

//////////////////////////////////////////////////////////////////////////////////

let count = 0;
let alt = 0;
function countingValleys(steps, path) {
  // Write your code here
  for (let i = 0; i < steps; i++) {
    if (path[i] === "U") {
      if (alt == -1) {
        count++;
      }
      alt++;
    } else {
      alt--;
    }
  }
  return count;
}
countingValleys(8, "UDDDUDUU");
console.log(count);
//console.log(countingValleys(8,UDDDUDUU))
