# Data structures using Typescript
> ### Queues

**Usage with generic type:**

```
// constructor
let q = new Queue<string>("v", "o")

// enqueue 1 string and returns the size of queue
q.enqueue("c"); // returns 3

// returns the head of the queue (without dequeuing)
q.peek(); // returns "v"

// returns the size of the queue
queue.size(); // returns 3

// dequeue
queue.dequeue(); // returns "v"
```