let Stack1 = [];
let Stack2 = [];
function enqueue(value) {
 Stack1.push(value);
}
function dequeue() {
 if (Stack2.length === 0) {
   if (Stack1.length === 0) { return 'queue is empty'; }
   while (Stack1.length > 0) {
     let temp = Stack1.pop();
     Stack2.push(temp);
   }
 }
 return Stack2.pop();
}
enqueue('a');
enqueue('b');
enqueue('c');
dequeue();
console.log(Stack1);
console.log(Stack2);