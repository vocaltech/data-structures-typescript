import { Stack } from '../Stack';

describe('tests with strings - with capacity', () => {
    let stack: Stack<string>;

    describe('constructor1 with some checks', () => {
        it(' should construct a stack with capacity', () => {
            stack = new Stack(4)

            expect(stack.capacity()).toBe(4)
            expect(stack.size()).toBe(0);
        });
        
        it(' isFull should be false', () => {
            expect(stack.isFull()).toBeFalsy()
        });

        it(' isEmpty should be true', () => {
            expect(stack.isEmpty()).toBeTruthy()
        });

        it(' pop after init should return null', () => {    
            let pop = stack.pop()
            expect(pop).toBeNull()
        })
    
        it(' top after init should return null', () => {
            expect(stack.top()).toBeNull();
        });
    });

    describe('constructor2 with some checks', () => {
        it(' should construct a stack with capacity, with args', () => {
            stack = new Stack(4, '1', '2', '3')

            expect(stack.capacity()).toBe(4)
            expect(stack.size()).toBe(3);

            console.log(stack.contents);
        });

        it(' isFull should be false', () => {
            expect(stack.isFull()).toBeFalsy()
        });

        it( ' isEmpty should be false', () => {
            expect(stack.isEmpty()).toBeFalsy()
        });

        it(' top after init should return 1', () => {
            expect(stack.top()).toBe('1');
        });
        
        it(' pop after init should return 1', () => {    
            expect(stack.pop()).toBe('1')
        })

        it(' should display content', () => {
            expect(stack.contents).toEqual(['2', '3'])

            console.log('--- content after pop ---');
            console.log(stack.contents);
        });  
    });

    describe('push items tests', () => {
        it(' should push some items on the stack ', () => {
            stack = new Stack(4)

            expect(stack.isEmpty()).toBe(true);
    
            let pushResult = stack.push("c", "b", "a");

            expect(stack.isEmpty()).toBeFalsy()
            expect(pushResult).toBe(3)
            expect(stack.size()).toBe(3)
            expect(stack.isFull()).toBeFalsy()
            expect(stack.top()).toBe('c')
            expect(typeof stack.top()).toBe('string')
            expect(stack.contents).toEqual(["c", "b", "a"])
            console.log(stack.contents);

            pushResult = stack.push('d')

            expect(pushResult).toBe(4)
            expect(stack.size()).toBe(4)
            expect(stack.isFull()).toBeTruthy()
            expect(stack.top()).toBe('d')
            expect(stack.contents).toEqual(["d", "c", "b", "a"])
            console.log(stack.contents);

            pushResult = stack.push('e')

            expect(pushResult).toBe(0)
            expect(stack.size()).toBe(4)
            expect(stack.isFull()).toBeTruthy()
            expect(stack.top()).toBe('d')
            expect(stack.contents).toEqual(["d", "c", "b", "a"])
        })
    });
    
    describe('pop items tests', () => {
        it(' should pop some items from the stack', () => {    
            stack = new Stack(4, 'd', 'c', 'b', 'a')

            console.log(stack.contents);

            expect(stack.isFull()).toBeTruthy()
            expect(stack.size()).toBe(4)

            expect(stack.top()).toBe('d')
            expect(stack.pop()).toBe('d')
            expect(stack.size()).toBe(3)
            expect(stack.contents).toEqual(['c', 'b', 'a'])
            console.log(stack.contents);

            expect(stack.top()).toBe('c')
            expect(stack.pop()).toBe('c')
            expect(stack.size()).toBe(2)
            expect(stack.contents).toEqual(['b', 'a'])
            console.log(stack.contents);

            expect(stack.top()).toBe('b')
            expect(stack.pop()).toBe('b')
            expect(stack.size()).toBe(1)
            expect(stack.contents).toEqual(['a'])
            console.log(stack.contents);

            expect(stack.top()).toBe('a')
            expect(stack.pop()).toBe('a')
            expect(stack.size()).toBe(0)
            expect(stack.isEmpty()).toBeTruthy()
            expect(stack.contents).toEqual([])
            console.log(stack.contents);

            expect(stack.top()).toBeNull()
            expect(stack.pop()).toBeNull()
        })
    });
})