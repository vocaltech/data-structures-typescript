import { Queue } from '../Queue'

describe('tests with numbers (no capacity)', () => {
    let queue: Queue<number>

    describe('constructor without params (no capacity)', () => {
        it(' should construct a queue without params', () => {
            queue = new Queue<number>();

            const capacity = queue.capacity();
            expect(capacity).toBe(-1)
      
            const size = queue.size()
            expect(size).toBe(0)
        });
        
        it(' isFull should be false', () => {
            expect(queue.isFull()).toBeFalsy()
        });

        it( ' isEmpty should be true', () => {
            expect(queue.isEmpty()).toBeTruthy()
        });
        
        it(' dequeue after init should return undefined', () => {    
            expect(queue.dequeue()).toBeUndefined()
        })
    
        it(' peek after init should return null', () => {
            expect(queue.peek()).toBeNull();
        });
    });

    describe('constructor with params (no capacity)', () => {
        it(' should construct a queue with params', () => {
            const capacity = -1
            queue = new Queue<number>(capacity, 10, 3)

            expect(queue.capacity()).toBe(-1)
            expect(queue.size()).toBe(2)
        });

        it(' isFull should be false', () => {
            expect(queue.isFull()).toBeFalsy()
        });

        it( ' isEmpty should be false', () => {
            expect(queue.isEmpty()).toBeFalsy()
        });

        it(' peek after init should return 10', () => {
            const peek = queue.peek()
            expect(peek).toBe(10);
            expect(typeof peek).toBe('number')
        });
        
        it(' dequeue after init should return 10', () => {    
            expect(queue.dequeue()).toBe(10)
            expect(queue.contents()).toEqual([3])
        })    
    });
    
    describe('enqueue tests', () => {
        it(' should enqueue(9, 3)', () => {
            queue = new Queue<number>();

            let enqueueResult = queue.enqueue(9, 3);
    
            expect(queue.isEmpty()).toBeFalsy()
            expect(queue.isFull()).toBeFalsy();
    
            expect(enqueueResult).toBe(2);
            expect(queue.size()).toBe(2)
    
            expect(queue.peek()).toBe(9)
            expect(typeof queue.peek()).toBe("number")

            expect(queue.contents()).toEqual(expect.arrayContaining([9, 3]))
            expect(queue.contents()).toEqual([9, 3])
        });

        it(' should enqueue(2)', () => {
            let enqueueResult = queue.enqueue(2);

            expect(queue.isEmpty()).toBeFalsy()
            expect(queue.isFull()).toBeFalsy();
    
            expect(enqueueResult).toBe(3);
            expect(queue.size()).toBe(3)
    
            expect(queue.peek()).toBe(9)
            expect(typeof queue.peek()).toBe("number")

            expect(queue.contents()).toEqual(expect.arrayContaining([9, 3, 2]))
            expect(queue.contents()).toEqual([9, 3, 2])
        });

        it(' should enqueue(5, 7, 8, 1)', () => {
            let enqueueResult = queue.enqueue(5, 7, 8, 1);

            expect(queue.isEmpty()).toBeFalsy()
            expect(queue.isFull()).toBeFalsy()
    
            expect(enqueueResult).toBe(7);
            expect(queue.size()).toBe(7)
    
            expect(queue.peek()).toBe(9)
            expect(typeof queue.peek()).toBe("number")

            expect(queue.contents()).toEqual(expect.arrayContaining([9, 3, 2, 5]))
            expect(queue.contents()).toEqual([9, 3, 2, 5, 7, 8, 1])
        });
    });

    describe('dequeue tests', () => {
        it(' should dequeue 1', () => {
            const capacity = -1
            queue = new Queue<number>(capacity, 9, 3, 2, 5, 7, 8, 1)

            // [9, 3, 2, 5, 7, 8, 1]
            expect(queue.peek()).toBe(9)
            expect(queue.dequeue()).toBe(9)
            expect(queue.contents()).toEqual([3, 2, 5, 7, 8, 1])
        });

        it(' should dequeue 2', () => {
            // [3, 2, 5, 7, 8, 1]
            expect(queue.peek()).toBe(3)
            expect(queue.dequeue()).toBe(3)
            expect(queue.contents()).toEqual([2, 5, 7, 8, 1])
        });

        it(' should dequeue 3', () => {
            // [2, 5, 7, 8, 1]
            expect(queue.peek()).toBe(2)
            expect(queue.dequeue()).toBe(2)
            expect(queue.contents()).toEqual([5, 7, 8, 1])
        });

        it(' should dequeue until queue isEmpty', () => {
            while (! queue.isEmpty()) {
                queue.dequeue()
            }

            expect(queue.contents()).toEqual([])
            expect(queue.isEmpty()).toBeTruthy()
            expect(queue.peek()).toBeNull()
        });
    });

    describe('tests with enqueue/dequeue mixins', () => {
        it(' should enqueue some values', () => {
            queue = new Queue<number>()
            
            let enqueueResult = queue.enqueue(9)
            expect(queue.size()).toBe(1);
            expect(enqueueResult).toBe(1);
            expect(queue.contents()).toEqual([9])
            
            enqueueResult = queue.enqueue(8, 6);
            expect(enqueueResult).toBe(3)
            expect(queue.size()).toBe(3)
            expect(queue.contents()).toEqual([9, 8, 6])
        });

        it(' should dequeue some values', () => {
            expect(queue.peek()).toBe(9)
            expect(queue.dequeue()).toBe(9)
            expect(queue.contents()).toEqual([8, 6])

            expect(queue.peek()).toBe(8)
            expect(queue.dequeue()).toBe(8)
            expect(queue.size()).toBe(1)
            expect(queue.capacity()).toBe(-1)
            expect(queue.contents()).toEqual([6])
        });        
    });
});