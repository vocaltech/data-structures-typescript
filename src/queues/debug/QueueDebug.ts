import { Queue } from '../Queue'

let queue = new Queue<number>(4);

let isEmpty = queue.isEmpty() // should be true
console.log(isEmpty)

let enqueueResult = queue.enqueue(9, 3)
console.log(enqueueResult);

let queueContents = queue.contents() // bug: returns []
console.log(queueContents) 

isEmpty = queue.isEmpty() // should be false



