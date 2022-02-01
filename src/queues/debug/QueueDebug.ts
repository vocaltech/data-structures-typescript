import { Queue } from '../Queue'

let queue = new Queue<number>(4);
let enqueueResult = queue.enqueue(9)
console.log(enqueueResult);

enqueueResult = queue.enqueue(8, 6);
console.log(enqueueResult);

let peek = queue.peek() // 9
let dequeueResult = queue.dequeue() // 9
let sizeAfterDequeue = queue.size() // 2
console.log(sizeAfterDequeue);
