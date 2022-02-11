import add from 'date-fns/add'

import { Location } from '../../common/models/Location'
import { Queue } from '../Queue'

describe('tests with locations (no capacity)', () => {
    const capacity = -1
    let queue: Queue<Location>

    describe('constructor without params (no capacity)', () => {
        it(' should construct a queue without params', () => {
            queue = new Queue<Location>();

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
        let locationDate = new Date()
        const location1 = new Location(45.3, 1.5, locationDate)
        let location2: Location

        it(' should construct a queue with params', () => {
            locationDate = add(locationDate, {
                seconds: 1
            })
            
            location2 = new Location(45.5, 1.7, locationDate)

            queue = new Queue<Location>(capacity, location1, location2 )

            expect(queue.capacity()).toBe(-1)
            expect(queue.size()).toBe(2)
        });

        it(' isFull should be false', () => {
            expect(queue.isFull()).toBeFalsy()
        });

        it( ' isEmpty should be false', () => {
            expect(queue.isEmpty()).toBeFalsy()
        });

        it(' peek after init should return location1', () => {
            const peek = queue.peek()
            expect(peek).toBe(location1);
            expect(peek.constructor).toBe(Location)
        });
        
        it(' dequeue after init should return location1', () => {  
            expect(queue.dequeue()).toBe(location1)
            expect(queue.size()).toBe(1)
            expect(queue.contents()).toEqual([location2])
        })    
    });

    describe('enqueue tests', () => {
        let locationDate = new Date()
        let location1: Location
        let location2: Location
        let location3: Location

        it(' should enqueue(location1, location2)', () => {
            queue = new Queue<Location>();

            location1 = new Location(45.3, 1.5, locationDate)

            locationDate = add(locationDate, {
                seconds: 1
            })

            location2 = new Location(45.5, 1.7, locationDate)

            let enqueueResult = queue.enqueue(location1, location2);
    
            expect(queue.isEmpty()).toBeFalsy()
            expect(queue.isFull()).toBeFalsy();
    
            expect(enqueueResult).toBe(2);
            expect(queue.size()).toBe(2)
    
            expect(queue.peek()).toBe(location1)
            expect(queue.peek().constructor).toBe(Location)

            expect(queue.contents()).toEqual([location1, location2])

            console.log(queue.contents())
        });

        it(' should enqueue(location3)', () => {
            locationDate = add(locationDate, {
                seconds: 1
            })

            location3 = new Location(45.7, 1.9, locationDate)

            let enqueueResult = queue.enqueue(location3);

            expect(queue.isEmpty()).toBeFalsy()
            expect(queue.isFull()).toBeFalsy();
    
            expect(enqueueResult).toBe(3);
            expect(queue.size()).toBe(3)
    
            expect(queue.peek()).toBe(location1)
            expect(queue.peek().latitude).toBe(location1.latitude)
            expect(queue.peek().longitude).toBe(location1.longitude)

            expect(queue.contents()).toEqual([location1, location2, location3])

            console.log(queue.contents())
        });
    });

    describe('dequeue tests', () => {
        let location1: Location
        let location2: Location
        let location3: Location

        it(' should dequeue #1', () => {
            let locationDate = new Date()
            location1 = new Location(45.3, 1.5, locationDate)

            locationDate = add(locationDate, {
                seconds: 1
            })

            location2 = new Location(45.5, 1.7, locationDate)

            locationDate = add(locationDate, {
                seconds: 1
            })

            location3 = new Location(45.7, 1.9, locationDate)

            const capacity = -1
            queue = new Queue<Location>(capacity, location1, location2, location3)

            expect(queue.peek()).toBe(location1)
            expect(queue.dequeue()).toBe(location1)
            expect(queue.contents()).toEqual([location2, location3])
        });

        it(' should dequeue #2', () => {
            expect(queue.peek()).toBe(location2)
            expect(queue.dequeue()).toBe(location2)
            expect(queue.contents()).toEqual([location3])
        });

        it(' should dequeue #3', () => {
            expect(queue.peek()).toBe(location3)
            expect(queue.dequeue()).toBe(location3)
            expect(queue.contents()).toEqual([])

            expect(queue.isEmpty()).toBeTruthy()
            expect(queue.peek()).toBeNull()
        });
    });

    describe('tests with enqueue/dequeue mixins', () => {
        let locationDate = new Date()
        let location1: Location
        let location2: Location
        let location3: Location

        it(' should enqueue some values', () => {
            queue = new Queue<Location>()

            location1 = new Location(45.3, 1.5, locationDate)
            
            let enqueueResult = queue.enqueue(location1)
            expect(queue.size()).toBe(1);
            expect(enqueueResult).toBe(1);
            expect(queue.contents()).toEqual([location1])

            locationDate = add(locationDate, {
                seconds: 1
            })

            location2 = new Location(45.5, 1.7, locationDate)

            locationDate = add(locationDate, {
                seconds: 1
            })

            location3 = new Location(45.7, 1.9, locationDate)

            enqueueResult = queue.enqueue(location2, location3);
            expect(enqueueResult).toBe(3)
            expect(queue.size()).toBe(3)
            expect(queue.contents()).toEqual([location1, location2, location3])
        });

        it(' should dequeue some values', () => {
            expect(queue.peek()).toBe(location1)
            expect(queue.dequeue()).toBe(location1)
            expect(queue.contents()).toEqual([location2, location3])

            expect(queue.peek()).toBe(location2)
            expect(queue.dequeue()).toBe(location2)
            expect(queue.size()).toBe(1)
            expect(queue.capacity()).toBe(-1)
            expect(queue.contents()).toEqual([location3])
        });        
    });
})
