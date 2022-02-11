import { Queue } from '../Queue'
import { Location } from '../../common/models/Location'

describe('tests with locations (initial capacity)', () => {
    let queue: Queue<Location>;

    describe('constructor with initial capacity, without params', () => {
        it(' should construct a queue without params', () => {
            const capacity = 4
            queue = new Queue<Location>(capacity);
      
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
    })

    // TODO: constructor with initial capacity, with params
    describe('constructor with initial capacity, with params', () => {
        it(' should construct a queue with params (not full)', () => {


        })
    })

    // TODO: enqueue tests
    describe('enqueue tests', () => {
        it(' should enqueue(location1, location2)', () => {

        })
    })

    // TODO: dequeue tests
    describe('dequeue tests', () => {
        it(' should dequeue #1', () => {

        })
    })

    // TODO: tests with enqueue/dequeue mixins (without params)
    describe('tests with enqueue/dequeue mixins (without params)', () => {
        it(' should enqueue some values', () => {

        })

        it(' should dequeue some values', () => {
            
        })

    })

    // TODO: tests with enqueue/dequeue mixins (with params)
    describe('tests with enqueue/dequeue mixins (with params)', () => {
        it(' should enqueue some values', () => {

        })

        it(' should dequeue some values', () => {
            
        })
    })
})