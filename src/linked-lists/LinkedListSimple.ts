import { ILinkedList } from "./ILinkedList";

export class LinkedListSimple<T> implements ILinkedList<T> {
    insertFirst(item: T) {
        throw new Error('Not yet implemented')
    }

    insertLast(item: T) {
        throw new Error('Not yet implemented')
    }

    removeFirst(): T | null {
        throw new Error('Not yet implemented')
    };

    remove(searchKey: T): T | null {
        throw new Error('Not yet implemented')
    }

    contains(searchItem: T): boolean {
        throw new Error('Not yet implemented')
    }

    isEmpty(): boolean {
        throw new Error('Not yet implemented')
    }

    getFirst(): T | null {
        throw new Error('Not yet implemented')
    }

}