//MAP

// given an arr, multiple each element by 2 to form new Array
// MENTOS ZINDAGI

const arr = [1,2,3,4,5]

const transform = (i)=>{
    return i*2;
}
// take arr as inpust parameter for transform();
const result = arr.map(transform);
console.log(result);

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




// filter

// given an array, print all the even value from the array

// MENTOS ZINDAGI

const input = [2,3,4,5,6]

const filterLogic = (n) =>{
    if(n%2 == 0){
        return true;
    }
    else {
        return false;
    }
}

const ans = input.filter(filterLogic);
console.log(ans);

//AAM ZINDAGI
// const input = [1,2,3,4,5,6,7,8]

// const evenInput = []
// for(let i = 0; i < input.length ; i++){
//     if(input[i]%2 == 0){
//         evenInput.push(input[i])
//     }
// }
// console.log(evenInput);



