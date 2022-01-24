import { Queue } from '../Queue';
import { Location } from './models/Location'

describe('tests with numbers', () => {
    const queue = new Queue<number>()

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
})

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

