export interface IQueue<T> {
    enqueue: (e: T) => number;
    dequeue: () => T;
    peek: () => T;
    size: () => number;
    isEmpty: () => boolean;
    isFull: () => boolean;
}