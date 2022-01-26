import { Node } from '../Node';
import { LinkedListSimple } from "../LinkedListSimple";

const list = new LinkedListSimple<string>()

describe('insertFirst() and getFirst() tests ', () => {
    it(' should return initial head and tail', () => {
        expect(list.head.item).toBeNull()
        expect(list.head.next).toBe(list.tail)

        expect(list.tail.item).toBeNull()
        expect(list.tail.next).toBeNull()
    });

    it(' isEmpty() should return true', () => {
        expect(list.isEmpty()).toBeTruthy()
    });

    it(' should insertFirst a new node', () => {
        list.insertFirst("item1")

        expect(list.head.next?.item).toBe("item1")
        expect(list.head.next?.next).toBe(list.tail)
    });

    it(' isEmpty() should return false', () => {
        expect(list.isEmpty()).toBeFalsy()
    });

    it(' should getFirst() ', () => {
        expect(list.getFirst()).toBe("item1")
    }); 

    it(' should insertFirst another new node', () => {
        list.insertFirst("item2")

        expect(list.head.next?.item).toBe("item2")
        expect(list.head.next?.next?.item).toBe("item1")
    });

    it(' should getFirst() ', () => {
        expect(list.getFirst()).toBe("item2")
    }); 
});

describe('insertLast() and getLast() tests', () => {
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

describe('contains() tests', () => {
  it(' contains("item2") should be true', () => {
    expect(list.contains('item2')).toBeTruthy()
  });

  
  it(' contains("item1") should be true', () => {
    expect(list.contains('item1')).toBeTruthy()
  });

  it(' contains("item3") should be true', () => {
    expect(list.contains('item3')).toBeTruthy()
  });

  it(' contains("item4") should be true', () => {
    expect(list.contains('item4')).toBeTruthy()
  });

  it(' contains("item5") should be false', () => {
    expect(list.contains('item5')).toBeFalsy();
  });
});
