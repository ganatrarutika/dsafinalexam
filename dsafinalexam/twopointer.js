let arr =  [1, 2, 3, 4, 5, 6];

let target = 9;
let start = 0;
let end = arr.length - 1;

function two(){
    while(start < end){
        let sum = arr[start] + arr[end];
    
        if(sum == target){
            return [arr[start], arr[end]];
        } else if(sum > target){
            end--;
        } else{
            start++;
        }
    }

    return -1;
}

console.log(two())