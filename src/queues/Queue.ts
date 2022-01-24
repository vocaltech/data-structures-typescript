import { IQueue } from "./IQueue";

export class Queue<T> implements IQueue<T> {
    private queue: T[];

    constructor(...args: T[]) {
        this.queue = [...args];
    }

    contents(): T[] {
        return this.queue
    }
    
    size(): number {
        return this.queue.length;
    }

    enqueue(...args: T[]): number {
        return this.queue.push(...args);
    }

    dequeue(): T {
        return <T>this.queue.shift();
    }

    peek(): T {
        return this.queue[0];
    }

    isEmpty(): boolean {
        return (this.queue.length === 0 ? true: false)
    }

    // TODO: isFull()
    isFull(): boolean  {
        return false;
    }
}