import { Queue } from '../Queue';
import { Location } from '../../common/models/Location'

describe('tests numbers - with initial capacity ', () => {
    let queue: Queue<number>;

    it(' should construct a queue with initial capacity', () => {
      queue = new Queue<number>(4);

      const capacity = queue.getCapacity();
      expect(capacity).toBe(4)

      const size = queue.size()
      expect(size).toBe(0)
    })

    it (' should dequeue after init', () => {
        const isEmpty = queue.isEmpty();
        expect(isEmpty).toBeTruthy()

        let dq = queue.dequeue();
        expect(dq).toBeNull()

        console.log('--- should dequeue after init ---');
        console.log(queue.contents());
    })

    it(' should peek after init', () => {
        expect(queue.peek()).toBeNull();
    });
    

    it(' should enqueue(9, 3)', () => {
        let queueRes = queue.enqueue(9, 3);

        expect(queue.isEmpty()).toBeFalsy()
        expect(queue.isFull()).toBeFalsy();

        expect(queueRes).toBe(2);
        expect(queue.size()).toBe(2)

        expect(queue.peek()).toBe(9)

        console.log('--- should enqueue(9,3) --- ');
        console.log(queue.contents());
    });
    
/*
      queue.enqueue(2);
      expect(queue.isFull()).toBeFalsy();
      console.log(queue.contents());

      queue.enqueue(5, 7);
      console.log(queue.contents());
      expect(queue.isFull()).toBeTruthy()

      queue.enqueue(8, 6);
      expect(queue.isFull()).toBeTruthy();
      console.log(queue.contents());

      let pk = queue.peek()
      console.log(`peek: ${pk}`);

      console.log('#### dequeue ####');
      dq = queue.dequeue();
      console.log(`dq: ${dq}`);
      console.log(queue.contents());

      console.log('#### dequeue ####');
      dq = queue.dequeue();
      console.log(`dq: ${dq}`);
      console.log(queue.contents());

      console.log('#### dequeue ####');
      dq = queue.dequeue();
      console.log(`dq: ${dq}`);
      console.log(queue.contents());

      console.log('### enqueue(9) ###');
      queue.enqueue(9);
      console.log(queue.contents());
      
      console.log('### enqueue(8, 6) ###');
      queue.enqueue(8, 6);
      console.log(queue.contents());

      console.log('#### dequeue ####');
      dq = queue.dequeue();
      console.log(`dq: ${dq}`);
      console.log(queue.contents());
      */

      /*
      pk = queue.peek()
      console.log(`peek: ${pk}`);

      dq = queue.dequeue();
      console.log(`dq: ${dq}`);
      console.log(queue.contents());
      console.log(`capacity: ${capacity} / length: ${queue.size()}`);
      */

    /*
    // TODO: isFull() test
    test(' isFull() should be true', () => {

    });
    
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
