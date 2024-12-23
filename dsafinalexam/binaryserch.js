let arr = [1, 3, 5, 7, 9, 11];
let target = 7;
function binary(arr, target, low, high) {
    if (low > high) {
        return -1; 
    }
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] === target) {
        return mid; 
    }
    if (arr[mid] > target) {
        return binary(arr, target, low, mid - 1);
    }
    return binary(arr, target, mid + 1, high);
}

let result = binary(arr, target, 0, arr.length - 1);
console.log(result); 
