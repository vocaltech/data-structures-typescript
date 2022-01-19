import { Stack } from "../Stack"

describe('tests with strings', () => {
    const stack = new Stack<string>(3);
    
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
})
