import { Queue } from '../Queue';

describe('tests with numbers (initial capacity)', () => {
    let queue: Queue<number>;

    describe('constructor with initial capacity, without params', () => {
        it(' should construct a queue without params', () => {
            const capacity = 4
            queue = new Queue<number>(capacity);
      
            expect(queue.capacity()).toBe(4)
            expect(queue.size()).toBe(0)
        })

        it(' isFull should be false', () => {
            expect(queue.isFull()).toBeFalsy()
        });

        it( ' isEmpty should be true', () => {
            expect(queue.isEmpty()).toBeTruthy()
        });
        
        it (' dequeue after init should return null', () => {    
            expect(queue.dequeue()).toBeNull()
        })
    
        it(' peek after init should return null', () => {
            expect(queue.peek()).toBeNull();
        });
    });

    describe('constructor with initial capacity, with params', () => {
        it(' should construct a queue with params (not full)', () => {
            const capacity = 4;
            queue = new Queue<number>(capacity, 9, 5, 7);

            expect(queue.capacity()).toBe(4)
            expect(queue.size()).toBe(3)
        })

        it(' isFull should be false', () => {
            expect(queue.isFull()).toBeFalsy()
        });

        it(' isEmpty should be false', () => { 
            expect(queue.isEmpty()).toBeFalsy()
        })

        it(' should construct another queue with params (full)', () => {
            const capacity = 4;
            queue = new Queue<number>(capacity, 9, 5, 7, 3);

            expect(queue.capacity()).toBe(4)
            expect(queue.size()).toBe(4)
            expect(queue.contents()).toEqual([9, 5, 7, 3])
        })

        it(' isFull should be true', () => {
            expect(queue.isFull()).toBeTruthy()
        });

        it(' isEmpty should be false', () => {
            expect(queue.isEmpty()).toBeFalsy()
        });

        it(' peek after init should return 9', () => {
            expect(queue.peek()).toBe(9);
        });
        
        it (' dequeue #1 should return 9', () => {    
            expect(queue.dequeue()).toBe(9)
            expect(queue.size()).toBe(3)
            expect(queue.isFull()).toBeFalsy()
            expect(queue.isEmpty()).toBeFalsy()
            expect(queue.contents()).toEqual([5, 7, 3, undefined])
        })

        it (' dequeue #2 should return 5', () => {    
            expect(queue.dequeue()).toBe(5)
            expect(queue.size()).toBe(2)
            expect(queue.isFull()).toBeFalsy()
            expect(queue.isEmpty()).toBeFalsy()
            expect(queue.contents()).toEqual([7, 3, undefined, undefined])
        })

        it (' dequeue #3 should return 7', () => {    
            expect(queue.dequeue()).toBe(7)
            expect(queue.size()).toBe(1)
            expect(queue.isFull()).toBeFalsy()
            expect(queue.isEmpty()).toBeFalsy()
            expect(queue.contents()).toEqual([3, undefined, undefined, undefined])
        })

        it (' dequeue #4 should return 3', () => {    
            expect(queue.dequeue()).toBe(3)
            expect(queue.size()).toBe(0)
            expect(queue.isFull()).toBeFalsy()
            expect(queue.isEmpty()).toBeTruthy()
            expect(queue.contents()).toEqual([undefined, undefined, undefined, undefined])
        })

        it (' dequeue #5 should return null', () => {    
            expect(queue.dequeue()).toBeNull()
            expect(queue.size()).toBe(0)
            expect(queue.isFull()).toBeFalsy()
            expect(queue.isEmpty()).toBeTruthy()
            expect(queue.contents()).toEqual([undefined, undefined, undefined, undefined])
        })
    });
    
    describe('enqueue tests', () => {
        it(' should enqueue(9, 3)', () => {
            queue = new Queue<number>(4);
            let enqueueResult = queue.enqueue(9, 3);
    
            expect(queue.isEmpty()).toBeFalsy()
            expect(queue.isFull()).toBeFalsy();
    
            expect(enqueueResult).toBe(2);
            expect(queue.size()).toBe(2)
    
            expect(queue.peek()).toBe(9)

            expect(queue.contents()).toEqual(expect.arrayContaining([9, 3]))
            expect(queue.contents()).toEqual([9, 3, undefined, undefined])
        });

        it(' should enqueue(2)', () => {
            let enqueueResult = queue.enqueue(2);

            expect(queue.isEmpty()).toBeFalsy()
            expect(queue.isFull()).toBeFalsy();
    
            expect(enqueueResult).toBe(3);
            expect(queue.size()).toBe(3)
    
            expect(queue.peek()).toBe(9)

            expect(queue.contents()).toEqual(expect.arrayContaining([9, 3, 2]))
            expect(queue.contents()).toEqual([9, 3, 2, undefined])
        });

        it(' should enqueue(5, 7, 8, 1)', () => {
            let enqueueResult = queue.enqueue(5, 7, 8, 1);

            expect(queue.isEmpty()).toBeFalsy()
            expect(queue.isFull()).toBeTruthy();
    
            expect(enqueueResult).toBe(4);
            expect(queue.size()).toBe(4)
    
            expect(queue.peek()).toBe(9)

            expect(queue.contents()).toEqual(expect.arrayContaining([9, 3, 2, 5]))
            expect(queue.contents()).toEqual([9, 3, 2, 5])
        });
    });

    describe('dequeue tests', () => {
        it(' should dequeue #1', () => {
            const capacity = 4
            queue = new Queue<number>(capacity, 9, 3, 2, 5)

            // [9, 3, 2, 5]
            expect(queue.peek()).toBe(9)
            expect(queue.dequeue()).toBe(9)
            expect(queue.contents()).toEqual([3, 2, 5, undefined])
        });

        it(' should dequeue #2', () => {
            // [3, 2, 5, undefined]
            expect(queue.peek()).toBe(3)
            expect(queue.dequeue()).toBe(3)
            expect(queue.contents()).toEqual([2, 5, undefined, undefined])
        });

        it(' should dequeue #3', () => {
            // [2, 5, undefined, undefined]
            expect(queue.peek()).toBe(2)
            expect(queue.dequeue()).toBe(2)
            expect(queue.contents()).toEqual([5, undefined, undefined, undefined])
        });

        it(' should dequeue #4', () => {
            // [5, undefined, undefined, undefined]
            expect(queue.peek()).toBe(5)
            expect(queue.dequeue()).toBe(5)
            expect(queue.contents()).toEqual([undefined, undefined, undefined, undefined])
            expect(queue.isEmpty()).toBeTruthy();
        });

        it(' should dequeue empty and return null', () => {
            expect(queue.peek()).toBeNull();
            expect(queue.dequeue()).toBeNull()
        });
    });

    describe('tests with enqueue/dequeue mixins (without params)', () => {
        it(' should enqueue some values', () => {
            const capacity = 4
            queue = new Queue<number>(capacity)

            let enqueueResult = queue.enqueue(9)
            expect(queue.size()).toBe(1);
            expect(enqueueResult).toBe(1);
            expect(queue.contents()).toEqual([9, undefined, undefined, undefined])
            
            enqueueResult = queue.enqueue(8, 6);
            expect(enqueueResult).toBe(3)
            expect(queue.size()).toBe(3)
            expect(queue.contents()).toEqual([9, 8, 6, undefined])
        });

        it(' should dequeue some values', () => {
            expect(queue.peek()).toBe(9)
            expect(queue.dequeue()).toBe(9)
            expect(queue.contents()).toEqual([8, 6, undefined, undefined])

            expect(queue.peek()).toBe(8)
            expect(queue.dequeue()).toBe(8)
            expect(queue.size()).toBe(1)
            expect(queue.capacity()).toBe(4)
            expect(queue.contents()).toEqual([6, undefined, undefined, undefined])
        });        
    });

    describe('tests with enqueue/dequeue mixins (with params)', () => {
        it(' should enqueue some values', () => {
            const capacity = 4
            queue = new Queue<number>(capacity, 5, 7)

            let enqueueResult = queue.enqueue(9)
            expect(queue.size()).toBe(3);
            expect(enqueueResult).toBe(3);
            expect(queue.contents()).toEqual([5, 7, 9, undefined])
            
            enqueueResult = queue.enqueue(8, 6);
            expect(enqueueResult).toBe(4)
            expect(queue.size()).toBe(4)
            expect(queue.isFull()).toBeTruthy()
            expect(queue.contents()).toEqual([5, 7, 9, 8])
        });

        it(' should dequeue some values', () => {
            expect(queue.peek()).toBe(5)
            expect(queue.dequeue()).toBe(5)
            expect(queue.contents()).toEqual([7, 9, 8, undefined])

            expect(queue.peek()).toBe(7)
            expect(queue.dequeue()).toBe(7)
            expect(queue.size()).toBe(2)
            expect(queue.capacity()).toBe(4)
            expect(queue.contents()).toEqual([9, 8, undefined, undefined])
        });        
    });
})