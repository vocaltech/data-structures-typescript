import { Stack } from '../Stack';

describe('tests with strings - no capacity', () => {
    let stack: Stack<string>;

    describe('constructor1 with some checks', () => {
        it(' should construct a stack with no capacity', () => {
            stack = new Stack()

            expect(stack.capacity()).toBe(-1)
            expect(stack.size()).toBe(0);
        });
        
        it(' isFull should be false', () => {
            expect(stack.isFull()).toBeFalsy()
        });

        it( ' isEmpty should be true', () => {
            expect(stack.isEmpty()).toBeTruthy()
        });
        
        it(' pop after init should return undefined', () => {    
            let pop = stack.pop()
            expect(pop).toBeUndefined()
    
            console.log('--- should pop after init ---');
            console.log(stack.contents);
        })
    
        it(' top after init should return null', () => {
            expect(stack.top()).toBeNull();
        });
    });

    describe('constructor2 with some checks', () => {
        it(' should construct a queue without capacity, with args', () => {
            stack = new Stack(-1, '1', '2', '3')

            expect(stack.capacity()).toBe(-1)
            expect(stack.size()).toBe(3);

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

            console.log('--- should pop after init ---');
            console.log(stack.contents);
          
        });      
    });
    
    /*
    it(' should push some items on the stack ', () => {
        expect(stack.isEmpty()).toBe(true);

        stack.push("c", "b", "a");

        expect(stack.isEmpty()).toBe(false);

        expect(stack.push("d")).toBe(4);
        expect(stack.size()).toBe(4)
        expect(typeof stack.top()).toBe("string")
        expect(stack.top()).toBe("d")


        expect(stack.push("e")).toBe(5)
        expect(stack.size()).toBe(5)
        expect(typeof stack.top()).toBe("string")
        expect(stack.top()).toBe("e")

        //stack.contents.map((elt: string) => console.log(elt))
    })

    it(' should pop some items from the stack', () => {
        //stack.contents.map((elt: string) => console.log(elt))

        expect(stack.pop()).toBe("e")
        expect(stack.size()).toBe(4)
        expect(stack.top()).toBe("d")

        expect(stack.pop()).toBe("d")
        expect(stack.size()).toBe(3)
        expect(stack.top()).toBe("c")

        expect(stack.pop()).toBe("c")
        expect(stack.size()).toBe(2)
        expect(stack.top()).toBe("b")
    })

    */
})