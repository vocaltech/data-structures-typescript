import { ILinkedList } from "./ILinkedList";
import { Node } from "./Node";

export class LinkedListSimple<T> implements ILinkedList<T> {
    private _head: Node<T>
    private _tail: Node<T>

    constructor() {
        this._head = new Node<T>(null)
        this._tail = new Node<T>(null)
        this._head.next = this._tail
    }

    // setters and getters
    get head() {
        return this._head
    }

    get tail() {
        return this._tail
    }


    isEmpty(): boolean {
        return (this._head.next === this._tail ? true: false)
    }

    getFirst(): T | null {
        throw new Error('Not yet implemented')
    }

    insertFirst(item: T) {
        const newNode = new Node(item)

        newNode.next = this._head.next
        this._head.next = newNode
        
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
}