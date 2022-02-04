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
        return this.stack.length
    }

    capacity(): number {
        return this._capacity
    }

    push(...items: T[]): number {
        if (this._capacity === -1) { // no capacity defined
            return this.stack.unshift(...items)
        } else {
            return (this.isFull() ? 0: this.stack.unshift(...items))
        }
    }

    pop(): T {
        if (this._capacity === -1) { // no capacity defined
            return <T>this.stack.shift()
        } else {
            return (this.isEmpty() ? null!: <T>this.stack.shift())
        }
    }

    top(): T {
        return (this.isEmpty() ? null!: this.stack[0])
    }

    isEmpty(): boolean {
       return (this.stack.length === 0 ? true: false)
    }

    isFull(): boolean {
        if (this._capacity === -1) { // no capacity defined
            return false
        } else {
            return (this.stack.length === this._capacity ? true: false)
        }
    }
}