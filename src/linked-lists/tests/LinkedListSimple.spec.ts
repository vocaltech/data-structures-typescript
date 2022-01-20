import { Node } from '../Node';
import { LinkedListSimple } from "../LinkedListSimple";

describe('insertFirst tests ', () => {
    const list = new LinkedListSimple()

    it(' should return initial head and tail', () => {
        expect(list.head.item).toBeNull()
        expect(list.head.next).toBe(list.tail)

        expect(list.tail.item).toBeNull()
        expect(list.tail.next).toBeNull()
    });

    it(' should insertFirst a new node', () => {
        list.insertFirst("item1")

        expect(list.head.next?.item).toBe("item1")
        expect(list.head.next?.next).toBe(list.tail)

    });

    it(' should insertFirst another new node', () => {
        list.insertFirst("item2")

        expect(list.head.next?.item).toBe("item2")
        expect(list.head.next?.next?.item).toBe("item1")
        
    });
    
});
