// given an arr, multiple each element by 2 to form new Array
// AAM ZINDAGI -->
// const ans = add(1,2)
// console.log(ans);
// console.log(sum(1,3));

// const arr = [1,2,3]

// const newArr = []
// for(let i=0; i<arr.length ; i++){
//         newArr.push(arr[i]*2)
// }
// console.log(arr);

// console.log(newArr);

// MENTOS ZINDAGI

const arr = [1,2,3,4,5]

const transform = (i)=>{
    return i*2;
}
const ans = arr.map(transform);  // take arr as inpust parameter for transform();
console.log(ans);
