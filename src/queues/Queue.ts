import { IQueue } from "./IQueue";

export class Queue<Type> implements IQueue {
    private queue: Type[];

    constructor(...args: Type[]) {
        this.queue = [...args];
    }

    size(): number {
        return this.queue.length;
    }

    enqueue(...args: Type[]): number {
        return this.queue.push(...args);
    }

    dequeue(): Type {
        return <Type>this.queue.shift();
    }

    peek(): Type {
        return this.queue[0];
    }
}