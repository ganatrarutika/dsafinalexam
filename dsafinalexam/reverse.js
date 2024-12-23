let queue = [];
enqueue(queue, 1);
enqueue(queue, 2);
enqueue(queue, 3);
enqueue(queue, 4);

function enqueue(queue, element) {
    queue.push(element);
  }
  
  function dequeue(queue) {
    return queue.shift(); 
  }
  
  function isEmpty(queue) {
    return queue.length === 0;
  }
  
  function reverse(queue) {
    let stack = [];
  
    while (!isEmpty(queue)) {
      let item = dequeue(queue);
      stack.push(item);
    }
    while (stack.length > 0) {
      let item = stack.pop();
      enqueue(queue, item); 
    }
  }

  reverse(queue); 
  console.log("Reversed Queue:", queue); 
  