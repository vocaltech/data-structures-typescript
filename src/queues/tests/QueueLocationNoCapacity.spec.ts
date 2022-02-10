import { Location } from '../../common/models/Location'
import { Queue } from '../Queue'

describe('tests with locations (no capacity)', () => {
    const capacity = -1
    let queue = new Queue<Location>(capacity, new Location(45.3, 1.5, new Date()));

    it(' should enqueue some locations', () => {
        expect(queue.size()).toBe(1);
        expect(queue.peek().constructor.name).toBe("Location")

        const location = new Location(48.1, 1.8, new Date());
        expect(queue.enqueue(location)).toBe(2)
        expect(queue.size()).toBe(2)
        expect(queue.peek().latitude).toBe(45.3)
        expect(queue.peek().longitude).toBe(1.5)

        console.log(queue.contents())
    })    
})
