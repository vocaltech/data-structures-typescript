import { Queue } from '../Queue';
import { Location } from './models/Location'

describe('tests with numbers', () => {
    it('should enqueue 1 number', () => {
        let queue = new Queue<number>(9, 3)

        expect(queue.size()).toBe(2)
        expect(typeof queue.peek()).toBe("number")

        queue.enqueue(5);
        expect(queue.size()).toBe(3)
    })
})

describe('tests with strings', () => {
    it('should enqueue 1 string', () => {
        let queue = new Queue<string>("v", "o")

        expect(queue.size()).toBe(2)
        expect(typeof queue.peek()).toBe("string")

        queue.enqueue("c", "a");
        expect(queue.size()).toBe(4)
        expect(queue.peek()).toBe("v")
    })
})

describe('tests with locations', () => {
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

