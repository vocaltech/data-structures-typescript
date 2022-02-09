import { IQueue } from "./IQueue";

export class Queue<T> implements IQueue<T> {
    private queue: T[];
    private _capacity: number = -1;
    private enqueueIdx: number = 0;

    constructor(capacity?: number, ...args: T[]) {
        if (capacity) { // capacity is defined
            this._capacity = capacity;
            this.enqueueIdx = args.length
        }

        this.queue = [...args];
    }

    contents(): T[] {
        return this.queue
    }

    capacity(): number {
        return this._capacity;
    }
    
    enqueue(...args: T[]): number {
        if (this._capacity === -1) { // no capacity defined
            return this.queue.push(...args);
        } else {
            if (this.isFull() ) {
                return this._capacity;
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

    peek(): T {
        return (this.isEmpty() ? null!: this.queue[0])
    }

    dequeue(): T {
        if (this._capacity === -1) { // no capacity defined
            return <T>this.queue.shift();
        } else {
            if (! this.isEmpty()) {
                if ( (this.enqueueIdx === 0) && (this.size() > 0) ) { // 1st dequeue with args in the constructor
                    this.enqueueIdx = this.size()
                }
                const dequeue = <T>this.queue.shift();
                this.queue = [...this.queue, undefined!]
                this.enqueueIdx--
                return dequeue;
            } else {
                return null!;
            }
        }
    }

    isEmpty(): boolean {
        if (this._capacity === -1) { // no capacity defined
            return (this.queue.length === 0 ? true: false)
        } else {
           return this.size() === 0
        }
    }

    isFull(): boolean  {
        if (this._capacity === -1) { // no capacity defined
            return false
        } else {
            return this.enqueueIdx === this._capacity
        }
    }

    size(): number {
        if (this._capacity === -1) { // no capacity defined
            return this.queue.length;
        } else {
            return (this.enqueueIdx === 0 ? 0: this.enqueueIdx)
        }
    }
}