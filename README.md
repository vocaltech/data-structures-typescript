# Data structures using Typescript
> ### Queues

**Constructor syntax**

<code>constructor(capacity?: number, ...args: T[])</code>

**Constructor - without initial capacity**
```
new Queue<string>()
new Queue<string>('v', 'o'); // no capacity, with values

```

**Constructor - with initial capacity**
```
new Queue<string>(4); // initial capacity: 4
new Queue<string>(4, 'v', 'o'); // initial capacity: 4, with values

```

```
// constructor
let q = new Queue<string>('v', 'o')

// enqueue 1 string and returns the size of queue
q.enqueue('c'); // returns 3

// returns the head of the queue (without dequeuing)
q.peek(); // returns 'v'

// returns the size of the queue
queue.size(); // returns 3

// dequeue
queue.dequeue(); // returns 'v'
```

> ### Stacks

**Usage with generics:**

```
// constructor
const stack = new Stack<string>('c', 'b', 'a')

// push 1 string and returns the size of stack
stack.push('d'); // returns 4

// returns the top of the stack (without removing)
stack.top(); // returns 'd'

// returns the size of the stack
stack.size(); // returns 4

// remove the top of the stack
stack.pop(); // returns 'd'
```

> ### Linked lists (simple)

**Usage with generics:**

```
// constructor
const list = new LinkedListSimple<string>()

// insert item at first position
list.insertFirst('item1')

// get item at first position
list.getFirst() // return item1

// check if list isEmpty()
list.isEmpty() // return false

// insert item at last position
list.insertLast('item2')

// get item at last position
list.getLast() // return item2

// check if list contains item
list.contains('item2') // return true

```