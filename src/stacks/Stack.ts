import { IStack } from "./IStack";

export class Stack<T> implements IStack<T> {
    private stack: T[];
    private _capacity: number = -1;

    constructor(capacity?: number, ...args: T[]) {
        if (capacity) {
            this._capacity = capacity;
        }
        this.stack = [...args]
    }

    get contents(): T[] {
        return this.stack
    }

    size(): number {
        if (this._capacity === -1) { // no capacity defined
            return this.stack.length
        } else {
            return 0
        }
    }

    capacity(): number {
        return this._capacity
    }

    push(...items: T[]): number {
        if (this._capacity === -1) { // no capacity defined
            return this.stack.unshift(...items)
        } else {
            return 0
        }
    }

    pop(): T {
        if (this._capacity === -1) { // no capacity defined
            return <T>this.stack.shift()
        } else {
            return null!
        }
    }

    top(): T {
        return (this.isEmpty() ? null!: this.stack[0])
    }

    isEmpty(): boolean {
        if (this._capacity === -1) { // no capacity defined
            return (this.size() === 0 ? true: false)
        } else {
            return false
        }
    }

    isFull(): boolean {
        if (this._capacity === -1) { // no capacity defined
            return false
        } else {
            return true;
        }
    }
}