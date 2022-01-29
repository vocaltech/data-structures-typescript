import { Queue } from '../Queue'

let queue = new Queue<number>(4);

let isEmpty = queue.isEmpty()
let dq = queue.dequeue();
console.log(queue.contents());

queue.enqueue(9, 3);
isEmpty = queue.isEmpty()
console.log(queue.contents());
