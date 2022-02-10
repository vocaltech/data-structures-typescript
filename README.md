# Data structures using Typescript
> ### Queues

**Constructor syntax**

<code>constructor(capacity?: number, ...args: T[])</code>

**Constructor - without capacity**
```
// without initial params
new Queue<number>(); 

// with params
const capacity = -1
new Queue<number>(capacity, 10, 3)
```

**Constructor - with capacity**
```
// without initial params
const capacity = 4
queue = new Queue<number>(capacity);

// with params
const capacity = 4;
queue = new Queue<number>(capacity, 9, 5, 7);
```

**Methods**
```
// return the contents of the queue
contents(): T[]

// return the capacity of the queue
// Note: -1 is returned if any capacity is defined
capacity(): number

// enqueue some values and return the size of the queue
enqueue(...args: T[]): number

// return the first element of the queue (without dequeueing)
peek(): T

// dequeue and return the element
dequeue(): T

// return true if the queue is empty, 
// else return false
isEmpty(): boolean

// return true if the queue is full, 
// else return false
// Note: always return false for queue WITHOUT capacity
isFull(): boolean

// return the size of the queue
size(): number
```

**Usage**
```
```

> ### Stacks

**Constructor syntax**

<code>constructor(capacity?: number, ...args: T[])</code>

**Constructor - without initial capacity**
```
new Stack<string>()
new Stack<string>(-1, 'v', 'o'); // no capacity, with 2 initial values

```

**Constructor - with initial capacity**
```
new Stack<string>(4); // initial capacity: 4
new Stack<string>(4, 'v', 'o'); // initial capacity: 4, with values

```

**Usage**

```
// constructor
const stack = new Stack<string>(-1, 'c', 'b', 'a')

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