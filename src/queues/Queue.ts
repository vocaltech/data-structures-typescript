import { IQueue } from "./IQueue";

export class Queue<T> implements IQueue<T> {
    private queue: T[];
    private maxSize: number = 0;
    private enqueueIdx: number = 0;

    constructor(maxSize?: number, ...args: T[]) {
        if (maxSize) { // maxSize is defined
            this.queue = new Array<T>(maxSize);
            this.maxSize = maxSize;
        } else {
            this.queue = [...args];
        }
    }

    contents(): T[] {
        return this.queue
    }

    getMaxSize(): number {
        return this.maxSize;
    }
    
    size(): number {
        return this.queue.length;
    }

    // TODO: enqueue()
    enqueue(...args: T[]): number {
        if (this.maxSize === 0) { // no maxSize defined
            return this.queue.push(...args);
        } else {
            let curIdx = 0;
            for (const elt of this.queue) {
                if (curIdx === args.length) {
                    break;
                } else if (elt === undefined) {
                    console.log(`undefined / curIdx: ${curIdx} / enqueueIdx: ${this.enqueueIdx} / args: ${args}`);
                    this.queue[this.enqueueIdx] = args[curIdx];
                    curIdx++;;

                    this.enqueueIdx++;
                }
            }
            return 0;
        }
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

    isFull(): boolean  {
        return this.queue.length === this.maxSize
    }
}