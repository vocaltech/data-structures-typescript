export interface IQueue {
    enqueue: (e: any) => number;
    dequeue: () => any | undefined;
    peek: () => any | undefined;
    size: () => number;
    isEmpty: () => boolean;
    isFull: () => boolean;
}