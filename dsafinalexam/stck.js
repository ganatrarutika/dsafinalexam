
class StackUsingQueues {
    constructor() {
      this.queue1 = []; 
      this.queue2 = []; 
    }

    push(x) {
      this.queue2.push(x);
      while (this.queue1.length > 0) {
        this.queue2.push(this.queue1.shift());
      }
      
      let temp = this.queue1;
      this.queue1 = this.queue2;
      this.queue2 = temp;
    }
  
    pop() {
      if (this.empty()) {
        return null; 
      }
      return this.queue1.shift();
    }
  
    top() {
      if (this.empty()) {
        return null; 
      }
      return this.queue1[0]; 
    }
  
    empty() {
      return this.queue1.length === 0;
    }
  }

  let stack = new StackUsingQueues();
  stack.push(10);
  stack.push(20);
  stack.push(30);
  
  console.log(stack.top());  
  console.log(stack.pop());  
  console.log(stack.top());  
  console.log(stack.pop());  
  console.log(stack.empty()); 
  stack.pop();
  console.log(stack.empty()); 
  