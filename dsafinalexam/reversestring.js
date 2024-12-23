let str = "hello";

function reverse (str){
    let stack = [];
    for(let i = 0; i<str.length; i++){
        stack.push(str[i]);
    }
    let Reversed ='';
    while (stack.length>0){
        Reversed += stack.pop();
    }
    return Reversed;
}
console.log(reverse(str));