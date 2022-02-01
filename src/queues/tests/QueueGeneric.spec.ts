import { Queue } from '../Queue';
import { Location } from '../../common/models/Location'

describe('tests with numbers - initial capacity ', () => {
    let queue: Queue<number>;

    describe('constructor with some checks ', () => {
        it(' should construct a queue with initial capacity', () => {
            queue = new Queue<number>(4);
      
            const capacity = queue.capacity();
            expect(capacity).toBe(4)
      
            const size = queue.size()
            expect(size).toBe(0)
        })

        it(' isFull should be false', () => {
            expect(queue.isFull()).toBeFalsy()
        });

        it( ' isEmpty should be true', () => {
            expect(queue.isEmpty()).toBeTruthy()
        });
        
        it (' dequeue after init should return null', () => {    
            let dq = queue.dequeue();
            expect(dq).toBeNull()
    
            console.log('--- should dequeue after init ---');
            console.log(queue.contents());
        })
    
        it(' peek after init should return null', () => {
            expect(queue.peek()).toBeNull();
        });
    });
    
    describe('enqueue tests', () => {
        it(' should enqueue(9, 3)', () => {
            let enqueueResult = queue.enqueue(9, 3);
    
            expect(queue.isEmpty()).toBeFalsy()
            expect(queue.isFull()).toBeFalsy();
    
            expect(enqueueResult).toBe(2);
            expect(queue.size()).toBe(2)
    
            expect(queue.peek()).toBe(9)

            expect(queue.contents()).toEqual(expect.arrayContaining([9, 3]))
            expect(queue.contents()).toEqual([9, 3, undefined, undefined])

            console.log('--- should enqueue(9,3) --- ');
            console.log(queue.contents());
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
    
            console.log('--- should enqueue(2) --- ');
            console.log(queue.contents());
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
    
            console.log('--- should enqueue(5, 7, 8, 1) --- ');
            console.log(queue.contents());
        });
    });

    describe('dequeue tests', () => {
        it(' should dequeue 1', () => {
            // [9, 3, 2, 5]
            expect(queue.peek()).toBe(9)
            expect(queue.dequeue()).toBe(9)
            expect(queue.contents()).toEqual([3, 2, 5, undefined])
        });

        it(' should dequeue 2', () => {
            // [3, 2, 5, undefined]
            expect(queue.peek()).toBe(3)
            expect(queue.dequeue()).toBe(3)
            expect(queue.contents()).toEqual([2, 5, undefined, undefined])
        });

        it(' should dequeue 3', () => {
            // [2, 5, undefined, undefined]
            expect(queue.peek()).toBe(2)
            expect(queue.dequeue()).toBe(2)
            expect(queue.contents()).toEqual([5, undefined, undefined, undefined])
        });

        it(' should dequeue 4', () => {
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

    describe('tests with mixins enqueue/dequeue', () => {
        it(' should enqueue some values', () => {
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
    
    /*
    
    it(' should construct a queue without fixed-length', () => {
        queue = new Queue<number>();
        const maxSize = queue.getMaxSize();
        console.log(`maxSize: ${maxSize} / length: ${queue.size()}`);
  
        queue.enqueue(9, 3);
        console.log(queue.contents());
        console.log(`maxSize: ${maxSize} / length: ${queue.size()}`);
    });
    
    it(' should enqueue some numbers', () => {
        expect(queue.isEmpty()).toBeTruthy()
        expect(queue.size()).toBe(0)
        
        queue.enqueue(9, 3)
        expect(queue.isEmpty()).toBeFalsy()
        expect(queue.size()).toBe(2)
        expect(typeof queue.peek()).toBe("number")
        expect(queue.peek()).toBe(9)

        queue.enqueue(5);
        expect(queue.size()).toBe(3)
        expect(queue.peek()).toBe(9)
    })

    it(' should dequeue some numbers', () => {
        expect(queue.peek()).toBe(9)
        expect(queue.dequeue()).toBe(9)
        expect(queue.size()).toBe(2)

        expect(queue.peek()).toBe(3)
        expect(queue.dequeue()).toBe(3)
        expect(queue.size()).toBe(1)

        expect(queue.peek()).toBe(5)
        expect(queue.dequeue()).toBe(5)
        expect(queue.size()).toBe(0)
        expect(queue.isEmpty()).toBeTruthy()
    });
    */
})

/*
// TODO: tests with strings
describe.skip('tests with strings', () => {
    it('should enqueue 1 string', () => {
        let queue = new Queue<string>("v", "o")

        expect(queue.size()).toBe(2)
        expect(typeof queue.peek()).toBe("string")

        queue.enqueue("c", "a");
        expect(queue.size()).toBe(4)
        expect(queue.peek()).toBe("v")
    })
})

// TODO: tests with locations
describe.skip('tests with locations', () => {
    let queue = new Queue<Location>(new Location(45.3, 1.5, new Date()));

    it(' should enqueue some locations', () => {
        expect(queue.size()).toBe(1);
        expect(queue.peek().constructor.name).toBe("Location")

        const location = new Location(48.1, 1.8, new Date());
        expect(queue.enqueue(location)).toBe(2)
        expect(queue.size()).toBe(2)
        expect(queue.peek().latitude).toBe(45.3)
        expect(queue.peek().longitude).toBe(1.5)
    })    
})
*/
