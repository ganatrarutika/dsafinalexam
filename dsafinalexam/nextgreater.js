let arr = [4,5,2,25]

function greater(arr){
    let stack = [];
    let result = new Array(arr.length).fill(-1)

    for (let i = 0; i<arr.length; i++){
        while(stack.length>0 && arr[stack[stack.length-1]] < arr[i]){
            let index = stack.pop();
            result[index] = arr[i];
        }
        stack.push(i);
    }
    return result
}
console.log(greater(arr));