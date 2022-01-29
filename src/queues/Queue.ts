import { IQueue } from "./IQueue";

export class Queue<T> implements IQueue<T> {
    private queue: T[];
    private capacity: number = -1;
    private enqueueIdx: number = 0;
    private dequeueIdx: number = 0;

    constructor(capacity?: number, ...args: T[]) {
        if (capacity) { // capacity is defined
            this.queue = new Array<T>(capacity);
            this.capacity = capacity;
            this.dequeueIdx = capacity;
        } else {
            this.queue = [...args];
        }
    }

    contents(): T[] {
        return this.queue
    }

    getCapacity(): number {
        return this.capacity;
    }
    
    size(): number {
        if (this.capacity === -1) { // no capacity defined
            return this.queue.length;
        } else {
            return this.enqueueIdx;
        }
        
    }

    enqueue(...args: T[]): number {
        if (this.capacity === -1) { // no capacity defined
            return this.queue.push(...args);
        } else {
            if (this.isFull() ) {
                return this.capacity;
            }

            let curIdx = 0;
            for (const elt of this.queue) {
                if (curIdx === args.length) {
                    break;
                } else if (elt === undefined) {
                    this.queue[this.enqueueIdx] = args[curIdx];
                    curIdx++;

                    this.enqueueIdx++;
                }
            }
            return this.enqueueIdx;
        }
    }

    dequeue(): T {
        if (this.capacity === -1) { // no capacity defined
            return <T>this.queue.shift();
        } else {
            if (! this.isEmpty()) {
                const dequeue = <T>this.queue.shift();
                this.queue = [...this.queue, undefined!]
                this.dequeueIdx--
                this.enqueueIdx = this.dequeueIdx
                return dequeue;
            } else {
                return null!;
            }
        }
    }

    peek(): T {
        return (this.isEmpty() ? null!: this.queue[0])
    }

    isEmpty(): boolean {
        if (this.capacity === -1) { // no capacity defined
            return (this.queue.length === 0 ? true: false)
        } else {
            return (this.enqueueIdx === 0)
        }
    }

    isFull(): boolean  {
        if (this.capacity === -1) { // no capacity defined
            return false
        } else {
            return this.enqueueIdx === this.capacity
        }
    }
}