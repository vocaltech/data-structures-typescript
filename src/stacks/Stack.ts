import { IStack } from "./IStack";

export class Stack<T> implements IStack<T> {
    private stack: T[];
    private maxLimit: number = 0;

    constructor(maxLimit: number) {
        this.maxLimit = maxLimit
        this.stack = []
    }

    get contents() {
        return this.stack
    }

    size(): number {
        return this.stack.length
    }

    push(...items: T[]): number {
        return this.stack.unshift(...items)
    }

    pop(): T {
        return <T>this.stack.shift()
    }

    top(): T {
        return this.stack[0]
    }

    isEmpty(): boolean {
        return (this.size() === 0 ? true: false)
    }

    // TODO: isFull()
    isFull(): boolean {
        return false
    }
}