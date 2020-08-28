function makeCurry(Arr) {
  let total = Arr.reduce((acc, cv) => acc + cv);
  let target = total / 3;
  let P = [],
    Q = [],
    R = [];
  let sum = 0;
  let index = [];

  if (total % 3 > 0) {
    console.log("No Luck");
    return;
  }

  for (let i = 0; i < Arr.length; i++) {
    if (Arr[i] == target) {
      P.push(i);
    }
  }

  for (let j = 0; j < Arr.length; j++) {
    for (let k = 1; k < Arr.length; k++) {
      if (Arr[j] == target || Arr[k] == target) {
        continue;
      } else {
        addTotal = Arr[j] + Arr[k];
        sum = sum + addTotal;
        index.push(j);
        index.push(k);
        if (sum == target) {
          Q.push(index);
          break;
        }
      }
    }
  }

  let pqIndex = [];
  pqIndex.push(P);
  pqIndex.push(Q);

  for (let l = 0; l < Arr.length; l++) {
    if (pqIndex[l] != l) {
      R.push(l);
    }
  }

  console.log("P -->", P);
  console.log("q -->", Q);
  console.log("r -->", R);
}

let arr = [3, 7, 4, 5, 2];
//let arr = [3, 6, 9, 4];
makeCurry(arr);
