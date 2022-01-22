import { Node } from '../Node';
import { LinkedListSimple } from "../LinkedListSimple";

describe('insertFirst tests ', () => {
    const list = new LinkedListSimple<string>()

    it(' should return initial head and tail', () => {
        expect(list.head.item).toBeNull()
        expect(list.head.next).toBe(list.tail)

        expect(list.tail.item).toBeNull()
        expect(list.tail.next).toBeNull()
    });

    it(' isEmpty() should return true', () => {
        expect(list.isEmpty()).toBeTruthy()
    });

    it(' should getFirst() and return null', () => {
        expect(list.getFirst()).toBeNull()
    }); 

    it('should getLast() and return null', () => {
        expect(list.getLast()).toBeNull()
    }); 
    
    it(' should insertFirst a new node', () => {
        list.insertFirst("item1")

        expect(list.head.next?.item).toBe("item1")
        expect(list.head.next?.next).toBe(list.tail)
    });

    it(' isEmpty() should return false', () => {
        expect(list.isEmpty()).toBeFalsy()
    });

    it(' should insertFirst another new node', () => {
        list.insertFirst("item2")

        expect(list.head.next?.item).toBe("item2")
        expect(list.head.next?.next?.item).toBe("item1")
    });

    it(' should getFirst() ', () => {
        expect(list.getFirst()).toBe("item2")
    }); 

    it(' should insertLast() an item', () => {
        list.insertLast("item3")
        console.log(list.contents());
    });

    it(' should getLast()', () => {
        expect(list.getLast()).toBe("item3")
    });
    
    it(' should insertLast() another item', () => {
        list.insertLast("item4")
        console.log(list.contents());
    });

    it(' should getLast() and return item4', () => {
        expect(list.getLast()).toBe("item4")
    });
    
});
