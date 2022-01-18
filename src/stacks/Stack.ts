import { IStack } from "./IStack";

export class Stack<T> implements IStack<T> {
    private stack: T[];

    constructor(...args: T[]) {
        this.stack = [...args]
    }

    get contents() {
        return this.stack
    }

    size(): number {
        return this.stack.length
    }

    push(item: T): number {
        return this.stack.unshift(item)
    }

    pop(): T {
        return <T>this.stack.shift()
    }

    top(): T {
        return this.stack[0]
    }

    // TODO: isEmpty()
    isEmpty(): boolean {
        return false
    }

    // TODO: isFull()
    isFull(): boolean {
        return false
    }
}