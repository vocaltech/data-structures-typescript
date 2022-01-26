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

    // visual representation of the linked list
    contents(): string {
        let linkedListStr = ''

        let curNode = this._head;
        linkedListStr = 'HEAD --> '

        while (curNode.next !== this._tail) {
            curNode = curNode.next!
            linkedListStr += '[Node: ' + curNode.item + '] --> '
        }

        linkedListStr += 'TAIL'

        return linkedListStr
    }

    isEmpty(): boolean {
        return (this._head.next === this._tail ? true: false)
    }

    getFirst(): T | null {
        return (this.isEmpty() ? null: this._head.next!.item)
    }

    getLast(): T | null {
        let curNode = this._head;

        while (curNode.next !== this._tail) {
            curNode = curNode.next!
        }

        return curNode.item
    }

    insertFirst(item: T) {
        const newNode = new Node(item)

        newNode.next = this._head.next
        this._head.next = newNode  
    }

    insertLast(item: T) {
        const newNode = new Node<T>(item)

        let curNode = this._head;

        while (curNode.next !== this._tail) {
            curNode = curNode.next!
        }

        newNode.next = this._tail
        curNode.next = newNode;
    }

    removeFirst(): T | null {
        throw new Error('Not yet implemented')
    };

    remove(searchKey: T): T | null {
        throw new Error('Not yet implemented')
    }

    contains(searchItem: T): boolean {
        let curNode = this._head;

        while (curNode !== this._tail) {
            if (curNode.item === searchItem) {
                return true;
            }

            curNode = curNode.next!
        }
        return false;
    }
}