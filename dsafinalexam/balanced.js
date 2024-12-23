function balace(s){
    let stack = [];
    let match = {
        ')' : '(',
        '}' : '{',
        ']' : '['
    }
    for(let i = 0; i<s.length; i++){
        let char = s[i];
        if(char =='(' || char == '{' || char == '['){
            stack.push(char);
        }else if (char == ')' || char == '}' || char == ']'){
            if(stack.length == 0 || stack[stack.length -1] !== match[char]){
                return false
            } 
            stack.pop()
        }
    }
    return stack.length == 0;
}
console.log(balace("({[]})"));
console.log(balace("([)]"))